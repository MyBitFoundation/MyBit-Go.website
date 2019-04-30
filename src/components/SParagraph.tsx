import styled from 'styled-components';
export const SParagraph = styled.div.attrs({
  className: `f6 tc`
})`
  line-height: 24px;
  color: ${(props: {
  color?: string;
}) => (props.color ? props.color : '#6C6C6C')};
`;
