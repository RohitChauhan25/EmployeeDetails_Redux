import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Employees from "./pages/EmployeesDetails";

function App() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" Component={Employees} />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default App;
