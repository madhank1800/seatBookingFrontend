
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/UserAuth/LoginPage/LoginPage';
import SignupPage from './Components/UserAuth/SignupPage/SignupPage';
// import Htmlcss from './Components/Htmlcssprac/Htmlcss';
//import Htmlcss1 from './Components/Htmlcssprac/Htmlcss1';
import { Suspense, lazy, } from 'react';
import ProtectedRoute from './ProtectedRoute';
import FallbackComponent from './FallbackComponent';

const HomePage = lazy(() => import('./Components/Dashboard/HomePage'));
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<LoginPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      {/* <Route path="/html" element={<Htmlcss1/>}/>  */}

      
      <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <Suspense fallback={<FallbackComponent />}>
                  <HomePage />
                </Suspense>
              </ProtectedRoute>
            }
          ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
