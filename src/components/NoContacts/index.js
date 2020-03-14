import React from "react";
import styled from "styled-components";

const NoContactsImage = styled.img`
  width: 100px;
  height: 100px;
  background-size: contain;
  background-image: url(https://cdn0.iconfinder.com/data/icons/web-design-and-development-45/53/21-512.png);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function NoContacts() {
  return (
    <Container data-test="sem-contatos">
      <NoContactsImage />
      Você não tem contatos cadastrados
    </Container>
  );
}

export default NoContacts;
