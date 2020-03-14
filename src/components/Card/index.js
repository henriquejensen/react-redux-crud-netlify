import styled from "styled-components";

const Card = styled.section`
  width: 500px;
  min-height: 180px;
  background-color: white;
  box-shadow: 2px 2px 2px #aaa;
  padding: 15px;
`;

const CardHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export { Card, CardHeader };
