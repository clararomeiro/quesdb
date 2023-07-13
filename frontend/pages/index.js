import PublicPage from "@/pages/publicPage";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

function Index(props) {
  const router = useRouter();
  return (
    <PublicPage>
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h3">
            Descubra um novo jeito de criar suas provas
          </Typography>
          <br />
          <Box style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push('/novo-teste')}
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
