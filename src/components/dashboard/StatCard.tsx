import { Link } from "react-router";

interface StatCardProps {
  title: string;
  subtitle?: string;
  count?: number;
  image: string;
  to: string;
}

function StatCard({ title, count, image, to }: StatCardProps) {
  return (
    <Link
      to={to}
      className="block transition-transform duration-200 active:scale-95"
    >
      <article
        className="
          group
          flex
          h-full
          flex-col
          items-center
          justify-between
          gap-3
          px-4
          py-6
          rounded-[30px]
          border
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          md:flex-row
          md:justify-between
          md:px-8
        "
        style={{
          background:
            "linear-gradient(135deg,var(--surface),var(--surface-soft))",
          borderColor: "var(--border)",
          boxShadow: "0 15px 35px var(--shadow)",
        }}
      >
        {/* Text block */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2
            className="text-sm font-bold leading-tight whitespace-nowrap md:text-2xl md:whitespace-normal"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h2>

          {count !== undefined && (
            <span
              className="mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              {count} cards
            </span>
          )}
        </div>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full max-w-[80px] object-contain md:max-w-[200px]"
        />
      </article>
    </Link>
  );
}

export default StatCard;