import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import { Header } from "@/components/Header";
import HomePage from "@/pages/HomePage";
import ProjectLevelPage from "@/pages/ProjectLevelPage";
import { FloatingControls } from "@/components/FloatingControls";
import { AboutPage } from "@/pages/AboutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="relative min-h-screen">
          <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(118, 119, 233, 0.2) 0%, rgba(231, 60, 126, 0) 40%), radial-gradient(circle at center, rgba(35, 166, 213, 0.1) 0%, rgba(35, 213, 171, 0) 70%)",
                animation: "smooth-pulse 10s ease-in-out infinite",
                filter: "blur(80px)",
                backgroundPosition: "center",
              }}
            />
          </div>
          <Header />
          <FloatingControls />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:level" element={<ProjectLevelPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
