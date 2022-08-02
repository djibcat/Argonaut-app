import './style/global.css'
import './style/colors.css'
import Header from "./components/Header";
import AddArgonaut from "./components/AddArgonaut"
import ListArgonaut from "./components/ListArgonauts";

function App() {
  return (
    <div className="App">
     <Header/>
        <AddArgonaut/>
        <ListArgonaut/>
    </div>
  );
}

export default App;
