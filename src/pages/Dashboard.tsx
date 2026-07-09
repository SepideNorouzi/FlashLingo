import Header from "../layout/Header";
import Main from "../layout/Main";
import Projects from "../layout/Projects";

export default function Dashboard() {
  return (
    <>
      <main>
        <Header username="Sepide" reviewCards={12} totalCards={245} />
        <Main />
        <Projects />
      </main>
    </>
  );
}
