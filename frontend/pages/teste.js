import PublicPage from "@/pages/publicPage";
import MeuTeste from "@/pages/teste/meuTeste";
import NovoTeste from "@/pages/teste/novoTeste";
import {
  bothQuestions,
  closedQuestions,
  openedQuestions,
} from "@/pages/teste/questions";
import { Box, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

function Test(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:1000px)");
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(values);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/generate-test", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setTest(JSON.parse(result))
        setLoading(false)
      })
      .catch((error) => {
        console.log("error", error)
        setLoading(false)
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
        {Object.keys(test).length > 0 ? (
          <MeuTeste questions={test.questoes} reset={() => setTest({})}/>
        ) : (
          <NovoTeste handleSubmit={handleSubmit} loading={loading}/>
        )}
      </Box>
    </PublicPage>
  );
}

export default Test;
