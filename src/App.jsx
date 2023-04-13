import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import CreateStudent from "./pages/CreateStudent";
import Policy from "./pages/Policy";
import { Box } from "@mui/material";
import Provider from "./Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/createstudent" element={<CreateStudent />} />
            <Route path="/students/:id" element={<CreateStudent />} />
            <Route path="/policies" element={<Policy />} />
          </Routes>
        </Box>
      </Provider>
    </div>
  );
}

export default App;
