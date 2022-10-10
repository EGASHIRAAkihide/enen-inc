import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="bg-slate-100 mt-4">
      <div>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 p-4">
        <div>
          <div className="mb-0 text-base">
            <DateComponent dateString={date} />
          </div>
          <h3 className="mb-4 text-2xl lg:text-3xl font-bold leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
}
