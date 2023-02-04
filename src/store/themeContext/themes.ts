import { typography, Typography } from "./typography";

export interface Theme {
  name: string;
  textColor: string;
  textColorLight: string;
  textHighlight: string;
  highlightPrimary: string;
  highlightSecondary: string;
  alert: string;
  boxShadow1: string;
  boxShadow2: string;
  boxShadowAddressBar: string;
  boxShadowTopContainer: string;
  background1: string;
  background2: string;
  background3: string;
  background4?: string;
  sendShadow: string;
  receiveShadow: string;
  slippageChipShadow: string;
  tokenChipShadow: string;
  transition: string;
  glowShadow: string;
  navbarGlowShadow: string;
  colors: {
    blackOverlay: string;
  };
  typography: Typography;
}

export interface NetworkThemes {
  light: Theme;
  dark: Theme;
}

export const themes = {
  mainnet: {
    dark: {
      name: "dark",
      textColor: "var(--swarm-almost-white)",
      textColorLight: "var(--swarm-grey-01)",
      textHighlight: "var(--swarm-almost-white)",
      highlightPrimary: "var(--swarm-orange)",
      highlightSecondary: "var(--swarm-orange-highlight)",
      alert: "var(--swarm-light-red)",
      boxShadow1: "var(--boxShadow1)",
      boxShadow2: "var(--boxShadow2)",
      boxShadowAddressBar: "var(--boxShadow-addressBar)",
      boxShadowTopContainer: "var(--boxShadow-topContainer)",
      background1: "var(--swarm-charcoal-02)",
      background2: "var(--swarm-grey-02)",
      background3: "var(--swarm-charcoal-01)",
      background4: "var(--swarm-grey-01)",
      sendShadow: "var(--sendShadow)",
      receiveShadow: "var(--receiveShadow)",
      slippageChipShadow: "var(--slippageChipShadow)",
      tokenChipShadow: "var(--tokenChipShadow)",
      transition: "var(--transition1)",
      glowShadow: "var(--mainnet-glow-shadow)",
      navbarGlowShadow: "",
      colors: {
        blackOverlay: "var(--blackOverlay)",
      },
      typography: typography,
    },
    light: {
      name: "light",
      textColor: "var(--swarm-almost-black)",
      textColorLight: "var(--swarm-cement-dark-02)",
      textHighlight: "var(--swarm-almost-white)",
      highlightPrimary: "var(--swarm-orange)",
      highlightSecondary: "var(--swarm-orange-highlight)",
      alert: "var(--swarm-red)",
      boxShadow1: "var(--boxShadow1)",
      boxShadow2: "var(--boxShadow2)",
      boxShadowAddressBar: "var(--boxShadow-addressBar)",
      boxShadowTopContainer: "var(--boxShadow-topContainer)",
      background1: "var(--swarm-almost-white)",
      background2: "var(--swarm-cement)",
      background3: "var(--pure-white)",
      background4: "var(--pure-white)",
      sendShadow: "var(--sendShadow)",
      receiveShadow: "var(--receiveShadow)",
      slippageChipShadow: "var(--slippageChipShadow)",
      tokenChipShadow: "var(--tokenChipShadow)",
      transition: "var(--transition1)",
      glowShadow: "var(--mainnet-glow-shadow)",
      navbarGlowShadow: "",
      colors: {
        blackOverlay: "var(--blackOverlay)",
      },
      typography: typography,
    },
  },
  goerli: {
    dark: {
      name: "dark",
      textColor: "var(--swarm-almost-white)",
      textColorLight: "var(--swarm-grey-01)",
      textHighlight: "var(--swarm-almost-white)",
      highlightPrimary: "var(--goerli-primary)",
      highlightSecondary: "var(--goerli-secondary)",
      alert: "var(--swarm-light-red)",
      boxShadow1: "var(--boxShadow1)",
      boxShadow2: "var(--boxShadow2)",
      boxShadowAddressBar: "var(--boxShadow-addressBar)",
      boxShadowTopContainer: "var(--boxShadow-topContainer)",
      background1: "var(--swarm-charcoal-02)",
      background2: "var(--swarm-grey-02)",
      background3: "var(--swarm-charcoal-01)",
      background4: "var(--swarm-grey-01)",
      sendShadow: "var(--sendShadow)",
      receiveShadow: "var(--receiveShadow)",
      slippageChipShadow: "var(--slippageChipShadow)",
      tokenChipShadow: "var(--tokenChipShadow)",
      transition: "var(--transition1)",
      glowShadow: "var(--goerli-glow-shadow)",
      navbarGlowShadow: "var(--goerli-navbar-glow)",
      colors: {
        blackOverlay: "var(--blackOverlay)",
      },
      typography: typography,
    },
    light: {
      name: "light",
      textColor: "var(--swarm-almost-black)",
      textColorLight: "var(--swarm-cement-dark-02)",
      textHighlight: "var(--swarm-almost-white)",
      highlightPrimary: "var(--goerli-primary)",
      highlightSecondary: "var(--goerli-secondary)",
      alert: "var(--swarm-red)",
      boxShadow1: "var(--boxShadow1)",
      boxShadow2: "var(--boxShadow2)",
      boxShadowAddressBar: "var(--boxShadow-addressBar)",
      boxShadowTopContainer: "var(--boxShadow-topContainer)",
      background1: "var(--swarm-almost-white)",
      background2: "var(--swarm-cement)",
      background3: "var(--pure-white)",
      background4: "var(--pure-white)",
      sendShadow: "var(--sendShadow)",
      receiveShadow: "var(--receiveShadow)",
      slippageChipShadow: "var(--slippageChipShadow)",
      tokenChipShadow: "var(--tokenChipShadow)",
      transition: "var(--transition1)",
      glowShadow: "var(--goerli-glow-shadow)",
      navbarGlowShadow: "var(--goerli-navbar-glow)",
      colors: {
        blackOverlay: "var(--blackOverlay)",
      },
      typography: typography,
    },
  },
};
