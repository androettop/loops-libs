import styled from "styled-components";

export const StyledButtonContainer = styled.div`
  display: inline-block;
`;

export const StyledButton = styled.button(
  ({ theme: { fontFamily, borderRadius, borderWidth, color, button } }) => `
  /* General styles */
  width:100%;
  font-family: ${fontFamily};
  border: none;
  font-weight: bold;
  border-radius: ${borderRadius?.[4]};
  transition: all 0.2s ease;
  transition-property: background-color, color, box-shadow;
  display: flex;
  text-align:left;
  align-items: center;
  justify-content: center;
  line-height: 1;
  white-space: nowrap;
  & > span {
    display: inline-block;
  }

  .icon {
    margin-left: 0;
    font-size: 14px;
  }

  &.small {
    padding: 5px 8px;
    span {
      line-height: 14px;
      font-size: 14px;
      font-weight: 400;
    }
    .icon {
      font-size: 14px;
      margin-right: 4px;
    }
  }

  /* Medium button styles */
  &.medium,
  &:not(.small, .large) {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;

    .icon {
      font-size: 16px;
      margin-right: 8px;
    }
  }

  /* Large button styles */
  &.large {
    padding: 14px 20px;
    span {
      line-height: 1;
      font-size: 20px;
      font-weight: 500;
    }
    .icon {
      font-size: 20px;
      margin-right: 12px;
    }
  }

  /* Icon button styles */
  &.icon-btn {
    border-radius: 128px;
    .icon {
      margin: 0;
    }
  }
  &.icon-btn.small:not(.mode-link) {
    padding: 6px;
    height: 24px;
  }
  &.icon-btn.medium:not(.mode-link) {
    padding: 8px;
    height: 32px;
  }
  &.icon-btn.large:not(.mode-link) {
    padding: 14px;
    height: 48px;
  }

  /* Link mode styles */
  &.mode-link {
    padding: 0 !important;
  }

  &.mode-outline {
    --border-color: transparent;
    box-shadow: inset 0 0 0 ${borderWidth} var(--border-color);
  }

  /* Enable/Disable styles */
  &:disabled {
    opacity: 0.5;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  /** Primary solid*/
  &.button-primary {
    --border-color: ${color?.primary?.[5]};
  }

  &.button-primary.mode-solid {
    background-color: ${color?.primary?.[5]};
    color: ${color?.light};
    box-shadow: ${button?.primary?.boxShadow};
  }
  &.button-primary.mode-solid:hover,
  &.button-primary.mode-solid:disabled {
    box-shadow: none;
  }
  &.button-primary.mode-solid:active {
    background-color: ${color?.primary?.[7]};
  }

  /** Primary outline & link */
  &.button-primary.mode-outline,
  &.button-primary.mode-link {
    color: ${color?.primary?.[5]};
    background-color: transparent;
  }

  &.button-primary.mode-outline:hover {
    background-color: ${color?.primary?.[0]};
  }

  &.button-primary.mode-outline:active {
    background-color: ${color?.primary?.[1]};
  }

  /** Secondary solid*/
  &.button-secondary {
    --border-color: ${color?.secondary?.[8]};
  }

  &.button-secondary.mode-solid {
    background-color: ${color?.secondary?.[1]};
    color: ${color?.secondary?.[8]};
    box-shadow: ${button?.secondary?.boxShadow};
  }
  &.button-secondary.mode-solid:hover,
  &.button-secondary.mode-solid:disabled {
    box-shadow: none;
  }
  &.button-secondary.mode-solid:active {
    background-color: ${color?.secondary?.[2]};
  }

  /** secondary outline & link */
  &.button-secondary.mode-outline,
  &.button-secondary.mode-link {
    color: ${color?.secondary?.[8]};
    background-color: transparent;
  }

  &.button-secondary.mode-outline:hover {
    background-color: ${color?.secondary?.[0]};
  }

  &.button-secondary.mode-outline:active {
    background-color: ${color?.secondary?.[1]};
  }

  /** neutral solid*/
  &.button-neutral {
    --border-color: ${color?.neutral?.[7]};
  }

  &.button-neutral.mode-solid {
    background-color: ${color?.neutral?.[1]};
    color: ${color?.neutral?.[7]};
    box-shadow: ${button?.neutral?.boxShadow};
  }
  &.button-neutral.mode-solid:hover,
  &.button-neutral.mode-solid:disabled {
    box-shadow: none;
  }
  &.button-neutral.mode-solid:active {
    background-color: ${color?.neutral?.[2]};
  }

  /** neutral outline & link */
  &.button-neutral.mode-outline,
  &.button-neutral.mode-link {
    color: ${color?.neutral?.[7]};
    background-color: transparent;
  }

  &.button-neutral.mode-outline:hover {
    background-color: ${color?.neutral?.[0]};
  }

  &.button-neutral.mode-outline:active {
    background-color: ${color?.neutral?.[1]};
  }

  /** error solid*/
  &.button-error {
    --border-color: ${color?.error?.[7]};
  }

  &.button-error.mode-solid {
    background-color: ${color?.error?.[0]};
    color: ${color?.error?.[7]};
    box-shadow: ${button?.error?.boxShadow};
  }
  &.button-error.mode-solid:hover,
  &.button-error.mode-solid:disabled {
    box-shadow: none;
  }
  &.button-error.mode-solid:active {
    background-color: ${color?.error?.[1]};
  }

  /** error outline & link */
  &.button-error.mode-outline,
  &.button-error.mode-link {
    color: ${color?.error?.[7]};
    background-color: transparent;
  }

  &.button-error.mode-outline:hover {
    background-color: ${color?.error?.[0]};
  }

  &.button-error.mode-outline:active {
    background-color: ${color?.error?.[1]};
  }
`
);
