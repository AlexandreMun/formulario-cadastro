import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";

const FormularioCadastro = ({ aoCadastrar, validarCPF }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  function aoEnviarForm(event) {
    event.preventDefault();
    // console.log("form enviado");
    aoCadastrar({ nome, sobrenome, cpf, promocoes, novidades });
  }

  return (
    <form onSubmit={aoEnviarForm}>
      <TextField
        required
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        fullWidth={true}
        margin="normal"
        id="outlined-basic"
        label="Nome"
        variant="outlined"
      />
      <TextField
        required
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        fullWidth={true}
        margin="normal"
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
      />
      <TextField
        required
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth={true}
        margin="normal"
        id="outlined-basic"
        label="CPF"
        variant="outlined"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name="promocoes"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            name="novidades"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
