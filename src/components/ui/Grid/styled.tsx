import { CSSProperties } from 'react'
import styled from 'styled-components'
import theme from 'lib/theme'

export interface FlexBlockSCProps
  extends Pick<
    CSSProperties,
    | 'flex'
    | 'flexDirection'
    | 'flexWrap'
    | 'justifyContent'
    | 'alignItems'
    | 'alignSelf'
    | 'alignContent'
    | 'flexShrink'
    | 'flexGrow'
    | 'flexBasis'
    | 'order'
  > {
  inline?: boolean
  gapHorizontal?: number | string
  gapVertical?: number | string
}

export const FlexBlockSC = styled.div<FlexBlockSCProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${theme.when('flex', (flex) => `flex: ${flex};`)}
  ${theme.when('flexDirection', (flexDirection) => `flex-direction: ${flexDirection};`)}
  ${theme.when('flexWrap', (flexWrap) => `flex-wrap: ${flexWrap};`)}
  ${theme.when('justifyContent', (justifyContent) => `justify-content: ${justifyContent};`)}
  ${theme.when('alignItems', (alignItems) => `align-items: ${alignItems};`)}
  ${theme.when('alignContent', (alignContent) => `align-content: ${alignContent};`)}
  ${theme.when('flexShrink', (flexShrink) => `flex-shrink: ${flexShrink};`)}
  ${theme.when('flexGrow', (flexGrow) => `flex-grow: ${flexGrow};`)}
  ${theme.when('flexBasis', (flexBasis) => `flex-basis: ${theme.px(flexBasis)};`)}
  ${theme.when('alignSelf', (alignSelf) => `align-self: ${alignSelf};`)}
  ${theme.when('order', (order) => `order: ${order};`)}
  ${theme.when('gapHorizontal', (gap) => {
    if (!gap) return ''
    gap = prepareGap(gap)
    return `
      > * {
        margin-left: ${gap};
        margin-right: ${gap};
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      };`
  })}
  ${theme.when('gapVertical', (gap) => {
    if (!gap) return ''
    gap = prepareGap(gap)
    return `
      > * {
        margin-top: ${gap};
        margin-bottom: ${gap};
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      };`
  })}
`

function prepareGap(gap: string | number) {
  if (typeof gap === 'number') {
    if (gap % 1 !== 0) gap = Math.round(gap)
    if (gap % 2 !== 0) gap += gap > 0 ? 1 : -1
    gap = `${gap / 2}px`
  }
  return gap
}
