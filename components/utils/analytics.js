import ReactGA from 'react-ga'
import TwitterConvTrkr from "react-twitter-conversion-tracker"
import ReactPixel from 'react-facebook-pixel';

export const initTwitterConvTrkr = () => {
  TwitterConvTrkr.init("o0chy");
}

export const logTwitterPageView = () => {
  TwitterConvTrkr.pageView();
}

export const initPixelConvTrkr = () => {
  ReactPixel.init("146019056346104");
}

export const logPixelPageView = () => {
  ReactPixel.pageView();
}

export const initGA = () => {
  ReactGA.initialize('UA-125576919-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
