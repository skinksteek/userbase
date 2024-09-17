import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <input type="text" placeholder="Namn" id="name" required></input>
        <input type="text" placeholder="E-post" id="name" required></input>
        <input type="number" placeholder="Ålder" id="name" required></input>
      </form>
    </div>
  );
}

export default App;
