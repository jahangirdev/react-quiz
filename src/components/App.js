import "../css/App.css";
import Layout from "./Layout";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
