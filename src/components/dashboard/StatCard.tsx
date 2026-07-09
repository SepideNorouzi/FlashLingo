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
min-h-56
flex-col
items-center
justify-center
gap-5
px-6
py-6
rounded-[30px]
border
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl

md:h-56
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
        <div
          className="
    flex
    flex-col
    items-center
    text-center

    md:items-start
    md:text-left
  "
        >
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            {title}
          </h2>

          {count !== undefined && (
            <span
              className="
  mt-3
  inline-flex
  rounded-full
  px-3
  py-1
  text-xs
  font-semibold
"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              {count} cards
            </span>
          )}
        </div>

        <img
          src={image}
          alt={title}
          className="
      mt-4
      h-35
      w-35
      object-contain

      md:mt-0
      md:h-60
      md:w-60
    "
        />
      </article>
    </Link>
  );
}

export default StatCard;
