import './styles/style.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';
import { useContext, useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { AuthContext } from './context/AuthContext';
import { LoaderComponent } from './components/Loader';

function App() {
  const { user, error } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 3000);

    return () => {};
  }, [loading]);

  const reloadPage = () => {
    window.location.reload();
  };

  if (error) {
    return (
      <div className="notFound">
        <button onClick={() => reloadPage()} className="notFoundBtn">
          Refresh Page
        </button>
        <p>An error occured, Please check your internet connection</p>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <LoaderComponent
          bgColor="#39cdcc"
          textColor="#39cdcc"
          iconSize={parseInt('50')}
          title="Lendsqr"
          type="bubble-loop"
        />
      ) : (
        <Router>
          {user ? (
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/:id" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </Router>
      )}
    </>
  );
}

export default App;
