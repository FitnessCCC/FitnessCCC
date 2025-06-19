/* Main React App */
import { useAuth } from "./firebase/AuthContext";

export default function App() {
  const { user } = useAuth();

  if (user === undefined) {
    return <div className="p-6 text-center text-gray-500">Loading...</div>;
  }

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            ...
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
