import { ComponentProps, CSSProperties, memo } from 'react'
import { LinkSC, LinkSCProps } from 'components/ui/Link/styled'
import { Link as ReactRouterLink } from 'react-router-dom'

export interface LinkProps
  extends ComponentProps<typeof ReactRouterLink>,
    Omit<LinkSCProps, '$underlined'> {
  className?: string
  style?: CSSProperties
  underlined?: boolean
}

function Link({ underlined = false, className, style, children, ...rest }: LinkProps) {
  return (
    <LinkSC $underlined={underlined} className={className} style={style} {...rest}>
      {children}
    </LinkSC>
  )
}

export default memo(Link)
