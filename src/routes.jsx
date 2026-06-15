import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Company from "./Components/Company";
import Content from "./Components/Content";
import Chess from "./Components/Chess"
import Education from "./Components/Education";
import Media from "./Components/Media";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Content /> },
      { path: "/company", element: <Company /> },
      {path: "/chess", element: <Chess />},
      {path: "/education", element: <Education />},
      {path: "/media", element:<Media />}
    ],
  },
]);

export default router;
