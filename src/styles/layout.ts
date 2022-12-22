// variables
export type SpacingOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const spacing = {
  'xs': '8px',
  'sm': '12px',
  'md': '16px',
  'lg': '24px',
  'xl': '32px',
  '2xl': '48px'
};

const columns = {
  'column-1': '8.333333%',
  'column-2': '16.666667%',
  'column-3': '25%',
  'column-4': '33.333333%',
  'column-5': '41.666667%',
  'column-6': '50%',
  'column-7': '58.333333%',
  'column-8': '66.666667%',
  'column-9': '75%',
  'column-10': '83.333333%',
  'column-11': '91.666667%',
  'column-12': '100%'
};

const mobileFirstBreakpoints = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
};

const desktopFirstBreakpoints = {
  'xl': '1280px',
  'lg': '1024px',
  'md': '768px',
  'sm': '640px',
  'xs': '576px'
};

export type ColOptions = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

const col = {
  '1': columns["column-1"],
  '2': columns["column-2"],
  '3': columns["column-3"],
  '4': columns["column-4"],
  '5': columns["column-5"],
  '6': columns["column-6"],
  '7': columns["column-7"],
  '8': columns["column-8"],
  '9': columns["column-9"],
  '10': columns["column-10"],
  '11': columns["column-11"],
  '12': columns["column-12"]
};

export type DisplayOptions =
  'block' |
  'inline-block' |
  'inline' |
  'flex' |
  'inline-flex' |
  'table' |
  'inline-table' |
  'table-caption' |
  'table-cell' |
  'table-column' |
  'table-column-group' |
  'table-footer-group' |
  'table-header-group' |
  'table-row-group' |
  'table-row' |
  'flow-root' |
  'grid ' |
  'inline-grid' |
  'contents' |
  'list-item' |
  'hidden'
;

const display = {
  'block': 'block',
  'inline-block': 'inline-block',
  'inline': 'inline',
  'flex': 'flex',
  'inline-flex': 'inline-flex',
  'table': 'table',
  'inline-table': 'inline-table',
  'table-caption': 'table-caption',
  'table-cell': 'table-cell',
  'table-column': 'table-column',
  'table-column-group': 'table-column-group',
  'table-footer-group': 'table-footer-group',
  'table-header-group': 'table-header-group',
  'table-row-group': 'table-row-group',
  'table-row': 'table-row',
  'flow-root': 'flow-root',
  'grid ': 'grid ',
  'inline-grid': 'inline-grid',
  'contents': 'contents',
  'list-item': 'list-item',
  'hidden': 'none'
};

export type VisibilityOptions = 'visible' | 'invisible';

const visibility = {
  'visible': 'visible',
  'invisible': 'invisible'
};

export type FlexDirectionOptions = 'row' | 'row-reverse' | 'col' | 'col-reverse';

const flexDirection = {
  'row': 'row',
  'row-reverse': 'row-reverse',
  'col': 'column',
  'col-reverse': 'column-reverse',
};

export type FlexWrapOptions = 'wrap' | 'wrap-reverse' | 'nowrap';

const flexWrap = {
  'wrap': 'wrap',
  'wrap-reverse': 'wrap-reverse',
  'nowrap': 'nowrap'
};

export type FlexOptions = '1' | 'auto' | 'initial' | 'none';

const flex = {
  '1': '1 1 0%',
  'auto': '1 1 auto',
  'initial': '0 1 auto',
  'none': 'flex-none',
};

export type FlexGrowOptions = 'grow'| 'grow-0' ;

const flexGrow = {
  'grow': '1',
  'grow-0': '0',
};

export type FlexShrinkOptions = 'shrink' | 'shrink-0';

const flexShrink = {
  'shrink': '1',
  'shrink-0': '0'
};

export type OrderOptions =
  '1' |
  '2' |
  '3' |
  '4' |
  '5' |
  '6' |
  '7' |
  '8' |
  '9' |
  '10' |
  '11' |
  '12' |
  'first' |
  'last' |
  'none'
;

const order = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  'first': -9999,
  'last': 9999,
  'none': 0
};

export type JustifyContentOptions = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

const justifyContent = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'between': 'space-between',
  'around': 'space-around',
  'evenly': 'space-evenly'
};

export type AlignContentOptions =
  'start' |
  'end' |
  'center' |
  'between' |
  'around' |
  'evenly'
;

const alignContent = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'between': 'content-between',
  'around': 'space-around',
  'evenly': 'space-evenly'
}

export type AlignItemsOptions =
  'start' |
  'end' |
  'center' |
  'baseline' |
  'stretch'
;

const alignItems = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center':  'center',
  'baseline': 'baseline',
  'stretch': 'stretch'
};

export type AlignSelfOptions =
  'auto' |
  'start' |
  'end' |
  'center' |
  'stretch' |
  'baseline'
;

const alignSelf = {
  'auto': 'auto',
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'stretch': 'stretch',
  'baseline': 'baseline'
};

export {
  spacing,
  columns,
  col,
  display,
  visibility,
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,
  order,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  desktopFirstBreakpoints,
  mobileFirstBreakpoints
};
