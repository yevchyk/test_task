import styled from 'styled-components'

export const LogoSC = styled.div`
  position: relative;

  &:hover {
    .logo {
      width: 0;
    }
  }

  .emptyLogo {
    right: 0;
    width: 0;
    direction: rtl;
  }

  .logo, .emptyLogo {
    position: absolute;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  svg, .logo, &&, &:hover .emptyLogo {
    width: 104px;
      height:  31px;
    @media screen and (max-width: 1024px) {
      width: 89px;
      height:  26px;
    }
    @media screen and (max-width: 414px) {
      width: 75px;
      height:  22px;
    }
    @media screen and (max-width: 375px) {
      width: 67px;
      height:  20px;
    }
  }

`
