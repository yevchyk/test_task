import px from 'utils/px'
import when from "utils/when";

const theme = {
  colors: {
    palette: {
      //colors set corresponds figma color styles
      white: '#FFFFFF',
      yellow: '#FFCB46',
      gray: '#BEBEBE',
      black: '#373737',
      black2: '#000000',
    },
    background: '#BEBEBE'
  },
  font: {
    default: `'Grtsk Giga Bkslnt';, 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },

  /** Helpers */
  px,
  when,
}

export default theme
