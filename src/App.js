import './App.css';
import LandingPage from './components/LandingPage';
import Start from './components/Start';
import Name from './features/name/Name';
import { Score } from './features/score/Score';
import { useSelector } from 'react-redux'

function App() {
  const name = useSelector((state) => state.name.value)

  return (
    <div className="App">
      {'name' ? <LandingPage /> : <Start />}
    </div>
  );
}

export default App;
