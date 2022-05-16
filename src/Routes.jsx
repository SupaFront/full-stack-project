import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import AboutUsPage from './pages/AboutUsPage';
import ResultsPage from './pages/ResultsPage';
import TestPage from './pages/TestPage';
import Materials from './pages/Materials';
import PublicRoute from './shared/components/PublicRoute/PublicRoute';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';

const MyRoutes = () => {
	return (
		<Routes>
			<Route element={ <PublicRoute /> }>
				<Route path="/auth" element={ <AuthPage /> } />
			</Route>
			<Route element={ <PrivateRoute /> }>
				<Route path="/" element={ <MainPage /> } />
				<Route path="/results" element={ <ResultsPage /> } />
				<Route path="/materials" element={ <Materials /> } />
				<Route path="/test" element={ <TestPage /> } />
			</Route>
			<Route path="/about-us" element={ <AboutUsPage /> } />
		</Routes>
	);
};

export default MyRoutes;
