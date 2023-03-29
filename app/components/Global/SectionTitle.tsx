import Link from "next/link";

export type SectionTitleProps = {
  title: string;
  viewMoreUrl?: string;
};

export const SectionTitle = ({ title, viewMoreUrl }: SectionTitleProps) => (
  <div className="flex justify-between">
    <h1 className="latest-projects text-sm font-normal text-white uppercase">
      {title}
    </h1>

    {viewMoreUrl && (
      <Link href={viewMoreUrl}>
        <span className="text-sm font-normal text-yellow-500 hover:shadow-lg shadow-yellow-300 uppercase flex items-center space-x-2">
          <span className="text-yellow-500">View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FBBF24"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </Link>
    )}
  </div>
);
