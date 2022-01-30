import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Template from './components/pages/Template';
import { AuthProvider } from './context/UserContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Template />
      </div>
    </AuthProvider>
  );
}

export default App;
