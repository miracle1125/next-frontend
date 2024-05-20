import { FormData } from "@/components/SavingForm";
import { getApiClient } from "@/modules/axios";
import { useGetMutation } from "@/modules/mutation";

const saveForms = (data: FormData) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post("/api/hello", data);
};

export const useSaveForms = ({
  onSuccess,
  onError,
}: {
  onSuccess: Function;
  onError: Function;
}) => {
  return useGetMutation(saveForms, onSuccess, onError);
};
