import './App.css';
import Diagram from './modules/Diagram/Diagram';
import Header from './modules/Header/Header';
import ResultsPage from './pages/ResultsPage';
import MyRoutes from './Routes';
import Footer from './modules/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      {/* <ResultsPage /> */}
      <Footer />
    </div>
  );
}

export default App;
