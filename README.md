# Cascadingss Styled

A grid system based on flexbox maded with styled components and typescript.

## Related Repositories
[Cascadingss](https://github.com/eddotbarbosa/cascadingss)

## Technologies
* typescript
* reactjs
* styled components

## Getting Started
### instalation:
vite
```
git init
git clone https://github.com/eddotbarbosa/cascadingss-styled.git
npm install
```
files
```
just copy the setup structure files and add to your project
```
### setup structure:
```
src
├── @types
│   ├── styled.d.ts # add your styled components theme types here
├── cascadingss
│   ├── cascadingss.tsx   # this is the cascadingss component styled
├── styles
│   ├── global.ts   # add your global styles here
│   ├── layout.ts   # this file have all cascadingss styles
│   ├── theme.ts    # add your theme here
```

## Usage:
add the cascadingss theme and global styles to the app:
```
├── src
│   ├── App.tsx

import {ThemeProvider} from "styled-components";

import {theme} from './styles/theme';

import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
```

Using cascadingss component:
```
import Cascadingss from "./components/cascadingss/cascadingss";

const MyComponent = function () {
  return (
    <Cascadingss justifyContent="center" alignContent="center">
        <div>
          <h1>box 1</h1>
        </div>
        <div>
          <h1>box 1</h1>
        </div>
        <div>
          <h1>box 1</h1>
        </div>
    </Cascadingss>
  );
};

export {MyComponent};
```

Extending cascandingss styles to another styled component:
```
import styled from "styled-components";
import Cascadingss from "./components/cascadingss/cascadingss";

interface BoxProps {
  bg?: string;
}

const Box = styled(Cascadingss)<BoxProps>`
  height: 150px;
  width: 150px;
  color: white;
  background-color: ${props => props.bg};
`;


const MyComponent = function () {
  return (
    <Cascadingss justifyContent="center">
      <Box justifyContent="center" alignItems="center" bg="red" col="3" mr="md">
        <h1>box 1</h1>
      </Box>
      <Box justifyContent="center" alignItems="center" bg="blue" col="3" mr="md">
        <h1>box 1</h1>
      </Box>
      <Box justifyContent="center" alignItems="center" bg="green" col="3">
        <h1>box 1</h1>
      </Box>
    </Cascadingss>
  );
};

export {MyComponent};
```


Change rendered element:
```
Cascadingss default element is a <div> element, maybe you want to change
to another html element to do that use the as="" prop, per example if you
want to change to a <main> element use as="main".

<Cascadingss as="main" justifyContent="center"></Cascadingss>
```

Theme setup:
```
/styles/theme.ts

import {DefaultTheme} from "styled-components";

const theme: DefaultTheme = {
  colors: {
    whiteOne: '#ffffff',
    blackOne: '#213547'
  },
  breakpoints: {
    selected: undefined, // default value mobile
    desktopFirst: {
      xl: '', // default value 1280px
      lg: '', // default value 1024px
      md: '', // default value 768px
      sm: '', // default value 640px
      xs: ''  // default value 576px
    },
    mobileFirst: {
      sm: '',   // default value 640px
      md: '',   // default value 768px
      lg: '',   // default value 1024px
      xl: '',   // default value 1280px
      "2xl": '' // default value 1536px
    }
  }
};

export {theme};
```

```
/@types/styled.d.ts

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
```

## Props List:
| prop | option | properties |
|-------|------------|------------|
| col | 1~12 | width: 8.333333%~100%;|
| display | block | display: block; |
| display | inline-block | display: inline-block;|
| display | inline | display: inline;|
| display | flex | display: flex;|
| display | inline-flex | display: inline-flex;|
| display | table | display: table;|
| display | inline-table | display: inline-table;|
| display | table-caption | display: table-caption;|
| display | table-cell | display: table-cell;|
| display | table-column | display: table-column;|
| display | table-column-group | display: table-column-group;|
| display | table-header-group | display: table-header-group;|
| display | table-row-group | display: table-row-group;|
| display | table-row | display: table-row;|
| display | flow-root | display: flow-root;|
| display | grid | display: grid;|
| display | inline-grid | display: inline-grid;|
| display | contents | display: contents;|
| display | list-item | display: list-item;|
| display | hidden | display: none;|
| visibility | visible | visibility: visible;|
| visibility | invisible | visibility: hidden;|
| flexDirection | row | flex-direction: row;|
| flexDirection | row-reverse | flex-direction: row-reverse;|
| flexDirection | col | flex-direction: column;|
| flexDirection | col-reverse | flex-direction: column-reverse;|
| flexWrap | wrap | flex-wrap: wrap;|
| flexWrap | wrap-reverse | flex-wrap: wrap-reverse;|
| flexWrap | nowrap | flex-wrap: nowrap;|
| flex | 1  | flex: 1 1 0%;|
| flex | auto | flex: 1 1 auto;|
| flex | initial | flex: 0 1 auto;|
| flex | none | flex: none;|
| flexGrow | grow | flex-grow: 1;|
| flexGrow | grow-0 | flex-grow: 0;|
| flexShrink | shrink | flex-shrink: 1;|
| flexShrink | shrink-0 | flex-shrink: 0;|
| order | 1~12 | order: 1~12;|
| order | first | order: -9999;|
|  order | last | order: 9999;|
|  order | none | order: 0;|
| justifyContent | start | justify-content: flex-start;|
| justifyContent | end | justify-content: flex-end;|
| justifyContent | center | justify-content: center;|
| justifyContent | between | justify-content: space-between;|
| justifyContent | around | justify-content: space-around;|
| justifyContent | evenly | justify-content: space-evenly;|
| alignContent | start | align-content: flex-start;|
| alignContent | end | align-content: flex-end;|
| alignContent | center | align-content: center;|
| alignContent | between | align-content: space-between;|
| alignContent | around | align-content: space-around;|
| alignContent | evenly | align-content: space-evenly;|
| alignItems | start | align-items: flex-start;|
| alignItems | end | align-items: flex-end;|
| alignItems | center | align-items: center;|
| alignItems | baseline | align-items: baseline;|
| alignItems | stretch | align-items: stretch;|
| alignSelf | auto | align-self: auto;|
| alignSelf | start | align-self: flex-start;|
| alignSelf | end | align-self: flex-end;|
| alignSelf | center | align-self: center;|
| alignSelf | stretch | align-self: stretch;|
| alignSelf | baseline | align-self: baseline;|
| pt | xs, sm, md, lg, xl, 2xl | padding-top: xs~2xl;|
| pr | xs, sm, md, lg, xl, 2xl | padding-right: xs~2xl;|
| pb | xs, sm, md, lg, xl, 2xl | padding-bottom: xs~2xl;|
| pl | xs, sm, md, lg, xl, 2xl | padding-left: xs~2xl;|
| mt | xs, sm, md, lg, xl, 2xl | margin-top: xs~2xl;|
| mr | xs, sm, md, lg, xl, 2xl | margin-right: xs~2xl;|
| mb | xs, sm, md, lg, xl, 2xl | margin-bottom: xs~2xl;|
| ml | xs, sm, md, lg, xl, 2xl | margin-left: xs~2xl;|

### responsive:
| layout | prop additive | breakpoint |
|------|------|-------|
desktop first | Xl, Lg, Md, Sm, Xs| 1280px, 1024px, 768px, 640px, 576px|
mobile first | Sm, Md, Lg, Xl, 2xl| 640px, 768px, 1024px, 1280px, 1536px|
