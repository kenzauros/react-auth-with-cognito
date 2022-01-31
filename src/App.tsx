import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './hooks/use-auth';
import { SignIn } from './pages/SignIn';

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div></div>;
  }

  const TopPage = () => (
    <div>
      <p>トップページ</p>
      <p>{auth.isAuthenticated ? 'ログイン済' : '未ログイン'}</p>
      <p>
        <Link to="/signin">ログイン</Link>
      </p>
    </div>
  );

  const PrivateDashboard = () => (
    <PrivateRoute>
      <div>ようこそ！ {auth.username} さん！</div>
      <button onClick={() => auth.signOut()}>ログアウト</button>
    </PrivateRoute>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="dashboard" element={<PrivateDashboard />}></Route>
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
