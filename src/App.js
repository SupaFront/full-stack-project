import './App.css';
import Diagram from './modules/Diagram/Diagram';
import Header from './modules/Header/Header';
import ResultsPage from './pages/ResultsPage';
import MyRoutes from './Routes';
import Footer from './modules/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      {/* <MyRoutes /> */}
      <ResultsPage />
      <Footer />
    </div>
  );
}

export default App;
