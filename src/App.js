import "./App.css";
import Container from "./components/Container";
import { CityNameProvider } from "./context/CityContext";
function App() {
  return (
    <div className="App">
      <CityNameProvider>
        <Container />
      </CityNameProvider>
    </div>
  );
}

export default App;
