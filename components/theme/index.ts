import defaultTheme from './default';
import compactTheme from './compact';
import { tuple } from '../_util/type';

export type RawValueType = string | number;
export type ValueType = RawValueType | ((token: Record<TokenType, ValueType>) => RawValueType);

export type ColorType =
  | 'primaryColor'
  | 'infoColor'
  | 'successColor'
  | 'processingColor'
  | 'errorColor'
  | 'warningColor';

export const excludeParseTokens: Set<TokenType> = new Set(['lineHeightBase']);

export const TokenTypes = tuple(
  // Base
  'lineHeightBase',
  'fontSizeBase',
  'fontSizeLG',

  // Default
  'defaultPaddingLG',
  'defaultPaddingMD',
  'defaultPaddingSM',
  'defaultPaddingXS',
  'defaultPaddingXSS',

  // Padding
  'paddingLG',
  'paddingMD',
  'paddingSM',
  'paddingXS',
  'paddingXSS',

  // Margin
  'marginLG',
  'marginMD',
  'marginSM',
  'marginXS',
  'marginXSS',

  // Height
  'heightBase',
  'heightLG',
  'heightSM',
);

export type TokenType = typeof TokenTypes[number];

// Why Control is base?
// @control-padding-horizontal: @padding-sm;
// @control-padding-horizontal-sm: @default-padding-xs;

export interface Theme {
  colors?: Partial<Record<ColorType, string>>;
  token?: Partial<Record<TokenType, ValueType>>;
}

export { defaultTheme, compactTheme };
