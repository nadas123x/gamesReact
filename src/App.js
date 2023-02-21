import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GameList  from './Composantes/GamesList';
import GameDetail from './Composantes/GameDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/games" element={<GameList/>} />
          <Route path="/games/:id" element={<GameDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
