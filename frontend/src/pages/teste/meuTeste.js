import PublicPage from "@/pages/publicPage";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery
} from "@mui/material";
import { useRouter } from "next/router";

// const questions = [
//   {
//     enunciado:
//       "Em uma loja de doces, um grupo de amigos comprou diversos chocolates. As quantidades compradas foram: 5, 6, 7, 8 e 10 unidades, respectivamente. Calcule a média aritmética de chocolates comprados por esse grupo.",
//     opcoes: {
//       a: "5",
//       b: "6",
//       c: "7",
//       d: "8",
//       e: "9",
//     },
//     resposta_correta: "d",
//   },
//   {
//     enunciado:
//       "Em uma competição de atletismo, as idades dos atletas foram registradas para análise estatística. As idades são: 13, 14, 15, 15, 16, 16, 17, 18 e 19 anos. Qual é a idade que mais se repete (moda) entre os atletas?",
//     opcoes: {
//       a: "13",
//       b: "15",
//       c: "16",
//       d: "17",
//       e: "18",
//     },
//     resposta_correta: "c",
//   },
//   {
//     enunciado:
//       "Um estudante resolveu fazer cinco provas e anotou suas notas em ordem crescente: 6, 7, 8, 8 e 9. Calcule a mediana das notas desse estudante.",
//     opcoes: {
//       a: "7",
//       b: "7.5",
//       c: "8",
//       d: "8.5",
//       e: "9",
//     },
//     resposta_correta: "d",
//   },
// ];

function MeuTeste(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:1000px)");
  const { questions } = props;

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

export default MeuTeste;
