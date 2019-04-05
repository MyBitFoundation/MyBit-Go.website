import styled from 'styled-components';
export const SParagraphLead = styled.div.attrs((props: any) => ({
  className: `${props.color ? props.color : 'light-grey'} f5 tc ph2 center`
}))`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;
  font-size: 18px;
  text-align: center;
  max-width: 768px;
`;
export const SParagraphLeadTl = styled.div.attrs((props: any) => ({
  className: `${props.color ? props.color : 'light-grey'} f5 tl tc-ns ph2`
}))`
  line-height: 30px;
  font-weight: normal;
`;