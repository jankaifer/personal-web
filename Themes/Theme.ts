import { css, SimpleInterpolation as TCss } from "styled-components";

class Colors {
  readonly text = "#DDD";
  readonly secondaryText = "#888";
  readonly textContrast = "#000";

  readonly background = "#000";
  readonly backgroundContrast = "#AAA";

  readonly primary = "#ff9a00";
}

class Sizes {
  readonly logo = "2em";

  readonly h1 = "2em";
  readonly h2 = "1.75em";
  readonly h3 = "1.4em";
  readonly medium = "1.25em";
  readonly small = ".75em";
}

type TBreakpoint = "sm" | "md" | "lg" | "xl";
class Breakpoints {
  readonly sm = 576;
  readonly md = 768;
  readonly lg = 992;
  readonly xl = 1200;

  onBreakpoint = (
    breakpoint: TBreakpoint,
    style: TCss,
    restStyle: TCss = css``
  ) => css`
    @media (max-width: ${this[breakpoint]}px) {
      ${style}
    }
    @media (min-width: ${this[breakpoint] + 1}px) {
      ${restStyle}
    }
  `;
}

class CssUtils {
  readonly darkScrollbar = css`
    ${({ theme }) => css`
      &::-webkit-scrollbar {
        background-color: none;
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.secondaryText};
      }
    `}
  `;
}

class Theme {
  readonly colors = new Colors();
  readonly sizes = new Sizes();
  readonly breakpoints = new Breakpoints();
  readonly cssUtils = new CssUtils();

  private readonly spacingConstant = 8;

  spacing(x: number) {
    return this.spacingConstant * x;
  }

  get maxPageWidth() {
    return this.breakpoints.lg;
  }
}

export default Theme;
