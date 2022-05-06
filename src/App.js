import { useEffect } from 'react';
import './App.css';
import Diagram from './modules/Diagram/Diagram';
import Header from './modules/Header/Header';
import ResultsPage from './pages/ResultsPage';
import MyRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <ResultsPage />
      {/* <MyRoutes /> */}
    </div>
  );
}

export default App;
