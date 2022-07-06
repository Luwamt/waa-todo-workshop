import logo from './logo.svg';
import './App.css';
import DashBord from './components/DashBord';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <DashBord/>
      </BrowserRouter>
    </div>
  );
}

export default App;
