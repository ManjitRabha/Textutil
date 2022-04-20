
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success");
      document.title = "Textutil-dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      document.title = "Textutil-light mode";



    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title="Textutil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about"><About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
          </Route>
        </Switch>
      </Router> */}
      <Router>
        <Navbar title="Textutil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      <Routes>
         <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}/>
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
