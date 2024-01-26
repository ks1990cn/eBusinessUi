import './App.css';
import SideNav from './components/NavMenu';
import { ReportComponent } from './components/ReportComponent';
import {Home} from './components/HomeComponent'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { LoginComponent } from './components/LoginComponent';
function App() {
  const RequireAuth = ({ children }) => {
    //check from local storage here
    const userIsLogged = (localStorage.getItem('isauthenticated') && localStorage.getItem('isauthenticated').toLowerCase()) === 'true'; 
    if (!userIsLogged) {
        return <LoginComponent />;
    }
    return children;
};
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
        <Route path="/report" 
         element= {
          <RequireAuth>
            <ReportComponent />
          </RequireAuth>
        } />
        <Route path="/login" Component={LoginComponent} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
