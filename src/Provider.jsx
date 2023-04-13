import { useEffect, useState } from "react";
import axios from "axios";
import Context from "./Context";

export default function Provider(props) {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios
      .get("https://64340404582420e231718e94.mockapi.io/students")
      .then((res) => setStudents(res.data));
  };

  const createStudent = (data) => {
    axios
      .post("https://64340404582420e231718e94.mockapi.io/students/", {
        ...data,
      })
      .then((res) => fetchStudents());
  };

  const updateStudent = (id, data) => {
    axios
      .put("https://64340404582420e231718e94.mockapi.io/students/" + id, {
        ...data,
      })
      .then((res) => fetchStudents());
  };

  const deleteStudent = (id) => {
    axios
      .delete("https://64340404582420e231718e94.mockapi.io/students/" + id)
      .then((res) => fetchStudents());
  };

  return (
    <Context.Provider
      value={{
        students,
        setStudents,
        fetchStudents,
        createStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
