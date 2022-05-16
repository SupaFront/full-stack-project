import './App.css';
import Header from './modules/Header/Header';

import MyRoutes from './Routes';
import Footer from './modules/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('qqeq');
    dispatch(getCurrentUser());
    return console.log('suka');
  }, []);
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
