import styled from "styled-components";

const StyledCalendarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px !important;
  height: 40px !important;
  cursor: pointer;

  &:last-child .rangecenter,
  &:last-child .rangestart {
    width: 32px;
    margin-right: 4px;
    padding: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:last-child .rangecenter {
    width: 36px;
    padding-left: 4px;
  }

  &:first-child .rangecenter,
  &:first-child .rangeend {
    width: 32px;
    margin-left: 4px;
    padding: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:first-child .rangecenter {
    width: 36px;
    padding-right: 4px;
  }
`;

const StyledNumberContainer = styled.div(
  ({ theme: { color, fontSize, lineHeight } }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  height: 32px;
  width: 32px;
  margin: 0 4px;
  vertical-align:middle;
  font-size: ${fontSize?.[16]}
  line-height: ${lineHeight?.[16]};
  color: ${color?.neutral?.[8]};
  user-select: none;
  
  &:hover{
    background-color: ${color?.neutral?.[0]};
  }

  &.disabled{
    opacity: 50%;
  }

  &.today{
    color: ${color?.primary?.[5]};
  }

  &.active, &.rangestart, &.rangecenter, &.rangeend{
    background-color: ${color?.primary?.[5]};
    color: white;
  }

  &.rangestart{
    margin-left: 4px;
    margin-right: 0px;
    padding-right: 4px;
    width: 36px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.rangecenter{
    width: 40px;
    border-radius: 0;
    margin:0;
   
  }

  &.rangeend{
    margin-left: 0px;
    margin-right: 4px;
    padding-left: 4px;
    width: 36px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
);

export { StyledCalendarButton, StyledNumberContainer };
