import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <input type="text" placeholder="Name" id="name" required></input>
        <input type="text" placeholder="Email" id="email" required></input>
        <input
          type="number"
          min="1"
          max="100"
          placeholder="Age"
          id="age"
          required
        ></input>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default App;
