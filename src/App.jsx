import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Tutors from "./Pages/Tutors/Tutors";
import Options from "./Pages/Options/Options";
import LoginPage from "./Pages/Login/LoginPage";
import Subjects from "./Pages/Subjects/Subjects";
import Students from "./Pages/Students/Students";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditTutor from "./Pages/EditTutor/EditTutor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/options" element={<Options />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/tutors/edit/:id" element={<EditTutor />} />
          <Route path="/students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
