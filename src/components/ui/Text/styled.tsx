import styled from 'styled-components'
import { TextProps } from 'components/ui/Text/index'
import choose from 'utils/choose'
import { ThemeType } from 'types/modules'

export interface TextSCProps {
  $type: Required<TextProps>['type']
  $block: TextProps['block']
  $color: TextProps['color']
  $weight: TextProps['weight']
  $size: TextProps['size']
  lineHeight: TextProps['lineHeight']
  letterSpacing: TextProps['letterSpacing']
  upperCase?: boolean
}

const getCSSValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return ''
  return `${key}:${value};`
}


const getFontFamily = (type: Required<TextProps>['type']) => {
    switch (type) {
        case 'languages':
            return 'font-family: "Grtsk Giga";'
    }
}

export const TextSC = styled.span<TextSCProps>`
  text-transform: ${({ upperCase }) => (upperCase ? 'uppercase' : 'none')};

  font-size: ${({ $type }) =>
    choose($type, {
      Heading2: '36px',
      languages: '10px',
      Semibold1: '18px',
      Semibold2: '14px',
      Regular1: '18px',
      Regular2: '14px',
    })};

  line-height: ${({ $type }) =>
    choose($type, {
      Heading2: '44px',
      languages: '14px',
      Semibold1: '22px',
      Semibold2: '17px',
      Regular1: '22px',
      Regular2: '17px',
    })};

  font-weight: ${({ $type }) =>
    choose($type, {
      Heading2: 'bold',
      languages: 'normal',
      Semibold1: 600,
      Semibold2: 600,
      Regular1: 'normal',
      Regular2: 'normal',
    })};

  color: ${({ theme }) => theme.colors.palette.white};

  ${({ $color, theme }) =>
    getCSSValue(
      'color',
      $color! in theme.colors.palette
        ? theme.colors.palette[$color as keyof ThemeType['colors']['palette']]
        : $color
    )}
  ${({ $weight }) => getCSSValue('font-weight', $weight)}
  ${({ lineHeight, theme }) =>
    lineHeight !== undefined ? 'line-height:' + theme.px(lineHeight) : ''};
  ${({ letterSpacing, theme }) =>
    letterSpacing !== undefined ? 'letter-spacing:' + theme.px(letterSpacing) : ''};
  ${({ $size, theme }) => ($size !== undefined ? 'font-size:' + theme.px($size) : '')};
  ${({ $block }) => ($block ? 'display: block;' : 'display: inline;')}
  ${({$type})=> getFontFamily($type)}
`
