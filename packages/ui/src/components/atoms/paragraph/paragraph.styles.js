import styled from "styled-components";

const StyledParagraph = styled.p(
  ({ maxLines, theme: { fontWeight, lineHeight, color } }) => `
  margin: 0;
  font-weight: ${fontWeight?.[400]};
  line-height: ${lineHeight?.[24]};
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  position: relative;

  &.limit {
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &.limit.gradient:before {
    content: "";
    width: 100%;
    height: calc(2 * ${lineHeight?.[24]});
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(transparent, white);
  }

  &.p1 {
    color: ${color?.neutral?.[9]};
    font-size: 1rem;
  }

  &.p2 {
    color: ${color?.neutral?.[8]};
    font-size: 0.875rem;
  }color-neutral-9
  color-neutral-8
`
);

export default StyledParagraph;
