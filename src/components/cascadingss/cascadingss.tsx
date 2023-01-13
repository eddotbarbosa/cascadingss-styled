import styled, {css, DefaultTheme} from 'styled-components';
import {
  spacing,
  w,
  h,
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
  SpacingOptions,
  WidthOptions,
  HeightOptions,
  JustifyContentOptions,
  DisplayOptions,
  VisibilityOptions,
  FlexDirectionOptions,
  FlexWrapOptions,
  FlexOptions,
  FlexGrowOptions,
  FlexShrinkOptions,
  OrderOptions,
  AlignContentOptions,
  AlignItemsOptions,
  AlignSelfOptions,
  desktopFirstBreakpoints,
  mobileFirstBreakpoints
} from '../../styles/layout';

interface CascadingssProps {
  theme?: DefaultTheme;
  children?: React.ReactNode;
  w?: WidthOptions;
  h?: HeightOptions;
  display?: DisplayOptions;
  visibility?: VisibilityOptions;
  flexDirection?: FlexDirectionOptions;
  flexWrap?: FlexWrapOptions;
  flex?: FlexOptions;
  flexGrow?: FlexGrowOptions;
  flexShrink?: FlexShrinkOptions;
  order?: OrderOptions;
  justifyContent?: JustifyContentOptions;
  alignContent?: AlignContentOptions;
  alignItems?: AlignItemsOptions;
  alignSelf?: AlignSelfOptions;
  mt?: SpacingOptions;
  mr?: SpacingOptions;
  mb?: SpacingOptions;
  ml?: SpacingOptions;
  pt?: SpacingOptions;
  pr?: SpacingOptions;
  pb?: SpacingOptions;
  pl?: SpacingOptions;

  w2xl?: WidthOptions;
  h2xl?: HeightOptions;
  display2xl?: DisplayOptions;
  visibility2xl?: VisibilityOptions;
  flexDirection2xl?: FlexDirectionOptions;
  flexWrap2xl?: FlexWrapOptions;
  flex2xl?: FlexOptions;
  flexGrow2xl?: FlexGrowOptions;
  flexShrink2xl?: FlexShrinkOptions;
  order2xl?: OrderOptions;
  justifyContent2xl?: JustifyContentOptions;
  alignContent2xl?: AlignContentOptions;
  alignItems2xl?: AlignItemsOptions;
  alignSelf2xl?: AlignSelfOptions;
  mt2xl?: SpacingOptions;
  mr2xl?: SpacingOptions;
  mb2xl?: SpacingOptions;
  ml2xl?: SpacingOptions;
  pt2xl?: SpacingOptions;
  pr2xl?: SpacingOptions;
  pb2xl?: SpacingOptions;
  pl2xl?: SpacingOptions;

  wXl?: WidthOptions;
  hXl?: HeightOptions;
  displayXl?: DisplayOptions;
  visibilityXl?: VisibilityOptions;
  flexDirectionXl?: FlexDirectionOptions;
  flexWrapXl?: FlexWrapOptions;
  flexXl?: FlexOptions;
  flexGrowXl?: FlexGrowOptions;
  flexShrinkXl?: FlexShrinkOptions;
  orderXl?: OrderOptions;
  justifyContentXl?: JustifyContentOptions;
  alignContentXl?: AlignContentOptions;
  alignItemsXl?: AlignItemsOptions;
  alignSelfXl?: AlignSelfOptions;
  mtXl?: SpacingOptions;
  mrXl?: SpacingOptions;
  mbXl?: SpacingOptions;
  mlXl?: SpacingOptions;
  ptXl?: SpacingOptions;
  prXl?: SpacingOptions;
  pbXl?: SpacingOptions;
  plXl?: SpacingOptions;

