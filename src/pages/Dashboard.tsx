import { useFlashcards } from "../hooks/useCards";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Projects from "../layout/Projects";

export default function Dashboard() {
  const { totalCards, reviewCards, mistakeCards } = useFlashcards();

  // const username = auth.user.name;

  return (
    <>
      <>
        <Header
            username="Sepide"
            reviewCards={reviewCards}
            totalCards={totalCards}
        />

        <Main
            totalCards={totalCards}
            mistakeCards={mistakeCards}
        />

        <Projects />
    </>
    </>
  );
}
