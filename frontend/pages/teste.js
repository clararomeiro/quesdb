import PublicPage from "@/pages/publicPage";
import MeuTeste from "@/pages/teste/meuTeste";
import NovoTeste from "@/pages/teste/novoTeste";
import {
  Box,
  useMediaQuery
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";


function Test(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:1000px)");
  const [test, setTest] = useState({});

  const handleSubmit = (values) => {
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://localhost:7259/criarFormulario?Materia=${values.materia}&Assunto=${values.assunto}Ano=${values.ano}&Nivel=${values.nivel}&Questoes=${values.questoes}&QtdQuestoes=${values.quantidadeQuestoes}&Observacao=${values.observacao}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>  {
        console.log(result)
        setTest(result)
      })
      .catch((error) => {
        console.log("error", error)
        alert("Houve um erro na criação do teste")
      });
  };

  return (
    <PublicPage>
      <Box
        style={{
          width: matches ? "90vw" : "60vw",
          backgroundColor: "#2F3358",
          margin: "20px auto",
          padding: "50px 30px",
          borderRadius: 20,
        }}
      >

        {Object.keys(test).length > 0 ? <MeuTeste questions={test}/> : <NovoTeste handleSubmit={handleSubmit}/>}
        
      </Box>
    </PublicPage>
  );
}

export default Test;
