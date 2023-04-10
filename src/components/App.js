import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/App.css";
import PrivateRoute from "../higher-order-component/PrivateRoute";
import PublicRoute from "../higher-order-component/PublicRoute";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<PublicRoute />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route exact path="/signup" element={<PublicRoute />}>
              <Route exact path="/signup" element={<Signup />} />
            </Route>
            <Route exact path="/quiz" element={<PrivateRoute />}>
              <Route exact path="/quiz" element={<Quiz />} />
            </Route>
            <Route exact path="/result" element={<PrivateRoute />}>
              <Route exact path="/result" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
