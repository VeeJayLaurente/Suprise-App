import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import DateType from './pages/DateType';
import Location from './pages/Location';
import Excitement from './pages/Excitement';
import Final from './pages/Final';
import Please from './pages/Please';
import Continue from './pages/Continue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/please" element={<Please/>} />
        <Route path="/continue" element={<Continue/>} />
        <Route path="/date-type" element={<DateType />} />
        <Route path="/location" element={<Location />} />
        <Route path="/excitement" element={<Excitement />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
