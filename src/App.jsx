import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;