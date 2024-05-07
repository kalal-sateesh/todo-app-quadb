import "./App.css";
import AppHeader from "./components/AppHeader";
import AuthProvider from "./contexts/AuthContext";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <AppHeader />
        <PageRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
