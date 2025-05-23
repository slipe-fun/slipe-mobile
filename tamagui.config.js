import { createFont, createTamagui, createTokens } from 'tamagui'
import { createAnimations } from '@tamagui/animations-moti'
import { Easing } from 'react-native-reanimated'

const openRundeFont = createFont({
  family: 'OpenRunde',
  size: {
    1: 13,
    2: 14,
    3: 15,
    4: 16,
    5: 18,
    6: 20,
    7: 22,
    8: 26,
    true: 16,
  },
  weight: {
    1: '400',
    2: '500',
    3: '600',
    4: '700',
  },
  lineHeight: {
    1: 16,
    2: 17,
    3: 18,
    4: 19,
    5: 22,
    6: 24,
    7: 27,
    8: 31,
  },
  letterSpacing: {
    1: 0,
    2: -0.2,
    3: -0.25,
    4: -0.3,
    5: -0.35,
    6: -0.4,
    7: -0.45,
    8: -0.5,
  },
  face: {
    400: { normal: 'OpenRunde-Regular' },
    500: { normal: 'OpenRunde-Medium' },
    600: { normal: 'OpenRunde-Semibold' },
    700: { normal: 'OpenRunde-Bold' },
  },
})

export const tokens = createTokens({
  size: {
    1: 13,
    2: 14,
    3: 15,
    4: 16,
    5: 18,
    6: 20,
    7: 22,
    8: 26,
    true: 16,
  },
  weight: {
    1: '400',
    2: '500',
    3: '600',
    4: '700',
    true: '500',
  },
  lineHeight: {
    1: 16,
    2: 17,
    3: 18,
    4: 19,
    5: 22,
    6: 24,
    7: 27,
    8: 31,
    true: 22,
  },
  space: {
    0: 0,
    1: 4,
    2: 6,
    3: 8,
    4: 10,
    5: 12,
    6: 16,
    7: 20,
    8: 24,
    9: 28,
    10: 32,
    true: 16,
  },
  radius: {
    0: 0,
    1: 8,
    2: 10,
    3: 12,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 22,
    9: 24,
    10: 26,
    11: 28,
    12: 30,
    full: 999,
    true: 16,
  },
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 60,
    7: 70,
    8: 80,
    9: 90,
    10: 100,
  },
  color: {
    white: '#fff',
    primary: '#0A84FF',
    iosGlassButton: 'rgba(0, 0, 0, 0.24)',
    glassButton: 'rgba(0, 0, 0, 0.5)',
    red: '#E82132',
    elemBackgroundDark: 'rgba(255, 255, 255, 0.1)',
    elemBackgroundLight: 'rgba(0, 0, 0, 0.1)',
    indicator: 'rgba(255, 255, 255, 0.3)',
    transparentText: 'rgba(255, 255, 255, 0.65)',
    transparentIcon: 'hsla(0, 0.00%, 100.00%, 0.35)',
    black: '#000',
  },
})

const animations = createAnimations({
  fast: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: {
    type: 'spring',
    damping: 15,
    mass: 1,
    stiffness: 200,
  },
  slow: {
    type: 'spring',
    damping: 15,
    stiffness: 50,
  },
  quick: {
    type: 'timing',
    duration: 125,
    easing: Easing.inOut(Easing.ease),
  },
});

const configUI = createTamagui({
  fonts: {
    heading: openRundeFont,
    body: openRundeFont,
  },
  tokens,
  animations,

  themes: {
    light: {
      bg: tokens.color.white,
      color: tokens.color.black,
      elemBackground: tokens.color.elemBackgroundLight,
    },
    dark: {
      bg: tokens.color.black,
      color: tokens.color.white,
      elemBackground: tokens.color.elemBackgroundDark,
    },
  },

  shorthands: {
    ph: 'paddingHorizontal',
    pv: 'paddingVertical',
    p: 'padding',
    m: 'margin',
    f: 'flex',
    w: 'width',
    h: 'height',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pr: 'paddingRight',
    pl: 'paddingLeft',
    mt: 'marginTop',
    mb: 'marginBottom',
    mr: 'marginRight',
    ml: 'marginLeft',
    fz: 'fontSize',
    fw: 'fontWeight',
    lh: 'lineHeight',
    bc: 'backgroundColor',
  },

  defaultProps: {
    Text: {
      color: tokens.color.primary,
      fontFamily: '$body',
      fontSize: '$4',
      lineHeight: '$4',
    },
    Button: {
      backgroundColor: tokens.color.primary,
      borderRadius: '$3',
    },
  },
  defaultFont: '$body',
})

export default configUI
