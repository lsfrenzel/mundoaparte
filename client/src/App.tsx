import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Sobre from "@/pages/sobre";
import Servicos from "@/pages/servicos";
import BanhoTosa from "@/pages/banho-tosa";
import Depoimentos from "@/pages/depoimentos";
import Contato from "@/pages/contato";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/banho-tosa" component={BanhoTosa} />
      <Route path="/depoimentos" component={Depoimentos} />
      <Route path="/contato" component={Contato} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
