/* eslint-disable import/prefer-default-export, prefer-destructuring */

import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import { TinyColor } from '@ctrl/tinycolor';
import { generate } from '@ant-design/colors';
import kebabCase from 'lodash/kebabCase';
import {
  defaultTheme,
  Theme,
  TokenType,
  TokenTypes,
  ValueType,
  excludeParseTokens,
  CalculateValueType,
} from '../theme';

// Confirm List:
/**
 * Confirm List:
 *
 * - Button
 * - Input
 * - Select
 * - DatePicker
 * - Switcher
 * - Upload - Item
 * - Alert
 * - Table
 */

const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;

const calculationToken: Record<string, CalculateValueType> = {
  fontLineHeight: token => Math.round(token.fontSizeBase * token.lineHeightBase),
};

export function registerTheme(globalPrefixCls: string, theme: Theme) {
  const variables: Record<string, string> = {};

  // ========================================================================
  // ==                               Colors                               ==
  // ========================================================================
  const { colors = {}, token = {} } = theme;

  const formatColor = (
    color: TinyColor,
    updater?: (cloneColor: TinyColor) => TinyColor | undefined,
  ) => {
    let clone = color.clone();
    clone = updater?.(clone) || clone;
    return clone.toRgbString();
  };

  const fillColor = (colorVal: string, type: string) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());

    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[7];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[1];
    variables[`${type}-color-deprecated-border`] = colorPalettes[3];
  };

  // ================ Primary Color ================
  if (colors.primaryColor) {
    fillColor(colors.primaryColor, 'primary');

    const primaryColor = new TinyColor(colors.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());

    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c =>
      c.setAlpha(c.getAlpha() * 0.12),
    );

    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c =>
      c.setAlpha(c.getAlpha() * 0.3),
    );
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c =>
      c.darken(2),
    );
  }

  // ================ Success Color ================
  if (colors.successColor) {
    fillColor(colors.successColor, 'success');
  }

  // ================ Warning Color ================
  if (colors.warningColor) {
    fillColor(colors.warningColor, 'warning');
  }

  // ================= Error Color =================
  if (colors.errorColor) {
    fillColor(colors.errorColor, 'error');
  }

  // ================= Info Color ==================
  if (colors.infoColor) {
    fillColor(colors.infoColor, 'info');
  }

  // ========================================================================
  // ==                               Tokens                               ==
  // ========================================================================
  if (token) {
    const mergedToken: Record<string, ValueType> = {
      ...defaultTheme.token,
      ...token,
      ...calculationToken,
    };

    // Use `get` to auto fill all the value
    TokenTypes.forEach((key: TokenType) => {
      Object.defineProperty(variables, key, {
        get() {
          const value = mergedToken[key];
          let returnValue: string | number;

          if (typeof value === 'function') {
            returnValue = value(variables as any);
          } else {
            returnValue = value;
          }

          console.log('>>>', key, excludeParseTokens);

          if (excludeParseTokens.has(key)) {
            return returnValue;
          }

          return typeof returnValue === 'number' ? `${returnValue}px` : returnValue;
        },
      });
    });

    // const rawToken: Record<string, RawValueType> = {};
    // Object.keys(mergedToken).forEach(key => {
    //   const value = mergedToken[key];

    //   if (typeof value === 'function') {
    //     rawToken[key] = value();
    //   }
    // });

    // // =========== Extend Tokens Generate ============
    // mergedToken.fontSizeLG = (mergedToken.fontSizeBase as any) + 2;

    // // Merge again in case user provided this
    // mergedToken = {
    //   ...mergedToken,
    //   ...token,
    // };

    // // =============== Fill Variables ================
    // Object.keys(mergedToken).forEach((key: TokenType) => {
    //   const variableKey = kebabCase(key);
    //   const value = mergedToken[key];
    //   const valueType = typeof value;

    //   if (valueType === 'number') {
    //     variables[variableKey] = `${value}px`;
    //   } else {
    //     variables[variableKey] = value as string;
    //   }
    // });
  }

  // ========================================================================
  // ==                              Generate                              ==
  // ========================================================================
  // Convert to css variables
  const cssList = Object.keys(variables).map(
    key => `--${globalPrefixCls}-${kebabCase(key)}: ${variables[key]};`,
  );

  updateCSS(
    `
  :root {
    ${cssList.join('\n')}
  }
  `,
    `${dynamicStyleMark}-dynamic-theme`,
  );
}
