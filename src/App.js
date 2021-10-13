import "./App.css";
import Container from "./components/Container";
import { ApiProvider } from "./context/APIContext";
function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Container />
      </ApiProvider>
    </div>
  );
}

export default App;
