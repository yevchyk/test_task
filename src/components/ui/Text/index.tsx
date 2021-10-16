import { CSSProperties, memo } from 'react'
import { TextSC } from './styled'
import { ThemeType } from 'types/modules'

export interface TextProps extends Omit<JSX.IntrinsicElements['span'], 'ref'> {
  className?: string
  style?: CSSProperties
  type?: 'Heading2' | 'languages' | 'Semibold1' | 'Semibold2' | 'Regular1' | 'Regular2'
  /**
   * 'Heading2' -  normal bold 36px/44px
   * 'languages' - normal bold 24px/29px
   * 'Semibold1' - normal 600 18px/22px
   * 'Semibold2' - normal 600 14px/17px
   * 'Regular1' - normal normal 18px/22px
   * 'Regular2' - normal normal 14px/17px
   */
  block?: boolean
  color?: keyof ThemeType['colors']['palette'] | string
  weight?: number
  size?: number | string
  lineHeight?: number | string
  letterSpacing?: number | string
  as?: keyof JSX.IntrinsicElements
  uppercase?: boolean
}

function Text({
  className,
  style,
  children,
  type = 'Regular1',
  block,
  color,
  lineHeight,
  letterSpacing,
  weight,
  size,
  uppercase,
  ...rest
}: TextProps) {
  return (
    <TextSC
      className={className}
      $block={block}
      $color={color}
      $weight={weight}
      $size={size}
      style={style}
      $type={type}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      upperCase={uppercase}
      {...rest}
    >
      {children}
    </TextSC>
  )
}

export default memo(Text)
