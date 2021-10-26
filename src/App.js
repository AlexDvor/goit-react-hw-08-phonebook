// import Form from './components/Form';
import AppBar from './components/AppBar/AppBar';

// import Filter from './components/Filter';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// pageBreakInside:
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import SignUpFormPage from './pages/SignUpFormPage/SignUpFormPage';
import LogInFormPage from './pages/LogInFormPage/LogInFormPage';
import { fetchCurrentUser } from './redux/Auth/Auth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <PrivateRoute path="/contacts">
          <ContactPage />
        </PrivateRoute>

        <PublicRoute path="/signup" restricted>
          <SignUpFormPage />
        </PublicRoute>

        <PublicRoute path="/login" restricted>
          <LogInFormPage />
        </PublicRoute>
      </Switch>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default connect(null, null)(App);
