import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.$backgroundColor || 'white'};
  margin: 0 10px;
  border-radius: 5px;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-size: 18px;
`;
