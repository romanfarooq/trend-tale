import Home from "@/components/Home";
import MultiForm from "@/components/MultiForm";
import NavBar from "@/components/Navbar";
import Toaster from "@/components/ui/toaster";
import MultiFormProvider from "@/context/MultiFormContext";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/generate"
          element={
            <MultiFormProvider>
              <MultiForm />
            </MultiFormProvider>
          }
        />
      </Routes>
      <Toaster />
      <ScrollToHashElement />
    </BrowserRouter>
  );
}
