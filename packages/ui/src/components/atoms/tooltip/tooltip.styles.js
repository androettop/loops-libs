import styled from "styled-components";

const StyledTooltip = styled.span(
  ({ theme: { color, borderRadius, boxShadow, tooltip } }) => `
  position: relative;
  display: inline-block;
  &:not(.disabled) .tip {
    white-space: nowrap;
    position: absolute;
    color: ${color?.neutral?.[8]};
    background-color: ${color?.light};
    padding: 0.25rem 0.75rem;
    border-radius: ${borderRadius?.[4]};
    font-size: 0.875rem;
    text-align: center;
    overflow-wrap: break-word;
    box-shadow: ${boxShadow?.[1]};
    pointer-events: none;
    opacity: 0;
    z-index: ${tooltip?.zIndex};
    transition: all 0.1s ease;
    transition-delay: 0.2s;
  }

  /* tooltip visible */
  &:not(.disabled):hover .tip {
    pointer-events: all;
    opacity: 1;
    transition-delay: 0.1s;
  }

  /* tooltip arrow */
  &:not(.disabled) .tip::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 7px;
    border-style: solid;
  }

  &:not(.disabled).left .tip::after,
  &:not(.disabled).right .tip::after {
    top: 50%;
    transform: translateY(-50%);
  }

  &:not(.disabled).left .tip::after {
    border-color: transparent transparent transparent ${color?.light};
    right: -12px;
  }

  &:not(.disabled).right .tip::after {
    border-color: transparent ${color?.light} transparent transparent;
    left: -12px;
  }

  &:not(.disabled).top .tip::after,
  &:not(.disabled).bottom .tip::after {
    left: 50%;
    transform: translateX(-50%);
  }

  &:not(.disabled).top .tip::after {
    border-color: ${color?.light} transparent transparent transparent;
    bottom: -12px;
  }

  &:not(.disabled).bottom .tip::after {
    border-color: transparent transparent ${color?.light} transparent;
    top: -12px;
  }
  /* tooltip position*/
  &:not(.disabled).top .tip,
  &:not(.disabled).bottom .tip {
    left: 50%;
    transform: translateX(-50%);
  }

  &:not(.disabled).top .tip {
    bottom: 100%;
    margin-bottom: 0.5rem;
  }

  &:not(.disabled).bottom .tip {
    top: 100%;
    margin-top: 0.5rem;
  }

  &:not(.disabled).left .tip,
  &:not(.disabled).right .tip {
    top: 50%;
    transform: translateY(-50%);
  }

  &:not(.disabled).left .tip {
    right: 100%;
    margin-right: 0.5rem;
  }

  &:not(.disabled).right .tip {
    left: 100%;
    margin-left: 0.5rem;
  }
`
);

export default StyledTooltip;
