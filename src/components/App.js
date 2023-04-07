import "../css/App.css";
import Layout from "./Layout";
// import Login from "./pages/Login";
// import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
function App() {
  return (
    <div className="App">
      <Layout>
        <Result />
      </Layout>
    </div>
  );
}

export default App;
