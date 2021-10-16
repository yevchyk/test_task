import styled from 'styled-components'
import {TextProps} from 'components/ui/Text/index'
import choose from 'utils/choose'
import {ThemeType} from 'types/modules'

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


const getHover = (theme: ThemeType, type: Required<TextProps>['type']) => {
    switch (type) {
        case 'question':
            return `
                cursor: pointer;
                &:after {
                  margin: 0 3px;
                  display:block;
                  content: '';
                  border-bottom: solid 1px  ${theme.colors.palette.white};  
                  transform: scaleX(0);  
                  transition: transform 0.3s ease-in-out;
                   transform-origin:  0% 50%;
                }
                &:hover {
                    color: ${theme.colors.palette.white};
                }
                &:hover:after { 
                    transform: scaleX(1);
                }
            `
    }
}

const getColor = (theme: ThemeType, type: Required<TextProps>['type'],) => {
    switch (type) {
        case 'question':
            return `
                color: ${theme.colors.palette.black};
            `
        case 'title':
            return `
                color: ${theme.colors.palette.black};
            `
    }
}

export const TextSC = styled.span<TextSCProps>`
  text-transform: ${({upperCase}) => (upperCase ? 'uppercase' : 'none')};
  transition: 0.5s;
  font-size: ${({$type}) =>
          choose($type, {
            question: '16px',
            languages: '10px',
            title: '82px',
            scroll: '16px',
          })};

  line-height: ${({$type}) =>
          choose($type, {
            question: '22,4px',
            languages: '14px',
            title: '90px',
            scroll: '14px',
          })};

  font-weight: ${({$type}) =>
          choose($type, {
            question: 'normal',
            languages: 'normal',
            title: 700,
            scroll: 600,
          })};

  @media screen and (max-width: 1024px) {
    font-size: ${({$type}) =>
            choose($type, {
              question: '14px',
              languages: '10px',
              title: '58px',
              scroll: '16px',
            })};
    line-height: ${({$type}) =>
            choose($type, {
              question: '22,4px',
              languages: '14px',
              title: '64px',
              scroll: '14px',
            })};
  }
  
  @media screen and (max-width: 768px) {
    font-size: ${({$type}) =>
            choose($type, {
              question: '14px',
              languages: '10px',
              title: '58px',
              scroll: '16px',
            })}; 
    line-height: ${({$type}) =>
            choose($type, {
              question: '22,4px',
              languages: '14px',
              title: '64px',
              scroll: '14px',
            })};
  }  
  
  @media screen and (max-width: 414px) {
    font-size: ${({$type}) =>
            choose($type, {
              question: '14px',
              languages: '10px',
              title: '36px',
              scroll: '16px',
            })}; 
    line-height: ${({$type}) =>
            choose($type, {
              question: '22,4px',
              languages: '14px',
              title: '39px',
              scroll: '14px',
            })};
  }
  
  @media screen and (max-width: 375px) {
    font-size: ${({$type}) =>
            choose($type, {
              question: '14px',
              languages: '10px',
              title: '34px',
              scroll: '16px',
            })}; 
    line-height: ${({$type}) =>
            choose($type, {
              question: '22,4px',
              languages: '14px',
              title: '38px',
              scroll: '14px',
            })};
  }

  color: ${({theme}) => theme.colors.palette.white};
  ${({$type, theme}) => getColor(theme, $type)}

  ${({$color, theme}) =>
          getCSSValue(
                  'color',
                  $color! in theme.colors.palette
                          ? theme.colors.palette[$color as keyof ThemeType['colors']['palette']]
                          : $color
          )}
  ${({$weight}) => getCSSValue('font-weight', $weight)}
  ${({lineHeight, theme}) =>
          lineHeight !== undefined ? 'line-height:' + theme.px(lineHeight) : ''};
  ${({letterSpacing, theme}) =>
          letterSpacing !== undefined ? 'letter-spacing:' + theme.px(letterSpacing) : ''};
  ${({$size, theme}) => ($size !== undefined ? 'font-size:' + theme.px($size) : '')};
  ${({$block}) => ($block ? 'display: block;' : 'display: inline;')}
  ${({$type, theme}) => getHover(theme, $type)}
`
