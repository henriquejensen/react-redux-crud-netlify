import React from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader } from "components/Card";
import { FormGroup, Label, Input, InputError } from "components/Input";
import Title from "components/Title";
import { Button, ButtonGroup } from "components/Button";

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { contato_id } = useParams();
  const id = parseInt(contato_id, 10);
  const contact = useSelector(
    store => store.contacts.find(contact => contact.id === id) || {}
  );
  const [name, setName] = React.useState(contact.name || "");
  const [email, setEmail] = React.useState(contact.email || "");
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  const returnHome = () => {
    history.push("/");
  };

  const handleChangeName = evt => {
    setNameError(false);
    setName(evt.target.value);
  };

  const handleChangeEmail = evt => {
    setEmailError(false);
    setEmail(evt.target.value);
  };

  const handleSaveContact = () => {
    if (!name) {
      setNameError(true);
      return;
    }

    if (!email || !email.includes("@")) {
      setEmailError(true);
      return;
    }

    if (id) {
      dispatch({ type: "EDIT_CONTACT", payload: { name, email, id } });
    } else {
      dispatch({ type: "CREATE_CONTACT", payload: { name, email } });
    }
    returnHome();
  };

  if (id && !name) {
    return <Redirect to="/404" />;
  }

  return (
    <Card>
      <CardHeader>
        <Title>Novo Contato</Title>
        <ButtonGroup>
          <Button onClick={returnHome}>Voltar</Button>
          <Button
            onClick={handleSaveContact}
            data-test={id ? "salvar" : "criar"}
          >
            {id ? "Salvar" : "Criar"} contato
          </Button>
        </ButtonGroup>
      </CardHeader>
      <FormGroup>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          name="name"
          data-test="nome"
          value={name}
          onChange={handleChangeName}
        />
        {nameError && <InputError>Nome não pode ser vazio</InputError>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          name="email"
          data-test="email"
          value={email}
          onChange={handleChangeEmail}
        />
        {emailError && (
          <InputError>Email não pode ser vazio ou inválido</InputError>
        )}
      </FormGroup>
    </Card>
  );
}
