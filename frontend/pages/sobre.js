import PublicPage from "@/pages/publicPage";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";

const MyText = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

function Index(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <PublicPage>
      <Box
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: matches ? "90vw" : "60vw", borderRadius: 20 }}>
          <CardContent style={{ color: "black", padding: matches ? 20 : 40 }}>
            <MyText>
              O QuesDB é um projeto feito por alunos de Computação para faciliar
              a criação de provas para professores e para alunos que precisam de
              desejam testar seu conhecimento. Projetado na cadeira de
              desenvolvimento web, o projeto ainda está em desenvolvimento.
            </MyText>
          </CardContent>
        </Card>
      </Box>
    </PublicPage>
  );
}

export default Index;
