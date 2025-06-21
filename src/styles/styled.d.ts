import 'styled-components';
import { themes } from './themes';

type ThemeType = (typeof themes)['neoglow'];

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
