import Home from "@/components/Home";
import MultiForm from "@/components/MultiForm";
import NavBar from "@/components/Navbar";
import MultiFormProvider from "@/context/MultiFormContext";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/generate",
        element: (
          <MultiFormProvider>
            <MultiForm />
          </MultiFormProvider>
        ),
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
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
    </>
  );
}
