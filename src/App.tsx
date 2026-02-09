import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Services from "./pages/Services";
import PrivateLesson from "./pages/services/PrivateLesson";
import OnlineLesson from "./pages/services/OnlineLesson";
import GroupLesson from "./pages/services/GroupLesson";
import GlobalClass from "./pages/services/GlobalClass";
import KidsVocal from "./pages/services/KidsVocal";
import Curriculum from "./pages/Curriculum";
import Instructors from "./pages/Instructors";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/private" element={<PrivateLesson />} />
              <Route path="/services/online" element={<OnlineLesson />} />
              <Route path="/services/group" element={<GroupLesson />} />
              <Route path="/services/global" element={<GlobalClass />} />
              <Route path="/services/kids" element={<KidsVocal />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
