import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ModularKitchens from "./pages/ModularKitchens";
import OfficeFurniture from "./pages/OfficeFurniture";
import CorporateInteriors from "./pages/CorporateInteriors";
import Chairs from "./pages/Chairs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modular-kitchens" element={<ModularKitchens />} />
          <Route path="/office-furniture" element={<OfficeFurniture />} />
          <Route path="/corporate-interiors" element={<CorporateInteriors />} />
          <Route path="/chairs-seating" element={<Chairs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
