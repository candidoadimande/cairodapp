import Navbar from "./Navbar"
import Home from "./Home"
function App() {
    const title = "a great place to code"
    const link = "http://google.com"
  return (
    <div className="App">
        <Navbar />
        <div className="content">
            <Home />
        </div>
    </div>
  );
}

export default App;
