import styled from 'styled-components/native';
export const ImageStyle = styled.Image`
  margin-top: 20px;
  width: 48px;
  height: 48px;
  border-radius: 100px;
`;

export const Head = styled.View`
  padding: 26px;
  height: 125px;
  background-color: ${({theme}) => theme.colors.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-left: 20px;
`;
