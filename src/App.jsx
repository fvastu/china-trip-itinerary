import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import PecinoPage from './pages/PecinoPage';
import LuoyangPage from './pages/LuoyangPage';
import XianPage from './pages/XianPage';
import ChengduPage from './pages/ChengduPage';
import ZhangjiajePage from './pages/ZhangjiajePage';
import GuilinPage from './pages/GuilinPage';
import ShanghaiPage from './pages/ShanghaiPage';
import MapPage from './pages/MapPage';
import FoodPage from './pages/FoodPage';
import NotesPage from './pages/NotesPage';
import PhrasesPage from './pages/PhrasesPage';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pechino" element={<PecinoPage />} />
      <Route path="/luoyang" element={<LuoyangPage />} />
      <Route path="/xian" element={<XianPage />} />
      <Route path="/chengdu" element={<ChengduPage />} />
      <Route path="/zhangjiajie" element={<ZhangjiajePage />} />
      <Route path="/guilin" element={<GuilinPage />} />
      <Route path="/shanghai" element={<ShanghaiPage />} />
      <Route path="/mappa" element={<MapPage />} />
      <Route path="/cibo" element={<FoodPage />} />
      <Route path="/note" element={<NotesPage />} />
      <Route path="/frasi" element={<PhrasesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App