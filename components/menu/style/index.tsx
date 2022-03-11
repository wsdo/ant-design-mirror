// import '../../style/index.less';
// import './index.less';

// // style dependencies
// // deps-lint-skip: layout
// import '../../tooltip/style';

// deps-lint-skip-all
import {
  DerivativeToken,
  useStyleRegister,
  useToken,
  UseComponentStyleResult,
  GenerateStyle,
} from '../../_util/theme';

interface MenuToken extends DerivativeToken {
  menuCls: string;
}

// =============================== Base ===============================
const genBaseStyle: GenerateStyle<MenuToken> = token => {
  const { menuCls } = token;

  return {
    [menuCls]: {},
  };
};

// ============================== Export ==============================
export default function useStyle(prefixCls: string): UseComponentStyleResult {
  const [theme, token, hashId] = useToken();

  const cascaderToken: MenuToken = {
    ...token,
    menuCls: `.${prefixCls}`,
  };

  return [
    useStyleRegister({ theme, token, hashId, path: [prefixCls] }, () => [
      genBaseStyle(cascaderToken),
    ]),
    hashId,
  ];
}
