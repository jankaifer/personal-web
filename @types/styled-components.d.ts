import type Theme from "Themes/Theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
  export type D = keyof DefaultTheme;
}
