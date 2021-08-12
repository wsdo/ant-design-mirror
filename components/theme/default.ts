import { presetPalettes } from '@ant-design/colors';
import type { Theme } from '.';

const defaultTheme: Theme = {
  colors: {
    primaryColor: presetPalettes.blue[5],
    infoColor: presetPalettes.blue[5],
    successColor: presetPalettes.green[5],
    processingColor: presetPalettes.blue[5],
    errorColor: presetPalettes.red[4],
    warningColor: presetPalettes.gold[5],
  },

  token: {
    fontSizeBase: 14,
  },
};

export default defaultTheme;