  wLg?: WidthOptions;
  hLg?: HeightOptions;
  displayLg?: DisplayOptions;
  visibilityLg?: VisibilityOptions;
  flexDirectionLg?: FlexDirectionOptions;
  flexWrapLg?: FlexWrapOptions;
  flexLg?: FlexOptions;
  flexGrowLg?: FlexGrowOptions;
  flexShrinkLg?: FlexShrinkOptions;
  orderLg?: OrderOptions;
  justifyContentLg?: JustifyContentOptions;
  alignContentLg?: AlignContentOptions;
  alignItemsLg?: AlignItemsOptions;
  alignSelfLg?: AlignSelfOptions;
  mtLg?: SpacingOptions;
  mrLg?: SpacingOptions;
  mbLg?: SpacingOptions;
  mlLg?: SpacingOptions;
  ptLg?: SpacingOptions;
  prLg?: SpacingOptions;
  pbLg?: SpacingOptions;
  plLg?: SpacingOptions;

  wMd?: WidthOptions;
  hMd?: HeightOptions;
  displayMd?: DisplayOptions;
  visibilityMd?: VisibilityOptions;
  flexDirectionMd?: FlexDirectionOptions;
  flexWrapMd?: FlexWrapOptions;
  flexMd?: FlexOptions;
  flexGrowMd?: FlexGrowOptions;
  flexShrinkMd?: FlexShrinkOptions;
  orderMd?: OrderOptions;
  justifyContentMd?: JustifyContentOptions;
  alignContentMd?: AlignContentOptions;
  alignItemsMd?: AlignItemsOptions;
  alignSelfMd?: AlignSelfOptions;
  mtMd?: SpacingOptions;
  mrMd?: SpacingOptions;
  mbMd?: SpacingOptions;
  mlMd?: SpacingOptions;
  ptMd?: SpacingOptions;
  prMd?: SpacingOptions;
  pbMd?: SpacingOptions;
  plMd?: SpacingOptions;

  wSm?: WidthOptions;
  hSm?: HeightOptions;
  displaySm?: DisplayOptions;
  visibilitySm?: VisibilityOptions;
  flexDirectionSm?: FlexDirectionOptions;
  flexWrapSm?: FlexWrapOptions;
  flexSm?: FlexOptions;
  flexGrowSm?: FlexGrowOptions;
  flexShrinkSm?: FlexShrinkOptions;
  orderSm?: OrderOptions;
  justifyContentSm?: JustifyContentOptions;
  alignContentSm?: AlignContentOptions;
  alignItemsSm?: AlignItemsOptions;
  alignSelfSm?: AlignSelfOptions;
  mtSm?: SpacingOptions;
  mrSm?: SpacingOptions;
  mbSm?: SpacingOptions;
  mlSm?: SpacingOptions;
  ptSm?: SpacingOptions;
  prSm?: SpacingOptions;
  pbSm?: SpacingOptions;
  plSm?: SpacingOptions;

  wXs?: WidthOptions;
  hXs?: HeightOptions;
  displayXs?: DisplayOptions;
  visibilityXs?: VisibilityOptions;
  flexDirectionXs?: FlexDirectionOptions;
  flexWrapXs?: FlexWrapOptions;
  flexXs?: FlexOptions;
  flexGrowXs?: FlexGrowOptions;
  flexShrinkXs?: FlexShrinkOptions;
  orderXs?: OrderOptions;
  justifyContentXs?: JustifyContentOptions;
  alignContentXs?: AlignContentOptions;
  alignItemsXs?: AlignItemsOptions;
  alignSelfXs?: AlignSelfOptions;
  mtXs?: SpacingOptions;
  mrXs?: SpacingOptions;
  mbXs?: SpacingOptions;
  mlXs?: SpacingOptions;
  ptXs?: SpacingOptions;
  prXs?: SpacingOptions;
  pbXs?: SpacingOptions;
  plXs?: SpacingOptions;
}

