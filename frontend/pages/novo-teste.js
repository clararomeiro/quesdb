import PublicPage from "@/pages/publicPage";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { Formik } from "formik";
import { useRouter } from "next/router";

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

function Index(props) {
  const router = useRouter();
  return (
    <PublicPage>
      <Box
        style={{
          width: "40vw",
          backgroundColor: "#2F3358",
          height: "100vh",
          margin: "auto",
        }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          // onSubmit={handleSignIn}
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
              <form
                onSubmit={handleSubmit}
                style={{ marginTop: "10vh", padding: "60px 80px" }}
              >
                <Box>
                  <Typography variant="h4">Matéria:</Typography>
                  <RoundedTextField
                    placeholder="Ex: Biologia, Matemática, História..."
                    style={{ width: "100%" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">Nível:</Typography>
                  <RoundedTextField
                    placeholder="Ex: Ensino médio, Fundamental II..."
                    style={{ width: "100%" }}
                  />
                </Box>
                <Box style={{ marginTop: "50vh", textAlign: 'center' }}>
                  <Button style={{ borderRadius: 50, color: '#BE9505', backgroundColor: 'white', width: 200 }} variant="contained">
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
