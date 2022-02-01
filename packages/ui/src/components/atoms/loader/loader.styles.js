import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;
const Wrapper = styled.div(
  ({ center }) => `
  display: inline-block;
  position: relative;
  width: 100%;
  height: 64px;
  text-align: ${center ? "center" : "left"}
`
);

const RingLoader = styled.div(
  ({
    theme: {
      // Theme variables here
      color,
    },
    size,
  }) => css`
    box-sizing: border-box;
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    margin: 6px;
    border: 6px solid ${color?.primary?.[5]};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${color?.primary?.[5]} transparent transparent transparent;
    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
  `
);

const RippleLoader = styled.div(
  ({
    theme: {
      // Theme variables here
      color,
    },
    size,
  }) => css`
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    position: relative;
    div {
      position: absolute;
      border: 4px solid ${color?.primary?.[5]};
      opacity: 1;
      border-radius: 50%;
      animation: ${pulse} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  `
);

const SpinnerLoader = styled.div(
  ({
    theme: {
      // Theme variables here
      color,
    },
    size,
  }) => css`
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    div {
      animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 32px 32px;
    }
    div:after {
      content: " ";
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${color?.primary?.[5]};
      margin: -3px 0 0 -3px;
    }
    div:nth-child(1) {
      animation-delay: -0.036s;
    }
    div:nth-child(1):after {
      top: 50px;
      left: 50px;
    }
    div:nth-child(2) {
      animation-delay: -0.072s;
    }
    div:nth-child(2):after {
      top: 54px;
      left: 45px;
    }
    div:nth-child(3) {
      animation-delay: -0.108s;
    }
    div:nth-child(3):after {
      top: 57px;
      left: 39px;
    }
    div:nth-child(4) {
      animation-delay: -0.144s;
    }
    div:nth-child(4):after {
      top: 58px;
      left: 32px;
    }
    div:nth-child(5) {
      animation-delay: -0.18s;
    }
    div:nth-child(5):after {
      top: 57px;
      left: 25px;
    }
    div:nth-child(6) {
      animation-delay: -0.216s;
    }
    div:nth-child(6):after {
      top: 54px;
      left: 19px;
    }
    div:nth-child(7) {
      animation-delay: -0.252s;
    }
    div:nth-child(7):after {
      top: 50px;
      left: 14px;
    }
    div:nth-child(8) {
      animation-delay: -0.288s;
    }
    div:nth-child(8):after {
      top: 45px;
      left: 10px;
    }
  `
);

export { Wrapper, RingLoader, RippleLoader, SpinnerLoader };
