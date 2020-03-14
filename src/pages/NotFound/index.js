import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader } from "components/Card";
import Title from "components/Title";

export default function NotFound() {
  return (
    <Card>
      <CardHeader>
        <Link to="/">Voltar</Link>
      </CardHeader>
      <div>
        <Title>Nenhuma página encontrada</Title>
      </div>
    </Card>
  );
}
