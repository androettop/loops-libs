import styled from "styled-components";

const StyledSegment = styled.div(
  ({ theme: { segment, transition, boxShadow, color } }) => `
  box-sizing: border-box;
  border-radius: ${segment?.borderRadius};
  margin-bottom: 1.5rem;
  box-shadow: ${boxShadow?.[2]};

  transition: ${transition?.[2]};
  transition-property: box-shadow, transform;

  padding: ${segment?.spacing};

  color: ${color?.dark};

  &.compact {
    padding: ${segment?.compact?.spacing};
    margin-bottom: ${segment?.compact?.spacing};
    box-shadow: ${boxShadow?.[1]};
  }

  &.hover:hover {
    box-shadow: ${boxShadow?.[3]};
    transform: translateY(-0.25rem);
  }

  &.pointer {
    cursor: pointer !important;
  }

  /** Variants */
  
  &.segment-light {
    background-color: ${color?.light};
  }
  &.segment-light.hover:active {
    background-color: ${color?.neutral?.[0]};
  }

  &.segment-neutral {
    background-color: ${color?.neutral?.[0]};
  }

  &.segment-neutral.hover:active {
    background-color: ${color?.neutral?.[1]};
  }

  &.segment-dark {
    background-color: ${color?.neutral?.[8]};
    color: ${color?.light};
  }
  &.segment-dark.hover:active {
    background-color: ${color?.neutral?.[9]};
  }

  &.segment-primary {
    background-color: ${color?.primary?.[0]};
    border: 1px solid ${color?.primary?.[5]};
  }
  
  &.segment-secondary {
    background-color: ${color?.secondary?.[0]};
    border: 1px solid ${color?.secondary?.[5]};
  }

  &.segment-info {
    background-color: ${color?.info?.[0]};
    border: 1px solid ${color?.info?.[5]};
  }

  &.segment-error {
    background-color: ${color?.error?.[0]};
    border: 1px solid ${color?.error?.[5]};
  }

  &.segment-warning {
    background-color: ${color?.warning?.[0]};
    border: 1px solid ${color?.warning?.[5]};
  }

  &.segment-success {
    background-color: ${color?.success?.[0]};
    border: 1px solid ${color?.success?.[5]};
  }
`
);

export default StyledSegment;
