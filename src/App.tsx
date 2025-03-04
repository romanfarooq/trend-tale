import Home from "@/components/Home";
import MultiForm from "@/components/MultiForm";
import NavBar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { MultiFormProvider } from "@/context/MultiFormContext";
import { NavigationProvider } from "@/context/NavigationContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavigationProvider>
        <NavBar />
      </NavigationProvider>
    ),
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
