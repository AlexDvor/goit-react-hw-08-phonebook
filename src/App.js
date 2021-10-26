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

function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/contacts">
          <ContactPage />
          <h3>ContactPage </h3>
        </Route>

        <Route path="/signup">
          <SignUpFormPage />
        </Route>

        <Route path="/login">
          <LogInFormPage />
        </Route>
      </Switch>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default connect(null, null)(App);
