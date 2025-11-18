import './index.css';
import { useEffect, useContext } from 'react';
import AuthProvider, { AuthContext } from './contexts/AuthContext.js';
import { Toaster } from 'sonner';
import { Routes, Route } from 'react-router-dom';
import TaskProvider, { TaskContext } from './contexts/TaskContext.jsx';
import TodoProvider from './contexts/TodoContext.jsx';
import ToolsProvider from './contexts/ToolsContext.jsx';

// pagegs
import HomeDashbord from './pages/HomeDashbord.jsx';
import Navpar from './components/Navpar.jsx';
import HomeReports from './pages/HomeReports.jsx';
import HomeToDo from './pages/HomeToDo.jsx';
import HomeTools from './pages/HomeTools.jsx';
import Login from './pages/Login.js';
import LandingPage from './pages/LandingPage.jsx';
import LoadingPage from './pages/LoadingPage.js';
import Navegeshn from './components/Navegeshn.jsx';
import Profiele from './pages/Profiele.js';
import Settings from './pages/Settings.js';
function App() {
  return (
    <TodoProvider>
      <TaskProvider>
        <ToolsProvider>
          <AuthProvider>
            <MainApp />
          </AuthProvider>
        </ToolsProvider>
      </TaskProvider>
    </TodoProvider>
  );
}

function MainApp() {
  const { loading, setLoading } = useContext(TaskContext);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (loading) {
    return <LoadingPage />;
  }



  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Dashbord/*"
          element={
            <div className="w-full overflow-x-hidden h-full bg-neutral-100">
              <Navegeshn  />
              <div className="grid xl:grid-cols-[13%_87%] grid-cols-1 h-[calc(100vh)]">
                <main className="order-1 xl:order-2 mt-12 dark:bg-background-dark w-full">
                  <Routes>
                    <Route path="/" element={<HomeDashbord />} />
                    <Route path="Reports" element={<HomeReports />} />
                    <Route path="ToDo" element={<HomeToDo />} />
                    <Route path="Tools" element={<HomeTools />} />
                    <Route path="Settings" element={<Settings />} />
                    <Route path="Profiele" element={<Profiele />} />
                  </Routes>
                </main>
                <nav className="order-2 xl:order-1 w-full">
                  <Navpar className="xl:absolute" />
                </nav>
              </div>
            </div>
          }
        />
      </Routes>
      <Toaster closeButton richColors position="top-center" />
    </>
  );
}

export default App;
