import styled from 'styled-components/native';

export const AddButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-top: 50px;
  color: ${({theme}) => theme.colors.main};
`;
