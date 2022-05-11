import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import ContactsPage from './pages/ContactsPage';
import ResultsPage from './pages/ResultsPage';
import TestPage from './pages/TestPage';
import UsefulInfoPage from './pages/UsefulInfoPage';
import PublicRoute from './shared/components/PublicRoute/PublicRoute';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';

const MyRoutes = () => {
	return (
		<Routes>
			<Route element={ <PublicRoute /> }>
				<Route path="/auth" element={ <AuthPage /> } />
				<Route path="/about-us" element={ <ContactsPage /> } />
				{/* <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<MainPage />} /> */}
			</Route>
			<Route element={ <PrivateRoute /> }>
				<Route path="/" element={ <MainPage /> } />
				<Route path="/results" element={ <MainPage /> } />
				<Route path="/useful-info" element={ <UsefulInfoPage /> } />
				<Route path="/test" element={ <TestPage /> } />
			</Route>
		</Routes>
	);
};

export default MyRoutes;
