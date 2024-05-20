import { useGetAllArticles } from "@/queries/article";
import Link from "next/link";

export default function Articles() {
  const { data: allArticles, isLoading, error } = useGetAllArticles();

  if (isLoading)
    return (
      <div className="flex flex-col container mx-auto mt-20">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            Please wait...
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col container mx-auto mt-20">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            Failed to fetch the data...
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col container mx-auto mt-20">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <h2 className="text-center text-white font-bold text-4xl">
            Articles
          </h2>
          <div className="overflow-hidden mt-10">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Slug
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Content
                  </th>
                  <th scope="col" className="px-6 py-4">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {allArticles.data.data.map((article) => (
                  <tr
                    className="border-b border-neutral-200  dark:border-white/10 "
                    key={article.id}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {article.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {article.attributes.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {article.attributes.slug}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {article.attributes.content}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Link
                        href="/article/[slug]"
                        as={`/article/${article.attributes.slug}`}
                        className="underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
