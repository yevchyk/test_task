import styled from 'styled-components'
import { Link } from 'react-router-dom'

export interface LinkSCProps {
  /**
   * @see https://styled-components.com/releases#v5.1.0 transient props
   */
  $underlined?: boolean
}

export const LinkSC = styled(Link)<LinkSCProps>`
  text-decoration: ${({ $underlined }) => ($underlined ? 'underline' : 'inherit')};
`

export const RegularLink = styled.a<LinkSCProps>`
  text-decoration: ${({ $underlined }) => ($underlined ? 'underline' : 'inherit')};
`
