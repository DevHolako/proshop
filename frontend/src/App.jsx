import { RouterProvider } from "react-router-dom";
import router from "./routes/index.routes";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
