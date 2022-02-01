import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Template from './components/pages/Template';
import { useState } from 'react';
import { AuthProvider } from './context/UserContext';

function App() {

	const [page, setPage] = useState("TopTopics");

	return (
		<AuthProvider>
			<div className="App">
                <div>
                    <NavBar viewChangeHandler={setPage} page={page} />
                </div>
                <div style={{display:"grid", placeItems:"center"}}>
                    <Template viewChangeHandler={setPage} page={page}/>
                </div>
			</div>
		</AuthProvider>
	);
}

export default App;
