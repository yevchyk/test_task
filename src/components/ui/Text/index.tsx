import { CSSProperties, memo } from 'react'
import { TextSC } from './styled'
import { ThemeType } from 'types/modules'

export interface TextProps extends Omit<JSX.IntrinsicElements['span'], 'ref'> {
  className?: string
  style?: CSSProperties
  type?: 'question' | 'languages' | 'title' | 'scroll'
  /**
   * 'question' -  normal 400 10px/14px
   * 'languages' - normal bold 24px/29px
   * 'title' - normal 600 18px/22px
   * 'title' - normal 600 18px/22px
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
  type = 'question',
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
