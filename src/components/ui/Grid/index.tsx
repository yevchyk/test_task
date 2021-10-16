import { FlexBlockSC, FlexBlockSCProps } from 'components/ui/Grid/styled'

export interface RowProps
  extends Omit<JSX.IntrinsicElements['div'], 'ref'>,
    Pick<FlexBlockSCProps, 'inline' | 'order'> {
  reverse?: boolean
  wrap?: boolean
  gap?: string | number
  justify?: Justify
  align?: Align
  self?: Align
  content?: AlignContent
  shrink?: number
  grow?: number
  basis?: number | string
}
export type ColProps = RowProps

type Justify = 'end' | 'start' | 'center' | 'around' | 'between' | 'evenly'
type Align = 'end' | 'start' | 'center' | 'baseline' | 'stretch'
type AlignContent = 'end' | 'start' | 'center' | 'stretch' | 'baseline' | 'around' | 'between'

const alias: { [k in Justify | Align | AlignContent]: string } = {
  baseline: 'baseline',
  stretch: 'stretch',
  end: 'flex-end',
  start: 'flex-start',
  center: 'center',
  around: 'space-around',
  between: 'space-between',
  evenly: 'space-evenly',
}

export function Row({
  reverse,
  wrap,
  gap,
  justify,
  align,
  self,
  content,
  shrink,
  grow,
  basis,
  ...flexProps
}: RowProps) {
  return (
    <FlexBlockSC
      flexDirection={reverse === undefined ? undefined : reverse ? 'row-reverse' : 'row'}
      gapHorizontal={gap}
      flexWrap={wrap === undefined ? undefined : wrap ? 'wrap' : 'nowrap'}
      justifyContent={justify && alias[justify]}
      alignItems={align && alias[align]}
      alignSelf={self && alias[self]}
      alignContent={content && alias[content]}
      flexShrink={shrink}
      flexGrow={grow}
      flexBasis={basis}
      {...flexProps}
    />
  )
}

export function Col({
  reverse,
  wrap,
  gap,
  justify,
  align,
  self,
  content,
  shrink,
  grow,
  basis,
  ...flexProps
}: ColProps) {
  return (
    <FlexBlockSC
      flex='1 1'
      flexDirection={reverse ? 'column-reverse' : 'column'}
      gapVertical={gap}
      flexWrap={wrap === undefined ? undefined : wrap ? 'wrap' : 'nowrap'}
      justifyContent={justify && alias[justify]}
      alignItems={align && alias[align]}
      alignSelf={self && alias[self]}
      alignContent={content && alias[content]}
      flexShrink={shrink}
      flexGrow={grow}
      flexBasis={basis}
      {...flexProps}
    />
  )
}
