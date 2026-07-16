import Router from "./app/Router";
import { useAuthStore } from "./store/authStore";

function App() {
  const initialized = useAuthStore((state) => state.initialized);

  if (!initialized) {
    return <div>Loading...</div>; // or a spinner component
  }

  return (
    <>
      <Router />
    </>
  );
}

export default App;
