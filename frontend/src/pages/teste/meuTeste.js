import PublicPage from "@/pages/publicPage";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { openedQuestions } from "./questions";
import { useState } from "react";
import styled from "@emotion/styled";

const MyButton = styled(Button)(({ theme, disabled }) => ({
  borderRadius: 50,
  color: "#BE9505",
  backgroundColor: disabled ? "grey" : "white",
  width: "50%",
  height: 50,
  "&:hover": {
    backgroundColor: disabled ? "grey" : "white",
  },
}));

function MeuTeste(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:1000px)");
  const [expanded, setExpanded] = useState("");
  const { questions, reset } = props;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <PublicPage>
      <Box style={{marginTop: -50}}>
        <Card>
          <CardContent style={{ color: "black" }}>
            {questions.map((question, index) => (
              <>
                <Typography variant="h5">{question.enunciado}</Typography>
                {question.opcoes &&
                  Object.keys(question.opcoes).map((key) => (
                    <>
                      <br />
                      <Typography variant="body1">
                        {key}) {question.opcoes[key]}
                      </Typography>
                    </>
                  ))}
                <br/>
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    aria-controls={`panel${index}d-content`}
                    id={`panel${index}d-header`}
                  >
                    <Typography style={{color: 'black'}}>Clique para ver a resposta</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" style={{color: 'grey'}}>
                      {question.resposta_correta}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br/>
              </>
            ))}
            <Box style={{textAlign: 'center'}}>
              <MyButton variant="outlined" onClick={() => reset()}>Novo teste</MyButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </PublicPage>
  );
}

export default MeuTeste;
