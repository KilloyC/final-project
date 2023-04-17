import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RiddleQuestions from './pages/RiddleQuestions';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes> {/* allows for routes to be chosen based on the best match instead of being travered in order. */}
        <Route index element={<Home />} /> {/*  route is the conditionally shown component that renders some UI when its path matches the current URL. */}
        <Route path='/about' element={<About />} />
        <Route path='/riddleQuestions' element={<RiddleQuestions />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
