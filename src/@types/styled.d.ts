import 'styled-components';

import {desktopFirstBreakpoints, mobileFirstBreakpoints} from '../styles/layout';
import {CascadingssProps} from '../components/cascadingss/cascadingss';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      whiteOne: string;
      blackOne: string;
    },
    breakpoints: {
      selected?: 'desktop' | 'mobile',
      desktopFirst: typeof desktopFirstBreakpoints,
      mobileFirst: typeof mobileFirstBreakpoints
    }
  }
}
