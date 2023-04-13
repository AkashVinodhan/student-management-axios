import {
  Box,
  Toolbar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

// * https://64340404582420e231718e94.mockapi.io/students

const StudentList = () => {
  const context = useContext(Context);
  const { students, fetchStudents, deleteStudent } = context;
  useEffect(() => fetchStudents(), []);

  const nav = useNavigate();
  const handleEdit = (id) => {
    nav("/students/" + id);
  };
  const handleDelete = (id) => {
    deleteStudent(id);
  };

  const cellStyle = {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "700",
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
      }}
    >
      <Toolbar />
      <TableContainer component={Paper} sx={{ marginX: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1F2C3B" }}>
              <TableCell sx={cellStyle}>S.No</TableCell>
              <TableCell sx={cellStyle} align="center">
                Name
              </TableCell>
              <TableCell sx={cellStyle} align="center">
                City
              </TableCell>
              <TableCell sx={cellStyle} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(({ id, name, city }, index) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ paddingRight: 0 }}>
                  {index + 1}
                </TableCell>
                <TableCell align="center" sx={{ p: 0 }}>
                  {name}
                </TableCell>
                <TableCell align="center" sx={{ p: 0 }}>
                  {city}
                </TableCell>
                <TableCell align="center" sx={{ p: 0 }}>
                  {" "}
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={() => handleEdit(id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDelete(id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentList;
