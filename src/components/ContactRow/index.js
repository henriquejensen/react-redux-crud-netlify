import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "components/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-weight: ${({ bold }) => bold && "bold"};
  font-size: ${({ size = 16 }) => `${size}px`};
  color: ${({ color = "black" }) => color};
`;

export default function ContactRow({ contact, onClickDelete }) {
  return (
    <Container>
      <div>
        <Text bold size={18}>
          {contact.name}
        </Text>
        <Text color="#aaa">{contact.email}</Text>
      </div>
      <ButtonGroup>
        <Link to={`/${contact.id}/edit`} data-test="editar">
          <Button>E</Button>
        </Link>
        <Button onClick={() => onClickDelete(contact)} data-test="apagar">
          X
        </Button>
      </ButtonGroup>
    </Container>
  );
}
