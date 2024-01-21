import './App.css';
import SideNav from './component/NavMenu';
import { ReportComponent } from './component/ReportComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <SideNav />
      <Routes>
      <Route path="/report" Component={ReportComponent} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
