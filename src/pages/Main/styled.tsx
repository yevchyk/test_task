import styled from 'styled-components'
import {TextSC} from "components/ui/Text/styled";

export interface MainSCProps {
}

export const MainSC = styled.div<MainSCProps>`
  height: 10000000px;
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .questions {
    position: fixed;
    z-index: 2;
  }

  .left {
    top: 50%;
    left: -5px;
    transform: rotate(-90deg);
  }

  .right {
    top: 50%;
    right: -5px;
    transform: rotate(90deg);
  }

  .bottom {
    bottom: 19px;
    left: 50%;
    transform: translateX(-50%);
  }

  .sun {
    top: 30%;
    left: 0;
    right: 0;
    background-color: ${({theme})=> theme.colors.palette.yellow};
    position: fixed;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
    height: 40vh;
    width: 40vh;
    box-shadow: 2px 4px 48px 32px ${({theme})=> theme.colors.palette.yellow};
  }
  .fullCycle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .rotate {
    transform-origin: bottom left;
    height: 100px;
  }
  .autorotate{
    transform-origin: bottom left;
    position:absolute;
    bottom: 0;
    right: 50px;
    animation: rotating 6s linear infinite;
  }
  .circle {
    transform: translateX(-10px);
  }
  .letter {
    height: 100px;
    position: absolute;
    transform-origin: bottom center;
    border-bottom: 1px solid;
    ${TextSC} {
      height: 20px;
      width: 20px;
      display: block;
      text-align: center;
    } 
  }
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 415px) {
    .questions {
      display: none;
    }
    .letter {
      height: 80px;
      ${TextSC} {
        height: 16px;
        width: 16px;
      }
    }
    .rotate {
      height: 80px;
    }
  }
`
