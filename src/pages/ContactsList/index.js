import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader } from "components/Card";
import Title from "components/Title";
import { Button } from "components/Button";
import ContactRow from "components/ContactRow";
import NoContacts from "components/NoContacts";
import styled from "styled-components";

const Number = styled.span`
  font-size: 12px;
  padding-left: 5px;
`;

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const totalDeCotnatos = contacts.length;

  const handleDeleteContact = contact => {
    dispatch({ type: "DELETE_CONTACT", contact });
  };

  return (
    <Card>
      <CardHeader>
        <Title data-test={`total-${totalDeCotnatos}`}>
          Contatos: <Number>({totalDeCotnatos})</Number>
        </Title>
        <Link to="/create" as="button" data-test="novo-contato">
          <Button>Adicionar contato</Button>
        </Link>
      </CardHeader>
      {totalDeCotnatos ? (
        contacts.map(contact => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onClickDelete={handleDeleteContact}
          />
        ))
      ) : (
        <NoContacts />
      )}
    </Card>
  );
}
