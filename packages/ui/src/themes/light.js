const theme = {
  /** Options */
  yiqThreshold: 128,
  scaleLevels: 10, // for margins, paddings, etc. (m-1,m-2,etc)
  remUnit: 0.25,

  /** Components */
  borderWidth: "1px",
  borderRadius: {
    4: "4px",
    8: "8px",
    12: "12px",
    24: "24px",
    30: "30px",
    40: "40px",
    60: "60px",
  },

  /** Shadow */
  boxShadow: {
    1: "0px 0px 2px rgba(105,118,131,0.24), 0px 8px 16px -4px rgba(105,118,131,0.24)",
    2: "0px 0px 2px rgba(145,158,171,0.24), 0px 16px 32px -4px rgba(145,158,171,0.24)",
    3: "0px 0px 2px rgba(117,127,136,0.24), 0px 16px 32px -4px rgba(115,124,132,0.24)",
    4: "0px 12px 9px -5px rgba(0,0,0,0.12), 0px 10ox 32px rgba(0,29,124,0.12)",
  },

  /** Color system */
  variants: [
    "neutral",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ],

  color: {
    light: "#ffffff",
    dark: "#000000",
    primary: {
      0: "#eff4f6",
      1: "#c9d3d6",
      2: "#a3b2b6",
      3: "#7d9196",
      4: "#567076",
      5: "#304f56",
      6: "#0a2e36",
      7: "#09282e",
      8: "#082127",
      9: "#061b1f",
      10: "#051417",
    },
    secondary: {
      0: "#eefff4",
      1: "#c8ecd4",
      2: "#a2d8b4",
      3: "#7cc594",
      4: "#55b274",
      5: "#2f9e54",
      6: "#098b34",
      7: "#087a2e",
      8: "#076827",
      9: "#055721",
      10: "#04451a",
    },
    info: {
      0: "#daf3ff",
      1: "#b7d8e8",
      2: "#93bcd0",
      3: "#70a1b9",
      4: "#4c86a1",
      5: "#286a8a",
      6: "#054f72",
      7: "#054665",
      8: "#043d57",
      9: "#04334a",
      10: "#032a3c",
    },
    error: {
      0: "#ffe7e9",
      1: "#fcc9ce",
      2: "#f9aab2",
      3: "#f68b97",
      4: "#f26b7b",
      5: "#ef4c5f",
      6: "#ec2d43",
      7: "#cc2235",
      8: "#ab1728",
      9: "#8b0b1a",
      10: "#6a000c",
    },
    warning: {
      0: "#fff1de",
      1: "#ffe3b9",
      2: "#ffd494",
      3: "#ffc56f",
      4: "#ffb64a",
      5: "#ffa725",
      6: "#ff9800",
      7: "#ee8200",
      8: "#dc6b00",
      9: "#cb5500",
      10: "#b93e00",
    },
    success: {
      0: "#d3ffde",
      1: "#b0f4c1",
      2: "#8deaa3",
      3: "#6adf86",
      4: "#46d468",
      5: "#23ca4b",
      6: "#00bf2d",
      7: "#00a727",
      8: "#008f22",
      9: "#00761c",
      10: "#005e16",
    },
    neutral: {
      0: "#f6f6f6",
      1: "#e3e3e3",
      2: "#cccccc",
      3: "#b5b5b5",
      4: "#9e9e9e",
      5: "#878787",
      6: "#707070",
      7: "#595959",
      8: "#424242",
      9: "#2b2b2b",
      10: "#141414",
    },
  },

  /** Typography */

  fontFamily: "Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif",

  fontSize: {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    24: "24px",
    28: "28px",
    30: "30px",
    32: "32px",
    48: "48px",
    64: "64px",
  },

  fontWeight: {
    200: "200",
    300: "300",
    400: "400",
    500: "500",
    600: "600",
    700: "700",
  },

  lineHeight: {
    1: "normal",
    2: "1",
    3: "1.3",
    4: "1.6",
    5: "2",
    6: "2.1",
    16: "16px",
    18: "18px",
    22: "22px",
    24: "24px",
    28: "28px",
    30: "30px",
    36: "36px",
    48: "48px",
    64: "64px",
  },

  /** Grid system */
  gridColumns: 12,
  gridGutter: 1.5,
  gridBreakpoints: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  containerMaxWidths: {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
    xxl: "1320px",
  },

  /** Animation/Transitions */

  transition: {
    1: "all .1s ease",
    2: "all .2s ease",
    3: "all .5s ease",
  },

  /** Inputs */
  input: {
    focused: {
      boxShadow: "0px 8px 16px -4px rgba(48, 79, 86,0.10)",
    },
  },

  /** Button */
  button: {
    primary: {
      boxShadow:
        "0px 0px 2px rgba(48, 79, 86, 0.24), 0px 8px 16px -4px rgba(48, 79, 86, 0.24)",
    },
    secondary: {
      boxShadow:
        "0px 0px 2px rgba(162,216,180,0.24), 0px 8px 16px -4px rgba(162,216,180,0.24)",
    },
    error: {
      boxShadow:
        "0px 0px 2px rgba(255,232,234,0.24), 0px 8px 16px -4px rgba(255,232,234,0.24)",
    },
    neutral: {
      boxShadow:
        "0px 0px 2px rgba(232,232,232,0.24), 0px 8px 16px -4px rgba(232,232,232,0.24)",
    },
  },

  /** Heading */

  heading: {
    fontFamily: "'Fira Sans', sans-serif",
  },

  /** Header */

  header: {
    height: "64px",
  },

  /** Sidebar */
  sidebar: {
    hSpacing: "2rem",
    vSpacing: "16px",
    width: "220px",
    zIndex: "9990",
    backdrop: {
      zIndex: "9980",
    },
    collapseButton: {
      top: "65px",
      zIndex: "9992",
    },
  },

  /** Segment */
  segment: {
    spacing: "24px",
    borderRadius: "8px",
    compact: {
      spacing: "12px" /* 1 unidad y 1/2 */,
    },
  },

  /** Card */
  card: {
    width: 560,
  },

  /** Tooltip */
  tooltip: {
    Zindex: 1000,
  },

  /** Tooltip */
  modal: {
    backdropColor: "rgba(48, 79, 86, 0.2)",
    zIndex: 10000, // greater than sidebar and sidebar backdrop
  },

  /** Debug */
  debug: false,
};

export default theme;
