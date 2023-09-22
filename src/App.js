import "./index.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User name="Tom" onlineStatus={true} />
      <User name="Lisa" onlineStatus={false} />
      <User name="Fred" onlineStatus={true} />
    </div>
  );
}

export default App;
