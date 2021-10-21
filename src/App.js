// import Form from './components/Form';
import AppBar from './components/AppBar/AppBar';
import Contact from './components/Contact';
// import Filter from './components/Filter';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <h2>(-_-)</h2>
        </Route>

        <Route path="/contacts">
          <Contact />
        </Route>
      </Switch>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default connect(null, null)(App);
