import { BrowserRouter } from 'react-router-dom';
import './App.css'
import RBNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter basename="/resume-builder">
      <RBNavbar />
    </BrowserRouter>
  );
}

export default App;
