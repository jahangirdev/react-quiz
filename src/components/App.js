import "../css/App.css";
import Layout from "./Layout";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Layout>
        <Signup />
      </Layout>
    </div>
  );
}

export default App;
