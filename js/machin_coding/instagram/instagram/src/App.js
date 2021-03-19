import './App.css';
import { AppHeader } from './components/header/header.component';
import { AppHome } from './home_components/home.component';

function App() {
  return (
    <div className="App">
        <div className="Container">
          <AppHeader></AppHeader>
          <AppHome></AppHome>
        </div>
    </div>
  );
}

export default App;
