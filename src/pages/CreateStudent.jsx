import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, Toolbar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../Context";
import axios from "axios";

const CreateUser = () => {
  const nav = useNavigate();
  const context = useContext(Context);
  const { createStudent, updateStudent } = context;
  let initial = {
    name: "",
    city: "",
    isDayScholar: "",
    contact: "",
    id: "",
  };
  const [data, setData] = useState(initial);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get("https://64340404582420e231718e94.mockapi.io/students/" + id)
        .then((res) => {
          const { name, city, contact } = res.data;
          let temp = { name, city, contact };
          setData(temp);
        });
    }
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (data) => {
    if (data.name && data.city && data.contact) {
      if (!id) {
        createStudent(data);
        setData(initial);
      }
      if (id) {
        updateStudent(id, data);
        setData(initial);
      }
      nav(-1);
    }
  };
  //styles
  const inputBox = {
    m: 1,
    input: { color: "white" },
    label: { color: "white" },
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: "#5E6872",
        color: "white",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Toolbar />
      <h3 sx={{ m: 1 }}>{id ? "Edit Student" : "Create new Student"}</h3>
      <form>
        <TextField
          onChange={handleChange}
          sx={inputBox}
          id="outlined-search"
          label="Name"
          name="name"
          type="text"
          value={data.name}
          required
        />
        <br />
        <TextField
          onChange={handleChange}
          id="outlined-search"
          label="City"
          name="city"
          type="text"
          sx={inputBox}
          value={data.city}
          required
        />
        <br />
        <TextField
          onChange={handleChange}
          id="outlined-search"
          label="Contact"
          name="contact"
          type="text"
          sx={inputBox}
          value={data.contact}
          required
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{ m: 1 }}
          onClick={() => handleSubmit(data)}
        >
          {id ? "Edit Student" : "Add Student"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateUser;
