import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { useGetArticleBySlug } from "@/queries/article";
import { useEffect } from "react";

function Article() {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: article,
    isLoading,
    error,
    refetch,
  } = useGetArticleBySlug(slug as string);

  useEffect(() => {
    refetch();
  }, [router.query.slug]);

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
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200  dark:border-white/10 ">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {article.data.data.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {article.data.data.attributes.title}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {article.data.data.attributes.slug}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {article.data.data.attributes.content}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
