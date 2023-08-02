import PublicPage from "@/pages/publicPage";
import styled from "@emotion/styled";
import { Box, Button, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
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
  const matches = useMediaQuery('(max-width:900px)')

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
        <Card style={{ width: matches? '90vw' : '60vw', borderRadius: 20 }}>
          <CardContent style={{color: 'black', padding:  matches? 20 : 40}}>
            <MyText >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</MyText>
          </CardContent>
        </Card>
      </Box>
    </PublicPage>
  );
}

export default Index;
