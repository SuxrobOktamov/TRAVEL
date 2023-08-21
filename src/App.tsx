import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './page';

function App() {
  return (
   <BrowserRouter>
      <Home />
   </BrowserRouter>
  );
}

export default App;
