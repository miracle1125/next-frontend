import { getStrapiApiClient } from "@/modules/axios";
import { IArticle } from "@/types/article";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

const getAllArticles = () => {
  return getStrapiApiClient({
    "Content-Type": "application/json",
  }).get("/articles");
};

export const useGetAllArticles = () => {
  return useQuery<AxiosResponse<{ data: IArticle[] }>, AxiosError>(
    ["getAllArticles"],
    () => {
      return getAllArticles();
    }
  );
};

const getArticleBySlug = (slug: string) => {
  return getStrapiApiClient({
    "Content-Type": "application/json",
  }).get(`/articles/${slug}`);
};

export const useGetArticleBySlug = (slug: string) => {
  return useQuery<AxiosResponse<{ data: IArticle }>, AxiosError>(
    ["getArticleBySlug"],
    () => {
      return getArticleBySlug(slug);
    }
  );
};
