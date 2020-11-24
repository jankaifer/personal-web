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
}

class Theme {
  readonly colors = new Colors();
  readonly sizes = new Sizes();

  private readonly spacingConstant = 8;

  spacing(x: number) {
    return this.spacingConstant * x;
  }

  readonly breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };

  get maxPageWidth() {
    return this.breakpoints.lg;
  }
}

export default Theme;
