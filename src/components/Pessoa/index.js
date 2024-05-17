import { FormControlLabel, Paper, Switch, Typography } from "@mui/material";

const Pessoa = ({ pessoa }) => {
  return (
    <Paper component="div" elevation={3} sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {pessoa.nome} {pessoa.sobrenome} - {pessoa.cpf}
      </Typography>
      <FormControlLabel
        control={
          <Switch checked={pessoa.promocoes} disabled={true} name="promocoes" />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch checked={pessoa.novidades} disabled={true} name="novidades" />
        }
        label="Novidades"
      />
    </Paper>
  );
};

export default Pessoa;
