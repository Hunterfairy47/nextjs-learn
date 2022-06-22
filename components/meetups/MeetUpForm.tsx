import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

import Card from "../ui/Card";
import SaveIcon from "@mui/icons-material/Save";

export interface MeetUpFormPageProps {
  // onSubmit:
  // meetUps: MeetUpItemPageProps[];
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
    '& button': {
      font: 'inherit',
      color: 'white',
      padding: '0.5rem 1.5rem',
      fontWeight: 'bold',
    }
  },
}));

function MeetUpFormPage(props: MeetUpFormPageProps) {
  const classes = useStyles();

  // const { onSubmit } = props;
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  function handleSubmit() {
    // const meetupData = {
    //   title: enteredTitle,
    //   image: enteredImage,
    //   address: enteredAddress,
    //   description: enteredDescription,
    // };
    // props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
        <Box className={classes.control}>
          <TextField label="Name" value={name} onChange={handleChangeName} />
        </Box>
        <Box className={classes.control}>
          <TextField label="Image" value={name} onChange={handleChangeImg} />
        </Box>
        <Box className={classes.actions}>
          <Button
            variant="contained"
            color="success"
            startIcon={<SaveIcon />}
            type="submit"
          >
            Add
          </Button>
        </Box>
      </form>
    </Card>
  );
}

export default MeetUpFormPage;
