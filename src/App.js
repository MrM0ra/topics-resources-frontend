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
				<NavBar viewChangeHandler={setPage} page={page} />
				<Template viewChangeHandler={setPage} page={page}/>
			</div>
		</AuthProvider>
	);
}

export default App;
