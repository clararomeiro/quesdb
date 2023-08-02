import PublicPage from "@/pages/publicPage";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const MyTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

function Index(props) {
  const router = useRouter();

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
        <Box>
          <MyTitle>Descubra um novo jeito de criar suas provas</MyTitle>
          <br />
          <Box style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push("/teste")}
              style={{
                color: "white",
                width: "40%",
                height: "7vh",
                fontSize: 20,
                borderRadius: 10,
              }}
            >
              Começar
            </Button>
          </Box>
        </Box>
      </Box>
    </PublicPage>
  );
}

export default Index;
