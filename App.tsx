import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { BeginnerProjects, IntermediateProjects, AdvancedProjects } from "./ProjectsPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beginner" element={<BeginnerProjects />} />
          <Route path="/intermediate" element={<IntermediateProjects />} />
          <Route path="/advanced" element={<AdvancedProjects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;