const Cascadingss = styled.div<CascadingssProps>`
  width: ${props => props.w ? w[props.w] : undefined};
  height: ${props => props.h ? h[props.h] : undefined};
  display: ${props => props.display ? display[props.display] : 'flex'};
  visibility: ${props => props.visibility ? visibility[props.visibility] : undefined};
  flex-direction: ${props => props.flexDirection ? flexDirection[props.flexDirection] : undefined};
  flex-wrap: ${props => props.flexWrap ? flexWrap[props.flexWrap] : undefined};
  flex: ${props => props.flex ? flex[props.flex] : undefined};
  flex-grow: ${props => props.flexGrow ? flexGrow[props.flexGrow] : undefined};
  flex-shrink: ${props => props.flexShrink ? flexShrink[props.flexShrink] : undefined};
  order: ${props => props.order ? order[props.order] : undefined};
  justify-content: ${props => props.justifyContent ? justifyContent[props.justifyContent] : undefined};
  align-content: ${props => props.alignContent ? alignContent[props.alignContent] : undefined};
  align-items: ${props => props.alignItems ? alignItems[props.alignItems] : undefined};
  align-self: ${props => props.alignSelf ? alignSelf[props.alignSelf] : undefined};
  margin-top: ${props => props.mt ? spacing[props.mt] : undefined};
  margin-right: ${props => props.mr ? spacing[props.mr] : undefined};
  margin-bottom: ${props => props.mb ? spacing[props.mb] : undefined};
  margin-left: ${props => props.ml ? spacing[props.ml] : undefined};
  padding-top: ${props => props.pt ? spacing[props.pt] : undefined};
  padding-right: ${props => props.pr ? spacing[props.pr] : undefined};
  padding-bottom: ${props => props.pb ? spacing[props.pb] : undefined};
  padding-left: ${props => props.pl ? spacing[props.pl] : undefined};

  ${(props) => (props.theme.breakpoints.selected === 'mobile' || props.theme.breakpoints.selected === undefined) && css<CascadingssProps>`
    @media (min-width: ${props => props.theme.breakpoints.mobileFirst.sm ? props.theme.breakpoints.mobileFirst.sm : mobileFirstBreakpoints.sm}) {
      width: ${props => props.wSm ? w[props.wSm] : undefined};
      height: ${props => props.hSm ? h[props.hSm] : undefined};
      display: ${props => props.displaySm ? display[props.displaySm] : undefined};
      visibility: ${props => props.visibilitySm ? visibility[props.visibilitySm] : undefined};
      flex-direction: ${props => props.flexDirectionSm ? flexDirection[props.flexDirectionSm] : undefined};
      flex-wrap: ${props => props.flexWrapSm ? flexWrap[props.flexWrapSm] : undefined};
      flex: ${props => props.flexSm ? flex[props.flexSm] : undefined};
      flex-grow: ${props => props.flexGrowSm ? flexGrow[props.flexGrowSm] : undefined};
      flex-shrink: ${props => props.flexShrinkSm ? flexShrink[props.flexShrinkSm] : undefined};
      order: ${props => props.orderSm ? order[props.orderSm] : undefined};
      justify-content: ${props => props.justifyContentSm ? justifyContent[props.justifyContentSm] : undefined};
      align-content: ${props => props.alignContentSm ? alignContent[props.alignContentSm] : undefined};
      align-items: ${props => props.alignItemsSm ? alignItems[props.alignItemsSm] : undefined};
      align-self: ${props => props.alignSelfSm ? alignSelf[props.alignSelfSm] : undefined};
      margin-top: ${props => props.mtSm ? spacing[props.mtSm] : undefined};
      margin-right: ${props => props.mrSm ? spacing[props.mrSm] : undefined};
      margin-bottom: ${props => props.mbSm ? spacing[props.mbSm] : undefined};
      margin-left: ${props => props.mlSm ? spacing[props.mlSm] : undefined};
      padding-top: ${props => props.ptSm ? spacing[props.ptSm] : undefined};
      padding-right: ${props => props.prSm ? spacing[props.prSm] : undefined};
      padding-bottom: ${props => props.pbSm ? spacing[props.pbSm] : undefined};
      padding-left: ${props => props.plSm ? spacing[props.plSm] : undefined};
    }

    @media (min-width: ${props => props.theme.breakpoints.mobileFirst.md ? props.theme.breakpoints.mobileFirst.md : mobileFirstBreakpoints.md}) {
      width: ${props => props.wMd ? w[props.wMd] : undefined};
      height: ${props => props.hMd ? h[props.hMd] : undefined};
      display: ${props => props.displayMd ? display[props.displayMd] : undefined};
      visibility: ${props => props.visibilityMd ? visibility[props.visibilityMd] : undefined};
      flex-direction: ${props => props.flexDirectionMd ? flexDirection[props.flexDirectionMd] : undefined};
      flex-wrap: ${props => props.flexWrapMd ? flexWrap[props.flexWrapMd] : undefined};
      flex: ${props => props.flexMd ? flex[props.flexMd] : undefined};
      flex-grow: ${props => props.flexGrowMd ? flexGrow[props.flexGrowMd] : undefined};
      flex-shrink: ${props => props.flexShrinkMd ? flexShrink[props.flexShrinkMd] : undefined};
      order: ${props => props.orderMd ? order[props.orderMd] : undefined};
      justify-content: ${props => props.justifyContentMd ? justifyContent[props.justifyContentMd] : undefined};
      align-content: ${props => props.alignContentMd ? alignContent[props.alignContentMd] : undefined};
      align-items: ${props => props.alignItemsMd ? alignItems[props.alignItemsMd] : undefined};
      align-self: ${props => props.alignSelfMd ? alignSelf[props.alignSelfMd] : undefined};
      margin-top: ${props => props.mtMd ? spacing[props.mtMd] : undefined};
      margin-right: ${props => props.mrMd ? spacing[props.mrMd] : undefined};
      margin-bottom: ${props => props.mbMd ? spacing[props.mbMd] : undefined};
      margin-left: ${props => props.mlMd ? spacing[props.mlMd] : undefined};
      padding-top: ${props => props.ptMd ? spacing[props.ptMd] : undefined};
      padding-right: ${props => props.prMd ? spacing[props.prMd] : undefined};
      padding-bottom: ${props => props.pbMd ? spacing[props.pbMd] : undefined};
      padding-left: ${props => props.plMd ? spacing[props.plMd] : undefined};
    }

    @media (min-width: ${props => props.theme.breakpoints.mobileFirst.lg ? props.theme.breakpoints.mobileFirst.lg : mobileFirstBreakpoints.lg}) {
      width: ${props => props.wLg ? w[props.wLg] : undefined};
      height: ${props => props.hLg ? h[props.hLg] : undefined};
      display: ${props => props.displayLg ? display[props.displayLg] : undefined};
      visibility: ${props => props.visibilityLg ? visibility[props.visibilityLg] : undefined};
      flex-direction: ${props => props.flexDirectionLg ? flexDirection[props.flexDirectionLg] : undefined};
      flex-wrap: ${props => props.flexWrapLg ? flexWrap[props.flexWrapLg] : undefined};
      flex: ${props => props.flexLg ? flex[props.flexLg] : undefined};
      flex-grow: ${props => props.flexGrowLg ? flexGrow[props.flexGrowLg] : undefined};
      flex-shrink: ${props => props.flexShrinkLg ? flexShrink[props.flexShrinkLg] : undefined};
      order: ${props => props.orderLg ? order[props.orderLg] : undefined};
      justify-content: ${props => props.justifyContentLg ? justifyContent[props.justifyContentLg] : undefined};
      align-content: ${props => props.alignContentLg ? alignContent[props.alignContentLg] : undefined};
      align-items: ${props => props.alignItemsLg ? alignItems[props.alignItemsLg] : undefined};
      align-self: ${props => props.alignSelfLg ? alignSelf[props.alignSelfLg] : undefined};
      margin-top: ${props => props.mtLg ? spacing[props.mtLg] : undefined};
      margin-right: ${props => props.mrLg ? spacing[props.mrLg] : undefined};
      margin-bottom: ${props => props.mbLg ? spacing[props.mbLg] : undefined};
      margin-left: ${props => props.mlLg ? spacing[props.mlLg] : undefined};
      padding-top: ${props => props.ptLg ? spacing[props.ptLg] : undefined};
      padding-right: ${props => props.prLg ? spacing[props.prLg] : undefined};
      padding-bottom: ${props => props.pbLg ? spacing[props.pbLg] : undefined};
      padding-left: ${props => props.plLg ? spacing[props.plLg] : undefined};
    }

    @media (min-width: ${props => props.theme.breakpoints.mobileFirst.xl ? props.theme.breakpoints.mobileFirst.xl : mobileFirstBreakpoints.xl}) {
      width: ${props => props.wXl ? w[props.wXl] : undefined};
      height: ${props => props.hXl ? h[props.hXl] : undefined};
      display: ${props => props.displayXl ? display[props.displayXl] : undefined};
      visibility: ${props => props.visibilityXl ? visibility[props.visibilityXl] : undefined};
      flex-direction: ${props => props.flexDirectionXl ? flexDirection[props.flexDirectionXl] : undefined};
      flex-wrap: ${props => props.flexWrapXl ? flexWrap[props.flexWrapXl] : undefined};
      flex: ${props => props.flexXl ? flex[props.flexXl] : undefined};
      flex-grow: ${props => props.flexGrowXl ? flexGrow[props.flexGrowXl] : undefined};
      flex-shrink: ${props => props.flexShrinkXl ? flexShrink[props.flexShrinkXl] : undefined};
      order: ${props => props.orderXl ? order[props.orderXl] : undefined};
      justify-content: ${props => props.justifyContentXl ? justifyContent[props.justifyContentXl] : undefined};
      align-content: ${props => props.alignContentXl ? alignContent[props.alignContentXl] : undefined};
      align-items: ${props => props.alignItemsXl ? alignItems[props.alignItemsXl] : undefined};
      align-self: ${props => props.alignSelfXl ? alignSelf[props.alignSelfXl] : undefined};
      margin-top: ${props => props.mtXl ? spacing[props.mtXl] : undefined};
      margin-right: ${props => props.mrXl ? spacing[props.mrXl] : undefined};
      margin-bottom: ${props => props.mbXl ? spacing[props.mbXl] : undefined};
      margin-left: ${props => props.mlXl ? spacing[props.mlXl] : undefined};
      padding-top: ${props => props.ptXl ? spacing[props.ptXl] : undefined};
      padding-right: ${props => props.prXl ? spacing[props.prXl] : undefined};
      padding-bottom: ${props => props.pbXl ? spacing[props.pbXl] : undefined};
      padding-left: ${props => props.plXl ? spacing[props.plXl] : undefined};
    }

    @media (min-width: ${props => props.theme.breakpoints.mobileFirst['2xl'] ? props.theme.breakpoints.mobileFirst['2xl'] : mobileFirstBreakpoints['2xl']}) {
      width: ${props => props.w2xl ? w[props.w2xl] : undefined};
      height: ${props => props.h2xl ? h[props.h2xl] : undefined};
      display: ${props => props.display2xl ? display[props.display2xl] : undefined};
      visibility: ${props => props.visibility2xl ? visibility[props.visibility2xl] : undefined};
      flex-direction: ${props => props.flexDirection2xl ? flexDirection[props.flexDirection2xl] : undefined};
      flex-wrap: ${props => props.flexWrap2xl ? flexWrap[props.flexWrap2xl] : undefined};
      flex: ${props => props.flex2xl ? flex[props.flex2xl] : undefined};
      flex-grow: ${props => props.flexGrow2xl ? flexGrow[props.flexGrow2xl] : undefined};
      flex-shrink: ${props => props.flexShrink2xl ? flexShrink[props.flexShrink2xl] : undefined};
      order: ${props => props.order2xl ? order[props.order2xl] : undefined};
      justify-content: ${props => props.justifyContent2xl ? justifyContent[props.justifyContent2xl] : undefined};
      align-content: ${props => props.alignContent2xl ? alignContent[props.alignContent2xl] : undefined};
      align-items: ${props => props.alignItems2xl ? alignItems[props.alignItems2xl] : undefined};
      align-self: ${props => props.alignSelf2xl ? alignSelf[props.alignSelf2xl] : undefined};
      margin-top: ${props => props.mt2xl ? spacing[props.mt2xl] : undefined};
      margin-right: ${props => props.mr2xl ? spacing[props.mr2xl] : undefined};
      margin-bottom: ${props => props.mb2xl ? spacing[props.mb2xl] : undefined};
      margin-left: ${props => props.ml2xl ? spacing[props.ml2xl] : undefined};
      padding-top: ${props => props.pt2xl ? spacing[props.pt2xl] : undefined};
      padding-right: ${props => props.pr2xl ? spacing[props.pr2xl] : undefined};
      padding-bottom: ${props => props.pb2xl ? spacing[props.pb2xl] : undefined};
      padding-left: ${props => props.pl2xl ? spacing[props.pl2xl] : undefined};
    }
  `}

  ${(props) => (props.theme.breakpoints.selected === 'desktop') && css<CascadingssProps>`
    @media (max-width: ${props => props.theme.breakpoints.desktopFirst.xl ? props.theme.breakpoints.desktopFirst.xl : desktopFirstBreakpoints.xl}) {
      width: ${props => props.wXl ? w[props.wXl] : undefined};
      height: ${props => props.hXl ? h[props.hXl] : undefined};
      display: ${props => props.displayXl ? display[props.displayXl] : undefined};
      visibility: ${props => props.visibilityXl ? visibility[props.visibilityXl] : undefined};
      flex-direction: ${props => props.flexDirectionXl ? flexDirection[props.flexDirectionXl] : undefined};
      flex-wrap: ${props => props.flexWrapXl ? flexWrap[props.flexWrapXl] : undefined};
      flex: ${props => props.flexXl ? flex[props.flexXl] : undefined};
      flex-grow: ${props => props.flexGrowXl ? flexGrow[props.flexGrowXl] : undefined};
      flex-shrink: ${props => props.flexShrinkXl ? flexShrink[props.flexShrinkXl] : undefined};
      order: ${props => props.orderXl ? order[props.orderXl] : undefined};
      justify-content: ${props => props.justifyContentXl ? justifyContent[props.justifyContentXl] : undefined};
      align-content: ${props => props.alignContentXl ? alignContent[props.alignContentXl] : undefined};
      align-items: ${props => props.alignItemsXl ? alignItems[props.alignItemsXl] : undefined};
      align-self: ${props => props.alignSelfXl ? alignSelf[props.alignSelfXl] : undefined};
      margin-top: ${props => props.mtXl ? spacing[props.mtXl] : undefined};
      margin-right: ${props => props.mrXl ? spacing[props.mrXl] : undefined};
      margin-bottom: ${props => props.mbXl ? spacing[props.mbXl] : undefined};
      margin-left: ${props => props.mlXl ? spacing[props.mlXl] : undefined};
      padding-top: ${props => props.ptXl ? spacing[props.ptXl] : undefined};
      padding-right: ${props => props.prXl ? spacing[props.prXl] : undefined};
      padding-bottom: ${props => props.pbXl ? spacing[props.pbXl] : undefined};
      padding-left: ${props => props.plXl ? spacing[props.plXl] : undefined};
    }

    @media (max-width: ${props => props.theme.breakpoints.desktopFirst.lg ? props.theme.breakpoints.desktopFirst.lg : desktopFirstBreakpoints.lg}) {
      width: ${props => props.wLg ? w[props.wLg] : undefined};
      height: ${props => props.hLg ? h[props.hLg] : undefined};
      display: ${props => props.displayLg ? display[props.displayLg] : undefined};
      visibility: ${props => props.visibilityLg ? visibility[props.visibilityLg] : undefined};
      flex-direction: ${props => props.flexDirectionLg ? flexDirection[props.flexDirectionLg] : undefined};
      flex-wrap: ${props => props.flexWrapLg ? flexWrap[props.flexWrapLg] : undefined};
      flex: ${props => props.flexLg ? flex[props.flexLg] : undefined};
      flex-grow: ${props => props.flexGrowLg ? flexGrow[props.flexGrowLg] : undefined};
      flex-shrink: ${props => props.flexShrinkLg ? flexShrink[props.flexShrinkLg] : undefined};
      order: ${props => props.orderLg ? order[props.orderLg] : undefined};
      justify-content: ${props => props.justifyContentLg ? justifyContent[props.justifyContentLg] : undefined};
      align-content: ${props => props.alignContentLg ? alignContent[props.alignContentLg] : undefined};
      align-items: ${props => props.alignItemsLg ? alignItems[props.alignItemsLg] : undefined};
      align-self: ${props => props.alignSelfLg ? alignSelf[props.alignSelfLg] : undefined};
      margin-top: ${props => props.mtLg ? spacing[props.mtLg] : undefined};
      margin-right: ${props => props.mrLg ? spacing[props.mrLg] : undefined};
      margin-bottom: ${props => props.mbLg ? spacing[props.mbLg] : undefined};
      margin-left: ${props => props.mlLg ? spacing[props.mlLg] : undefined};
      padding-top: ${props => props.ptLg ? spacing[props.ptLg] : undefined};
      padding-right: ${props => props.prLg ? spacing[props.prLg] : undefined};
      padding-bottom: ${props => props.pbLg ? spacing[props.pbLg] : undefined};
      padding-left: ${props => props.plLg ? spacing[props.plLg] : undefined};
    }

    @media (max-width: ${props => props.theme.breakpoints.desktopFirst.md ? props.theme.breakpoints.desktopFirst.md : desktopFirstBreakpoints.md}) {
      width: ${props => props.wMd ? w[props.wMd] : undefined};
      height: ${props => props.hMd ? h[props.hMd] : undefined};
      display: ${props => props.displayMd ? display[props.displayMd] : undefined};
      visibility: ${props => props.visibilityMd ? visibility[props.visibilityMd] : undefined};
      flex-direction: ${props => props.flexDirectionMd ? flexDirection[props.flexDirectionMd] : undefined};
      flex-wrap: ${props => props.flexWrapMd ? flexWrap[props.flexWrapMd] : undefined};
      flex: ${props => props.flexMd ? flex[props.flexMd] : undefined};
      flex-grow: ${props => props.flexGrowMd ? flexGrow[props.flexGrowMd] : undefined};
      flex-shrink: ${props => props.flexShrinkMd ? flexShrink[props.flexShrinkMd] : undefined};
      order: ${props => props.orderMd ? order[props.orderMd] : undefined};
      justify-content: ${props => props.justifyContentMd ? justifyContent[props.justifyContentMd] : undefined};
      align-content: ${props => props.alignContentMd ? alignContent[props.alignContentMd] : undefined};
      align-items: ${props => props.alignItemsMd ? alignItems[props.alignItemsMd] : undefined};
      align-self: ${props => props.alignSelfMd ? alignSelf[props.alignSelfMd] : undefined};
      margin-top: ${props => props.mtMd ? spacing[props.mtMd] : undefined};
      margin-right: ${props => props.mrMd ? spacing[props.mrMd] : undefined};
      margin-bottom: ${props => props.mbMd ? spacing[props.mbMd] : undefined};
      margin-left: ${props => props.mlMd ? spacing[props.mlMd] : undefined};
      padding-top: ${props => props.ptMd ? spacing[props.ptMd] : undefined};
      padding-right: ${props => props.prMd ? spacing[props.prMd] : undefined};
      padding-bottom: ${props => props.pbMd ? spacing[props.pbMd] : undefined};
      padding-left: ${props => props.plMd ? spacing[props.plMd] : undefined};
    }

    @media (max-width: ${props => props.theme.breakpoints.desktopFirst.sm ? props.theme.breakpoints.desktopFirst.sm : desktopFirstBreakpoints.sm}) {
      width: ${props => props.wSm ? w[props.wSm] : undefined};
      height: ${props => props.hSm ? h[props.hSm] : undefined};
      display: ${props => props.displaySm ? display[props.displaySm] : undefined};
      visibility: ${props => props.visibilitySm ? visibility[props.visibilitySm] : undefined};
      flex-direction: ${props => props.flexDirectionSm ? flexDirection[props.flexDirectionSm] : undefined};
      flex-wrap: ${props => props.flexWrapSm ? flexWrap[props.flexWrapSm] : undefined};
      flex: ${props => props.flexSm ? flex[props.flexSm] : undefined};
      flex-grow: ${props => props.flexGrowSm ? flexGrow[props.flexGrowSm] : undefined};
      flex-shrink: ${props => props.flexShrinkSm ? flexShrink[props.flexShrinkSm] : undefined};
      order: ${props => props.orderSm ? order[props.orderSm] : undefined};
      justify-content: ${props => props.justifyContentSm ? justifyContent[props.justifyContentSm] : undefined};
      align-content: ${props => props.alignContentSm ? alignContent[props.alignContentSm] : undefined};
      align-items: ${props => props.alignItemsSm ? alignItems[props.alignItemsSm] : undefined};
      align-self: ${props => props.alignSelfSm ? alignSelf[props.alignSelfSm] : undefined};
      margin-top: ${props => props.mtSm ? spacing[props.mtSm] : undefined};
      margin-right: ${props => props.mrSm ? spacing[props.mrSm] : undefined};
      margin-bottom: ${props => props.mbSm ? spacing[props.mbSm] : undefined};
      margin-left: ${props => props.mlSm ? spacing[props.mlSm] : undefined};
      padding-top: ${props => props.ptSm ? spacing[props.ptSm] : undefined};
      padding-right: ${props => props.prSm ? spacing[props.prSm] : undefined};
      padding-bottom: ${props => props.pbSm ? spacing[props.pbSm] : undefined};
      padding-left: ${props => props.plSm ? spacing[props.plSm] : undefined};
    }

    @media (max-width: ${props => props.theme.breakpoints.desktopFirst.xs ? props.theme.breakpoints.desktopFirst.xs : desktopFirstBreakpoints.xs}) {
      width: ${props => props.wXs ? w[props.wXs] : undefined};
      height: ${props => props.hXs ? h[props.hXs] : undefined};
      display: ${props => props.displayXs ? display[props.displayXs] : undefined};
      visibility: ${props => props.visibilityXs ? visibility[props.visibilityXs] : undefined};
      flex-direction: ${props => props.flexDirectionXs ? flexDirection[props.flexDirectionXs] : undefined};
      flex-wrap: ${props => props.flexWrapXs ? flexWrap[props.flexWrapXs] : undefined};
      flex: ${props => props.flexXs ? flex[props.flexXs] : undefined};
      flex-grow: ${props => props.flexGrowXs ? flexGrow[props.flexGrowXs] : undefined};
      flex-shrink: ${props => props.flexShrinkXs ? flexShrink[props.flexShrinkXs] : undefined};
      order: ${props => props.orderXs ? order[props.orderXs] : undefined};
      justify-content: ${props => props.justifyContentXs ? justifyContent[props.justifyContentXs] : undefined};
      align-content: ${props => props.alignContentXs ? alignContent[props.alignContentXs] : undefined};
      align-items: ${props => props.alignItemsXs ? alignItems[props.alignItemsXs] : undefined};
      align-self: ${props => props.alignSelfXs ? alignSelf[props.alignSelfXs] : undefined};
      margin-top: ${props => props.mtXs ? spacing[props.mtXs] : undefined};
      margin-right: ${props => props.mrXs ? spacing[props.mrXs] : undefined};
      margin-bottom: ${props => props.mbXs ? spacing[props.mbXs] : undefined};
      margin-left: ${props => props.mlXs ? spacing[props.mlXs] : undefined};
      padding-top: ${props => props.ptXs ? spacing[props.ptXs] : undefined};
      padding-right: ${props => props.prXs ? spacing[props.prXs] : undefined};
      padding-bottom: ${props => props.pbXs ? spacing[props.pbXs] : undefined};
      padding-left: ${props => props.plXs ? spacing[props.plXs] : undefined};
    }
  `}
`;


export default Cascadingss;
