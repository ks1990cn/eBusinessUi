import './App.css';
import SideNav from './component/NavMenu';
import { ReportComponent } from './component/ReportComponent';
import {Home} from './component/HomeComponent'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <Routes>
           {/* Set the default route to redirect to /home */}
           <Route
            path="/"
            element={<Navigate to="/home" replace />} 
          />
        <Route path="/home" Component={Home} />
        <Route path="/report" Component={ReportComponent} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
