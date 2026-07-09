import img from "../assets/images/img.jpg";
import StatCard from "../components/dashboard/StatCard";

function Main() {
  return (
    <section className="mt-6 grid grid-cols-2 gap-4">
      <StatCard
        title="Last Mistakes"
        count={12}
        image={img}
        to="/flashcards?mode=mistakes"
      />

      <StatCard
        title="Total Cards"
        count={245}
        image={img}
        to="/flashcards?mode=all"
      />
    </section>
  );
}

export default Main;
