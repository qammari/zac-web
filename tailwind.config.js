const defaultTheme = require('tailwindcss/defaultTheme');
const globalTokens = require('@zyda.design/zac-tailwindcss/tokens/global.json');
const lightTokens = require('@zyda.design/zac-tailwindcss/tokens/light.json');
const darkTokens = require('@zyda.design/zac-tailwindcss/tokens/dark.json');
const typographyDefaultTokens = require('@zyda.design/zac-tailwindcss/tokens/typography-default.json');

module.exports = {
  purge: [
    './zyda-website/**/*.css',
    './zyda-website/**/*.js',
    './zyda-website/**/*.html',
    './zyda-website/**/*.json',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: globalTokens.colors.black.value,
      white: globalTokens.colors.white.value,
      gray: {
        100: globalTokens.colors.gray[100].value,
        200: globalTokens.colors.gray[200].value,
        300: globalTokens.colors.gray[300].value,
        400: globalTokens.colors.gray[400].value,
        500: globalTokens.colors.gray[500].value,
        600: globalTokens.colors.gray[600].value,
        700: globalTokens.colors.gray[700].value,
        800: globalTokens.colors.gray[800].value,
        900: globalTokens.colors.gray[900].value,
        1000: globalTokens.colors.gray[1000].value,
      },
      blue: {
        100: globalTokens.colors.blue[100].value,
        200: globalTokens.colors.blue[200].value,
        300: globalTokens.colors.blue[300].value,
        400: globalTokens.colors.blue[400].value,
        500: globalTokens.colors.blue[500].value,
        600: globalTokens.colors.blue[600].value,
        700: globalTokens.colors.blue[700].value,
        800: globalTokens.colors.blue[800].value,
        900: globalTokens.colors.blue[900].value,
        1000: globalTokens.colors.blue[1000].value,
      },
      teal: {
        100: globalTokens.colors.teal[100].value,
        200: globalTokens.colors.teal[200].value,
        300: globalTokens.colors.teal[300].value,
        400: globalTokens.colors.teal[400].value,
        500: globalTokens.colors.teal[500].value,
        600: globalTokens.colors.teal[600].value,
        700: globalTokens.colors.teal[700].value,
        800: globalTokens.colors.teal[800].value,
        900: globalTokens.colors.teal[900].value,
        1000: globalTokens.colors.teal[1000].value,
      },
      green: {
        100: globalTokens.colors.green[100].value,
        200: globalTokens.colors.green[200].value,
        300: globalTokens.colors.green[300].value,
        400: globalTokens.colors.green[400].value,
        500: globalTokens.colors.green[500].value,
        600: globalTokens.colors.green[600].value,
        700: globalTokens.colors.green[700].value,
        800: globalTokens.colors.green[800].value,
        900: globalTokens.colors.green[900].value,
        1000: globalTokens.colors.green[1000].value,
      },
      yellow: {
        100: globalTokens.colors.yellow[100].value,
        200: globalTokens.colors.yellow[200].value,
        300: globalTokens.colors.yellow[300].value,
        400: globalTokens.colors.yellow[400].value,
        500: globalTokens.colors.yellow[500].value,
        600: globalTokens.colors.yellow[600].value,
        700: globalTokens.colors.yellow[700].value,
        800: globalTokens.colors.yellow[800].value,
        900: globalTokens.colors.yellow[900].value,
        1000: globalTokens.colors.yellow[1000].value,
      },
      orange: {
        100: globalTokens.colors.orange[100].value,
        200: globalTokens.colors.orange[200].value,
        300: globalTokens.colors.orange[300].value,
        400: globalTokens.colors.orange[400].value,
        500: globalTokens.colors.orange[500].value,
        600: globalTokens.colors.orange[600].value,
        700: globalTokens.colors.orange[700].value,
        800: globalTokens.colors.orange[800].value,
        900: globalTokens.colors.orange[900].value,
        1000: globalTokens.colors.orange[1000].value,
      },
      red: {
        100: globalTokens.colors.red[100].value,
        200: globalTokens.colors.red[200].value,
        300: globalTokens.colors.red[300].value,
        400: globalTokens.colors.red[400].value,
        500: globalTokens.colors.red[500].value,
        600: globalTokens.colors.red[600].value,
        700: globalTokens.colors.red[700].value,
        800: globalTokens.colors.red[800].value,
        900: globalTokens.colors.red[900].value,
        1000: globalTokens.colors.red[1000].value,
      },
      purple: {
        100: globalTokens.colors.purple[100].value,
        200: globalTokens.colors.purple[200].value,
        300: globalTokens.colors.purple[300].value,
        400: globalTokens.colors.purple[400].value,
        500: globalTokens.colors.purple[500].value,
        600: globalTokens.colors.purple[600].value,
        700: globalTokens.colors.purple[700].value,
        800: globalTokens.colors.purple[800].value,
        900: globalTokens.colors.purple[900].value,
        1000: globalTokens.colors.purple[1000].value,
      },
      positive: {
        absolute: lightTokens.theme.positive.absolute.value,
        primary: lightTokens.theme.positive.primary.value,
        secondary: lightTokens.theme.positive.secondary.value,
        tertiary: lightTokens.theme.positive.tertiary.value,
        quaternary: lightTokens.theme.positive.quaternary.value,
        background: lightTokens.theme.positive.background.value,
      },
      negative: {
        absolute: lightTokens.theme.negative.absolute.value,
        primary: lightTokens.theme.negative.primary.value,
        secondary: lightTokens.theme.negative.secondary.value,
        tertiary: lightTokens.theme.negative.tertiary.value,
        quaternary: lightTokens.theme.negative.quaternary.value,
        background: lightTokens.theme.negative.background.value,
      },
      accent: {
        primary: lightTokens.theme.accent.primary.value,
        hover: lightTokens.theme.accent.hover.value,
        pressed: lightTokens.theme.accent.pressed.value,
        'opacity-50': lightTokens.theme.accent['opacity-50'].value,
        'opacity-30': lightTokens.theme.accent['opacity-30'].value,
        'opacity-10': lightTokens.theme.accent['opacity-10'].value,
      },
      info: {
        primary: lightTokens.theme.info.primary.value,
        hover: lightTokens.theme.info.hover.value,
        pressed: lightTokens.theme.info.pressed.value,
        'opacity-50': lightTokens.theme.info['opacity-50'].value,
        'opacity-30': lightTokens.theme.info['opacity-30'].value,
        'opacity-10': lightTokens.theme.info['opacity-10'].value,
      },
      success: {
        primary: lightTokens.theme.success.primary.value,
        hover: lightTokens.theme.success.hover.value,
        pressed: lightTokens.theme.success.pressed.value,
        'opacity-50': lightTokens.theme.success['opacity-50'].value,
        'opacity-30': lightTokens.theme.success['opacity-30'].value,
        'opacity-10': lightTokens.theme.success['opacity-10'].value,
      },
      warning: {
        primary: lightTokens.theme.warning.primary.value,
        hover: lightTokens.theme.warning.hover.value,
        pressed: lightTokens.theme.warning.pressed.value,
        'opacity-50': lightTokens.theme.warning['opacity-50'].value,
        'opacity-30': lightTokens.theme.warning['opacity-30'].value,
        'opacity-10': lightTokens.theme.warning['opacity-10'].value,
      },
      danger: {
        primary: lightTokens.theme.danger.primary.value,
        hover: lightTokens.theme.danger.hover.value,
        pressed: lightTokens.theme.danger.pressed.value,
        'opacity-50': lightTokens.theme.danger['opacity-50'].value,
        'opacity-30': lightTokens.theme.danger['opacity-30'].value,
        'opacity-10': lightTokens.theme.danger['opacity-10'].value,
      },
    },
    spacing: () => {
      const jsonSpacing = globalTokens.spacing;
      const spacingKeys = Object.keys(globalTokens.spacing);
      const obj = {};

      spacingKeys.forEach((spacing) => {
        return (obj[
          `${spacing}`
        ] = `${jsonSpacing[spacing].value}px`);
      });

      return obj;
    },
    fontWeight: () => {
      const jsonFontWeights = globalTokens.fontWeights;
      const fontWeightsKeys = Object.keys(globalTokens.fontWeights);
      const obj = {};

      fontWeightsKeys.forEach((fontWeight) => {
        return (obj[
          `${fontWeight}`
        ] = `${jsonFontWeights[fontWeight].value}px`);
      });

      return obj;
    },
    fontSize: () => {
      const jsonFontSizes = globalTokens.fontSizes;
      const fontSizesKeys = Object.keys(globalTokens.fontSizes);
      const obj = {};

      fontSizesKeys.forEach((fontSize) => {
        return (obj[
          `${fontSize}`
        ] = `${jsonFontSizes[fontSize].value}px`);
      });

      return obj;
    },
    lineHeight: () => {
      const jsonLineHeights = globalTokens.lineHeights;
      const lineHeightKeys = Object.keys(globalTokens.lineHeights);
      const obj = {};

      lineHeightKeys.forEach((lineHeight) => {
        return (obj[
          `${lineHeight}`
        ] = `${jsonLineHeights[lineHeight].value}px`);
      });

      return obj;
    },
    letterSpacing: () => {
      const jsonLetterSpacing = globalTokens.letterSpacing;
      const letterSpacingKeys = Object.keys(globalTokens.letterSpacing);
      const obj = {};

      letterSpacingKeys.forEach((letterSpacing) => {
        return (obj[
          `${letterSpacing}`
        ] = `${jsonLetterSpacing[letterSpacing].value}px`);
      });

      return obj;
    },
    borderRadius: () => {
      const jsonBorderRadius = globalTokens.borderRadius;
      const borderRadiusKeys = Object.keys(globalTokens.borderRadius);
      const obj = {};

      borderRadiusKeys.forEach((borderRadius) => {
        return (obj[
          `${borderRadius}`
        ] = `${jsonBorderRadius[borderRadius].value}px`);
      });

      return obj;
    },
    extend: {
      fontFamily: {
        sans: [
          `"${globalTokens.fontFamilies.sans.value}"`,
          ...defaultTheme.fontFamily.sans
        ],
        mono: [
          `"${globalTokens.fontFamilies.mono.value}"`,
          ...defaultTheme.fontFamily.mono
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};