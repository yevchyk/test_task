import styled from 'styled-components'
import {TextSC} from "components/ui/Text/styled";

export const SiteLogoSC = styled.div`
  height: 38px;  
  width: 38px;
  position: relative;
  @media screen and (max-width: 1024px) {
      height: 34px;
      width: 34px;
  }
  .languages {
    width: 92px;
    position: absolute;
    height: 30px;
    top: 50%;
    z-index: -1;
    opacity: 0;
    left: -92px;
    transition: 0.5s;
    padding-left: 46px;
    margin-top: -15px;
  }
  &:hover {
    .languages {
      z-index: 1;
      opacity: 1;
      left: 0;
    }
  }
  .languages > ${TextSC} {
    opacity: 0.5;
    transition: 0.5s;
    padding: 0 8px;
    line-height: 30px;
    color: ${({theme})=> theme.colors.palette.white}
  }
  ${TextSC}:hover {
    opacity: 1;
  }
`

export const LogoSC = styled.div`
  width: 15px;
  height: 16px;
  background: url('/assets/site-logo.png') no-repeat center;
  position: absolute;
  background-size: cover;
  background-clip: unset;
  margin-top: 2px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export const SiteLogoCircleSC = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.12;
  border: 1px solid #FFFFFF;
  border-radius: 50%
`
