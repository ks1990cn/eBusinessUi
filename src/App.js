import './App.css';
import SideNav from './components/NavMenu';
import { ReportComponent } from './components/ReportComponent';
import {Home} from './components/HomeComponent'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { LoginComponent } from './components/LoginComponent';
import ShoppingCartComponent from './components/ShoppingCartComponent';
import ProductComponent from './components/ProductComponent';
import { useState, useEffect } from 'react';
import { UpdateCredentialComponent } from './components/UpdateCredentialComponent';

function App() {
  const RequireAuth = ({ children }) => {
    //check from local storage here
    var userIsLogged = (localStorage.getItem('isauthenticated') && localStorage.getItem('isauthenticated').toLowerCase()) === 'true'; 
    //check if token expired
    var jwt_token = localStorage.getItem('accessToken')
    fetch('http://localhost:8080/TokenValidation', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt_token}`
      },
      body: JSON.stringify({  })
      })
      .then(response => {
          if(response.status != 200){
           //        // Handle the response data here
           localStorage.removeItem('IdToken')
           localStorage.removeItem('accessToken')
           localStorage.setItem('isauthenticated', 'false'); // Update localStorage
           userIsLogged = false
        }
      }).catch(error =>{})
    if (!userIsLogged) {
        return <LoginComponent />;
    }
    return children;
};
  const [cartItems, setCartItems] = useState([]);
  const [webSocket, setWebSocket] = useState(null);
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:7114/ws'); // Replace with your .NET Core API WebSocket endpoint

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCartItems(prevItems => [...prevItems, data]);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    setWebSocket(ws);

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);
  return (
    <Router>
      <div>
        <SideNav cartItems = {cartItems}/>
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
        <Route path="/shoppingcart" 
         element= {
          <RequireAuth>
            <ShoppingCartComponent />
          </RequireAuth>
        } />
         <Route path="/products" 
         element= {
          <RequireAuth>
            <ProductComponent />
          </RequireAuth>
        } />
        <Route path="/updatePassword" Component={UpdateCredentialComponent} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
