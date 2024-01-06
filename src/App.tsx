import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";

export default function App() {
    return (
        <Router>
            <MainRoutes />
        </Router>
    );
}
