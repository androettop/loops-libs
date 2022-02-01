import styled from "styled-components";

export const StyledBreadcrumb = styled.div``;

export const StyledBreadcrumbSection = styled.span(
  ({ theme: { fontSize, color } }) => `
  font-size: ${fontSize?.[16]};
  display: inline-block;
  color: ${color?.neutral?.[3]};
  cursor: default;
  a,
  a:visited,
  a:link {
    color: ${color?.neutral?.[9]};
  }
  a:hover {
    text-decoration: underline;
  }
`
);

export const StyledBreadcrumbSeparator = styled.div(
  ({ theme: { color } }) => `
  display: inline-block;
  width: 4px;
  height: 4px;
  background: ${color?.neutral?.[3]};
  border-radius: 50%;
  margin: 4px 16px;
`
);
