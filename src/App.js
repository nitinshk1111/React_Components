import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import AutocompleteContainer from "./autocomplete/AutocompleteContainer";
import File from "./fileExplorer/components/File";
import Container from "./progress-bar/components/Container";
import Board from "./tic-tac-toe/Board";
//create a router configuration
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/file", element: <File /> },
      { path: "/board", element: <Board /> },
      { path: "/progressBar", element: <Container /> },
      { path: "/autocomplete", element: <AutocompleteContainer /> },
    ],
  },
]);

function App() {
  return (
    <div className="App" data-testid="main-page">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
