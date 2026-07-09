import StatCard from "../components/dashboard/StatCard";
import files from "../assets/images/files.svg";
import book from "../assets/images/book.svg";

function Main() {
  return (
    <section className="mt-7 grid grid-cols-2 gap-5">
      <StatCard
        title="Last Mistakes"
        count={12}
        image={book}
        to="/flashcards?mode=mistakes"
      />

      <StatCard
        title="Total Cards"
        count={245}
        image={files}
        to="/flashcards?mode=all"
      />
    </section>
  );
}

export default Main;
