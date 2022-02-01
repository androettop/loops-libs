import styled from "styled-components";
import StyledImage, {
  StyledImageContainer,
} from "../../atoms/image/image.styles";
import StyledRow from "../../atoms/row/row.styles";
import StyledSegment from "../../atoms/segment/segment.styles";

export const StyledItemResult = styled.div(
  ({ selected, theme: { color } }) => `
  ${StyledSegment}{
    display: flex;
    ${selected ? `background-color: ${color?.info?.[0]}` : ``}
  }
  
  /**
   * Como el segment general del list result tiene
   * display flex, el primer hijo debe tener flex: 1
   * para ocupar el 100% del contenedor.
   */
  & > ${StyledSegment} > ${StyledRow}:first-child {
    flex: 1;
  }
`
);

export const Placeholder = styled.div(
  () => `
  width: 100%;
  height: 100%;
  background-image: url(https://i.imgur.com/WXoIDgQ.png);
  background-size: cover;
  background-position: center;
`
);

export const CardHeader = styled.div(
  ({ theme: { segment } }) => `
  overflow:hidden;
  position: relative;

  &:not(.cardMode) {
    height: 100%;
    margin-right: calc(${segment?.spacing} / -2);
  }

  &.cardMode {
    height: 180px;
    width: calc(100% + 2 * ${segment?.spacing});
    margin: -${segment?.spacing} -${segment?.spacing} ${segment?.spacing} -${segment?.spacing};
    border-top-left-radius: ${segment?.borderRadius};
    border-top-right-radius: ${segment?.borderRadius};
  }
  &.cardMode.compact {
    width: calc(100% + 2 * ${segment?.compact?.spacing});
    margin: -${segment?.compact?.spacing} -${segment?.compact?.spacing} ${segment?.compact?.spacing} -${segment?.compact?.spacing};
  }

  &:not(.cardMode) {
    width: calc(100% + ${segment?.spacing});
    margin: -${segment?.spacing} 0 -${segment?.spacing} -${segment?.spacing};
    height: calc(100% + 2 * ${segment?.spacing});
    border-top-left-radius: ${segment?.borderRadius};
    border-bottom-left-radius: ${segment?.borderRadius};
  }

  &:not(.cardMode).compact {
    width: calc(100% + ${segment?.compact?.spacing});
    margin: -${segment?.compact?.spacing} 0 -${segment?.compact?.spacing} -${segment?.compact?.spacing};
    height: calc(100% + 2 * ${segment?.compact?.spacing});
  }

  ${StyledImage}, ${StyledImageContainer}{
    width:100%;
    height:100%;
  }
  
`
);
