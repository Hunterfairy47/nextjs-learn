import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

import Card from "../ui/Card";
import SaveIcon from "@mui/icons-material/Save";
import { HeroDetailPageProps } from "./HeroItem";
import { FormProvider, useForm } from "react-hook-form";
import { InputField } from "../../custom/InpuiField";

export interface HeroFormPageProps {
  onSubmit: (values: HeroDetailPageProps) => void;
}

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "1rem",
  },

  control: {
    marginBottom: "0.5rem",

    "& input": {
      display: "block",
      font: "inherit",
      borderRadius: "4px",
      border: "1px solid #ccc",
      padding: "0.85rem",
      width: "100%",
    },
  },

  actions: {
    marginTop: " 1rem",
    textAlign: "right",
    "& button": {
      font: "inherit",
      color: "white",
      padding: "0.5rem 1.5rem",
      fontWeight: "bold",
    },
  },
}));

function HeroFormPage(props: HeroFormPageProps) {
  const classes = useStyles();
  const { onSubmit } = props;


  const methods = useForm<HeroDetailPageProps>({});

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <Card>
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Box sx={{p:2}}>
          <Box className={classes.control}>
            <InputField name="title" label="Name" />
          </Box>
          <Box className={classes.control}>
            <InputField name="image" label="Image" />
          </Box>
          <Box className={classes.control}>
            <InputField name="description" label="Description" multiline />
          </Box>
          <Box className={classes.actions} sx={{textAlign:'right'}}>
            <Button
              variant="contained"
              color="success"
              startIcon={<SaveIcon />}
              type="submit"
            >
              Add hero
            </Button>
          </Box>
        </Box>
        </form>
      </FormProvider>
    </Card>
  );
}

export default HeroFormPage;
