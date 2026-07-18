import Router from "./app/Router";
import Loading from "./components/Loading";
import { useAuthStore } from "./store/authStore";

function App() {
  const initialized = useAuthStore((state) => state.initialized);

  if (!initialized) {
    return <Loading />;
  }

  return (
    <>
      <Router />
    </>
  );
}

export default App;
