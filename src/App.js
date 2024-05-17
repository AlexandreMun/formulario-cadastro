import { Container, Typography } from "@mui/material";
import FormularioCadastro from "./components/FormularioCadastro";
import "@fontsource/roboto";
import "./App.css";
import Pessoas from "./components/Pessoas";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const inicial = [
    {
      id: uuid(),
      nome: "teste1",
      sobrenome: "teste1",
      cpf: "12345123415",
      promocoes: true,
      novidades: true,
    },
    {
      id: uuid(),
      nome: "teste2",
      sobrenome: "teste2",
      cpf: "12345123415",
      promocoes: true,
      novidades: false,
    },
    {
      id: uuid(),
      nome: "teste3",
      sobrenome: "teste3",
      cpf: "12345123415",
      promocoes: false,
      novidades: false,
    },
    {
      id: uuid(),
      nome: "teste4",
      sobrenome: "teste4",
      cpf: "12345123415",
      promocoes: false,
      novidades: true,
    },
  ];

  const [pessoas, setPessoas] = useState(inicial);

  const aoEnviarForm = (dadosPessoa) => {
    const id = uuid();
    const novaPessoa = { ...dadosPessoa, id: id };
    console.log(novaPessoa);
    setPessoas([...pessoas, novaPessoa]);
  };

  function validarCPF(cpf) {
    if (cpf.length !== 11) {
      return { valido: false, texto: "O CPF deve ter 11 digitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoCadastrar={aoEnviarForm} validarCPF={validarCPF} />

      <Pessoas pessoas={pessoas} />
    </Container>
  );
}

export default App;
