import styled from 'styled-components';
export const SHeadline = styled.div.attrs((props: any) => ({
  className: `f2 f1-l gilroy tc center ${props.color ? props.color : 'light-grey'} ph2 pt6 pt7-ns pb2`
}))`
  line-height: 40px;
  font-weight: 900;
  max-width: 852px;
`;


export const SHeadlineAlt = styled.div.attrs({
  className: 'f2 f1-l gilroy tc center black ph2 pt6 pt7-ns pb2 tl-ns'
})`
  line-height: 40px;
  font-weight: 900;
  max-width: 852px;
`;
