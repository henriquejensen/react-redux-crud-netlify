import styled from "styled-components";

const Input = styled.input`
  padding: 5px;
  width: 100%;
`;

const Label = styled.label``;

const FormGroup = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const InputError = styled.span`
  font-size: 12px;
  color: red;
`;

export { FormGroup, Label, Input, InputError };
