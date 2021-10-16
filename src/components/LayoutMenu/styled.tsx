import styled from 'styled-components'

export interface LayoutMenuSCProps {}

export const LayoutMenuSC = styled.div<LayoutMenuSCProps>`
  margin: 17px 16px;
  .rightMenu{
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
      cursor: pointer;
    }
  }
`
