import { Link } from "react-router";

interface StatCardProps {
  title: string;
  subtitle?: string;
  count?: number;
  image: string;
  to: string;
  bgColor?: string;
}

function StatCard({
  title,
  subtitle,
  count,
  image,
  to,
  bgColor = "#FFF8F1",
}: StatCardProps) {
  return (
    <Link
      to={to}
      className="block transition-transform duration-200 active:scale-95"
    >
      <article
        className="
    flex
    h-56
    flex-col
    items-center
    justify-center
    gap-4
    rounded-3xl
    p-5
    text-center
    shadow-sm

    md:flex-row
    md:justify-between
    md:text-left
  "
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{title}</h2>

          {count !== undefined && (
            <p className="mt-1 text-sm text-gray-500">{count} cards</p>
          )}

          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>

        <img
          src={image}
          alt={title}
          className="
      mt-4
      h-28
      w-28
      object-contain

      md:mt-0
      md:h-32
      md:w-32
    "
        />
      </article>
    </Link>
  );
}

export default StatCard;
