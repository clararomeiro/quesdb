import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const MyTitle = styled.h6`
  margin: 0;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
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

const RoundedSelect = styled(Select)({
  backgroundColor: "white",
  borderRadius: 30,
  color: "black",
  marginTop: 0,
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  marginBottom: 20,
  width: "100%",
  "&:focus-within": {
    outline: "2px solid #BE9505", // Set your desired border style for the selected input
  },
  "& .MuiInputLabel-formControl": {
    top: -4,
    color: "gray", // Change the color of the placeholder
  },
  "& .MuiInputLabel-shrink": {
    top: -4, // Adjust the position of the placeholder when the value is selected
    visibility: "hidden", // Hide the placeholder when shrunk
  },
  "&.MuiInputLabel-shrink .MuiInputLabel-formControl": {
    visibility: "visible", // Make the placeholder visible again when select box shrinks back
  },
});

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

const anoList = [
  { value: 1, name: "1º ano" },
  { value: 2, name: "2º ano" },
  { value: 3, name: "3º ano" },
  { value: 4, name: "4º ano" },
  { value: 5, name: "5º ano" },
  { value: 6, name: "6º ano" },
  { value: 7, name: "7º ano" },
  { value: 8, name: "8º ano" },
  { value: 9, name: "9º ano" },
];

const nivelList = [
  { value: 0, name: "Ensino Fundamental I" },
  { value: 1, name: "Ensino Fundamental II" },
  { value: 2, name: "Ensino médio" },
];

const tipoQuestaoList = [
  { value: 0, name: "Abertas" },
  { value: 1, name: "Fechadas" },
  // { value: 2, name: "Ambas" },
];

const validationSchema = Yup.object().shape({
  Materia: Yup.string().required("Campo obrigatório"),
  Assunto: Yup.string().required("Campo obrigatório"),
  Ano: Yup.number().required("Campo obrigatório"),
  Nivel: Yup.string().required("Campo obrigatório"),
  Questoes: Yup.string().required("Campo obrigatório"),
  QtdQuestoes: Yup.number().required("Campo obrigatório"),
});

function NovoTeste(props) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:1000px)");
  const { handleSubmit, loading } = props;

  return (
    <Formik
      initialValues={{
        Materia: "",
        Assunto: "",
        Ano: "",
        Nivel: "",
        Questoes: "",
        QtdQuestoes: "",
        Observacao: "",
        filteredAnoList: anoList,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setValues }) => {
        const Niveis = ["Fundamental I", "Fundamental II", "Medio"];
        const { filteredAnoList: _, ...val } = values;

        let form = val;
        form["Nivel"] = Niveis[form["Nivel"]];
        if (form.Observacao === "") {
          delete form["Observacao"];
        }

        handleSubmit(form);
        resetForm();
        setValues(values);
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
        dirty,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box>
              <MyTitle variant="h4">Matéria:</MyTitle>
              <Field
                name="Materia"
                as={RoundedTextField}
                placeholder="Ex: Matemática"
                style={{ marginTop: 0 }}
                fullWidth
                required
                margin="normal"
              />
            </Box>
            <Box>
              <MyTitle variant="h4">Assunto:</MyTitle>
              <Field
                name="Assunto"
                as={RoundedTextField}
                placeholder="Ex: Frações"
                style={{ marginTop: 0 }}
                fullWidth
                required
                margin="normal"
              />
            </Box>
            <Box>
              <MyTitle variant="h4">Nível:</MyTitle>
              <FormControl fullWidth margin="normal" style={{ marginTop: 0 }}>
                <InputLabel>Ex: Ensino fundamental I</InputLabel>

                <Field name="Nivel">
                  {({ field, form }) => {
                    const handleNivelChange = (e) => {
                      const selectedNivel = e.target.value;
                      const filteredAnoList = anoList.filter((ano) => {
                        if (selectedNivel === 0) {
                          return ano.value >= 1 && ano.value <= 5;
                        } else if (selectedNivel === 1) {
                          return ano.value >= 6 && ano.value <= 9;
                        } else if (selectedNivel === 2) {
                          return ano.value >= 1 && ano.value <= 3;
                        } else {
                          return false; // Unknown nivel value, don't show any options
                        }
                      });

                      form.setFieldValue("Ano", ""); // Reset selected value to avoid inconsistencies
                      form.setFieldValue("Nivel", selectedNivel); // Set selected nivel value

                      // Set the filtered anoList as options for the select field
                      form.setFieldValue("filteredAnoList", filteredAnoList);
                    };

                    return (
                      <RoundedSelect {...field} onChange={handleNivelChange}>
                        {nivelList.map((nivel) => (
                          <MenuItem
                            key={nivel.value}
                            value={nivel.value}
                            style={{ color: "black" }}
                          >
                            {nivel.name}
                          </MenuItem>
                        ))}
                      </RoundedSelect>
                    );
                  }}
                </Field>
                <ErrorMessage name="Nivel" />
              </FormControl>
            </Box>
            <Box>
              <MyTitle variant="h4">Ano:</MyTitle>
              <FormControl fullWidth margin="normal" style={{ marginTop: 0 }}>
                <InputLabel>Ex: 5º ano</InputLabel>

                <Field name="Ano">
                  {({ field, form }) => {
                    return (
                      <>
                        <RoundedSelect {...field} placeholder="Ex: 5 ano">
                          {values.filteredAnoList.map((ano) => (
                            <MenuItem
                              key={ano.value}
                              value={ano.value}
                              style={{ color: "black" }}
                            >
                              {ano.name}
                            </MenuItem>
                          ))}
                        </RoundedSelect>
                        <ErrorMessage name="ano" />
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage name="ano" />
              </FormControl>
            </Box>
            <Box>
              <MyTitle variant="h4">Tipo de questões:</MyTitle>
              <FormControl fullWidth margin="normal" style={{ marginTop: 0 }}>
                <InputLabel>Ex: Abertas</InputLabel>

                <Field name="Questoes">
                  {({ field, form }) => {
                    return (
                      <>
                        <RoundedSelect {...field}>
                          {tipoQuestaoList.map((tipo) => (
                            <MenuItem
                              key={tipo.value}
                              value={tipo.value}
                              style={{ color: "black" }}
                            >
                              {tipo.name}
                            </MenuItem>
                          ))}
                        </RoundedSelect>
                        <ErrorMessage name="Questoes" />
                      </>
                    );
                  }}
                </Field>
              </FormControl>
            </Box>
            <Box>
              <MyTitle variant="h4">Quantidade de questões:</MyTitle>
              <Field
                name="QtdQuestoes"
                as={RoundedTextField}
                placeholder="Ex: 10"
                style={{ marginTop: 0 }}
                type="number"
                fullWidth
                required
                margin="normal"
              />
            </Box>
            <Box>
              <MyTitle variant="h4">Observação:</MyTitle>
              <Field
                name="Observacao"
                as={RoundedTextField}
                style={{ marginTop: 0 }}
                fullWidth
                margin="normal"
              />
            </Box>
            <br />
            <Box style={{ textAlign: "center" }}>
              <MyButton
                disabled={isSubmitting || !isValid || !dirty}
                variant="contained"
                type="submit"
              >
                {loading ? "Processando..." : "Enviar"}
              </MyButton>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}

export default NovoTeste;
