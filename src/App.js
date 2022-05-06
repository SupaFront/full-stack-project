import './App.css';
import Header from './modules/Header/Header';
import MyRoutes from './Routes';
import Footer from "./modules/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<MyRoutes />
			<Footer />
		</div>
	);
}

export default App;
