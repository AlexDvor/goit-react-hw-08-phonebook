// import Form from './components/Form';
import AppBar from './components/AppBar/AppBar';

// import Filter from './components/Filter';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
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
import { getFetchingCurrent } from './redux/Auth/Auth-selector';

function App() {
  const isFetchingCurrent = useSelector(getFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrent && (
      <>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

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
    )
  );
}

export default connect(null, null)(App);
