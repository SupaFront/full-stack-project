import { useEffect } from 'react';
import './App.css';
import Header from './modules/Header/Header';
import MyRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
