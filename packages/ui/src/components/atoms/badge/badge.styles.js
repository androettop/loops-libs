import styled from "styled-components";

const StyledBadge = styled.span(
  ({ theme: { borderRadius, fontSize, borderWidth, color } }) => `
  padding: 6px 12px;
  border-radius: ${borderRadius?.[4]};
  font-size: ${fontSize?.[14]};
  line-height: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.block {
    display: block;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    min-width: 96px;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  .icon,
  svg {
    margin-left: 8px;
    line-height: 1;
  }

  &.pointer {
    cursor: pointer;
  }

  &.type-pill {
    border-radius: 10rem;
  }

  &.type-bordered {
    --border-color: transparent;
    box-shadow: inset 0 0 0 ${borderWidth} var(--border-color);
  }

  &.badge-primary {
    background-color: ${color?.primary?.[5]};
    color: ${color?.light};
    --border-color: ${color?.primary?.[5]};
  }

  &.badge-secondary {
    background-color: ${color?.secondary?.[1]};
    color: ${color?.secondary?.[7]};
    --border-color: ${color?.secondary?.[7]};
  }

  &.badge-error {
    background-color: ${color?.error?.[0]};
    color: ${color?.error?.[7]};
    --border-color: ${color?.error?.[7]};
  }

  &.badge-warning {
    background-color: ${color?.warning?.[0]};
    color: ${color?.warning?.[7]};
    --border-color: ${color?.warning?.[7]};
  }

  &.badge-info {
    background-color: ${color?.info?.[0]};
    color: ${color?.info?.[7]};
    --border-color: ${color?.info?.[7]};
  }

  &.badge-success {
    background-color: ${color?.success?.[5]};
    color: ${color?.light};
    --border-color: ${color?.success?.[5]};
  }

  &.badge-neutral {
    background-color: ${color?.neutral?.[1]};
    color: ${color?.neutral?.[7]};
    --border-color: ${color?.neutral?.[7]};
  }
`
);

export default StyledBadge;
