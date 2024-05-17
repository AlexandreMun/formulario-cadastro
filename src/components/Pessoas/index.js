import { Box } from "@mui/material";
import Pessoa from "../Pessoa";

const Pessoas = ({ pessoas }) => {
  return (
    <>
      {pessoas.map((pessoa) => (
        <Box >
          <Pessoa pessoa={pessoa} />
        </Box>
      ))}
    </>
  );
};

export default Pessoas;
