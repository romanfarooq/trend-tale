import Home from "@/components/Home";
import MultiForm from "@/components/MultiForm";
import NavBar from "@/components/Navbar";
import MultiFormProvider from "@/context/MultiFormContext";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            backgroundColor: "#001f3f",
            color: "white",
          },
        }}
        position="top-center"
      />
      <ScrollToHashElement />
    </BrowserRouter>
  );
}
