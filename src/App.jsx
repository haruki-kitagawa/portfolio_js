import { Routes, Route } from "react-router-dom";
import routes from "./Routes";


const App = () => {
  return (
    <Routes>
      {routes.map(({ path, element, label }) => (
        <Route key={label} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default App;
