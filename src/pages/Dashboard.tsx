import { useFlashcards } from "../hooks/useCards";
import { useAuthStore } from "../store/authStore";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Projects from "../layout/Projects";

export default function Dashboard() {
  const { totalCards, reviewCards, mistakeCards } = useFlashcards();

  const user = useAuthStore((state) => state.user);

  return (
    <>
      <>
        <Header
          username={user?.user_metadata?.username ?? "Sepide"}
          reviewCards={reviewCards}
          totalCards={totalCards}
        />

        <Main totalCards={totalCards} mistakeCards={mistakeCards} />

        <Projects />
      </>
    </>
  );
}
