import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import HomePage from "./HomePage";
import { ProjectsPage } from "./src/ProjectsPage";
import {
  processedBeginnerProjects,
  processedIntermediateProjects,
  processedAdvancedProjects,
} from "./src/data/projects";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/beginner"
            element={<ProjectsPage projectsData={processedBeginnerProjects} difficulty="Beginner" />}
          />
          <Route
            path="/intermediate"
            element={<ProjectsPage projectsData={processedIntermediateProjects} difficulty="Intermediate" />}
          />
          <Route
            path="/advanced"
            element={<ProjectsPage projectsData={processedAdvancedProjects} difficulty="Advanced" />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;