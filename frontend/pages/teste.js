import PublicPage from "@/pages/publicPage";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

const MyTitle = styled.h4`
  margin: 0;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const RoundedTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "white",
    borderRadius: 30,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginBottom: 20,
    width: "100%",
    "&:focus-within": {
      outline: "2px solid #BE9505", // Set your desired border style for the selected input
    },
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInputBase-input:-webkit-autofill": {
    "-webkit-text-fill-color": "black",
    "-webkit-box-shadow": "0 0 0 1000px white inset",
  },
});

const questions = [
  {
    enunciado:
      "Em uma loja de doces, um grupo de amigos comprou diversos chocolates. As quantidades compradas foram: 5, 6, 7, 8 e 10 unidades, respectivamente. Calcule a média aritmética de chocolates comprados por esse grupo.",
    opcoes: {
      a: "5",
      b: "6",
      c: "7",
      d: "8",
      e: "9",
    },
    resposta_correta: "d",
  },
  {
    enunciado:
      "Em uma competição de atletismo, as idades dos atletas foram registradas para análise estatística. As idades são: 13, 14, 15, 15, 16, 16, 17, 18 e 19 anos. Qual é a idade que mais se repete (moda) entre os atletas?",
    opcoes: {
      a: "13",
      b: "15",
      c: "16",
      d: "17",
      e: "18",
    },
    resposta_correta: "c",
  },
  {
    enunciado:
      "Um estudante resolveu fazer cinco provas e anotou suas notas em ordem crescente: 6, 7, 8, 8 e 9. Calcule a mediana das notas desse estudante.",
    opcoes: {
      a: "7",
      b: "7.5",
      c: "8",
      d: "8.5",
      e: "9",
    },
    resposta_correta: "d",
  },
];

function Index(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:1000px)");
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <PublicPage>
        <Box
          style={{
            width: matches ? "90vw" : "60vw",
            margin: "5vh auto",
          }}
        >
          <Card>
            <CardContent style={{ color: "black" }}>
              {questions.map((question) => (
                <>
                  <Typography variant="h5">{question.enunciado}</Typography>
                  <br />
                  {Object.keys(question.opcoes).map((key) => (
                    <>
                      <Typography variant="body1">
                        {key}) {question.opcoes[key]}
                      </Typography>
                    </>
                  ))}
                  <Divider style={{ margin: "20px 0" }} />
                  <Typography variant="body2">
                    Resposta correta: {question.resposta_correta}
                  </Typography>
                  <Divider style={{ margin: "20px 0" }} />
                </>
              ))}
            </CardContent>
          </Card>
        </Box>
      </PublicPage>
    );
  }

  return (
    <PublicPage>
      <Box
        style={{
          width: matches ? "90vw" : "60vw",
          backgroundColor: "#2F3358",
          margin: "auto",
          padding: "50px 30px",
          marginTop: matches ? "10vh" : "20vh",
          borderRadius: 20,
        }}
      >
        <Formik
          initialValues={{}}
          validate={(values) => {}}
          onSubmit={() => {
            var myHeaders = new Headers();
            myHeaders.append("accept", "*/*");

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              redirect: "follow",
            };

            fetch(
              "https://localhost:7259/criarFormulario?Materia=Matematica&Assunto=Fra%C3%A7%C3%A3o%2C%20equa%C3%A7%C3%A3o&Ano=5&Nivel=1&Questoes=1&QtdQuestoes=5",
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
          }) => {
            return (
              <form>
                <Box>
                  <MyTitle variant="h4">Matéria:</MyTitle>
                  <RoundedTextField
                    placeholder="Ex: Biologia, Matemática, História..."
                    style={{ width: "100%" }}
                  />
                </Box>
                <Box>
                  <MyTitle variant="h4">Nível:</MyTitle>
                  <RoundedTextField
                    placeholder="Ex: Ensino médio, Fundamental II..."
                    style={{ width: "100%" }}
                  />
                </Box>
                <br />
                <Box style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      borderRadius: 50,
                      color: "#BE9505",
                      backgroundColor: "white",
                      width: "50%",
                      height: 50,
                    }}
                    variant="contained"
                    onClick={() => handleSubmit()}
                  >
                    Enviar
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </PublicPage>
  );
}

export default Index;
