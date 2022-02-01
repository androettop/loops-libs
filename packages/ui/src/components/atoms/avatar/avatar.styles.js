import styled from "styled-components";

const StyledAvatar = styled.div(
  ({ theme: { boxShadow, borderRadius, fontSize, color } }) => `
  display: inline-block;
  box-shadow: ${boxShadow?.[1]};
  position: relative;
  overflow: hidden;
  margin-right: 0.5rem;
  user-select: none;
  text-transform: uppercase;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  span,
  svg {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  span {
    transform: translate(-50%, -55%);
  }

  svg {
    transform: translate(-50%, -50%);
  }

  &.shape-circle {
    border-radius: 50%;
  }

  &.shape-rounded {
    border-radius: ${borderRadius?.[8]};
  }

  &.shape-square {
    border-radius: 0;
  }

  &.size-small,
  &.size-small img {
    width: 36px;
    height: 36px;
    font-size: ${fontSize?.[16]};
    svg {
      font-size: ${fontSize?.[16]};
    }
  }

  &.size-medium,
  &.size-medium img {
    width: 46px;
    height: 46px;
    font-size: ${fontSize?.[24]};
    svg {
      font-size: ${fontSize?.[26]};
    }
  }

  &.size-large,
  &.size-large img {
    width: 56px;
    height: 56px;
    font-size: ${fontSize?.[28]};
    svg {
      font-size: ${fontSize?.[30]};
    }
  }


  /** Variants */
  &.avatar-primary{
    background-color: ${color?.primary?.[5]};
    color: ${color?.light};
  }
  &.avatar-success{
    background-color: ${color?.success?.[6]};
    color: ${color?.light};
  }
  &.avatar-secondary{
    background-color: ${color?.secondary?.[1]};
    color: ${color?.secondary?.[8]};
  }
  &.avatar-info{
    background-color: ${color?.info?.[1]};
    color: ${color?.info?.[8]};
  }
  &.avatar-error{
    background-color: ${color?.error?.[0]};
    color: ${color?.error?.[6]};
  }
  &.avatar-warning{
    background-color: ${color?.warning?.[0]};
    color: ${color?.warning?.[6]};
  }
  &.avatar-neutral{
    background-color: ${color?.neutral?.[0]};
    color: ${color?.neutral?.[7]};
  }
`
);

export default StyledAvatar;
