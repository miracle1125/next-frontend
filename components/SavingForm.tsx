import { useForm } from "react-hook-form";
import { useSaveForms } from "@/queries/home";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError, AxiosResponse } from "axios";

const FormSchema = z.object({
  firstName: z.string({
    required_error: "First name is required.",
    invalid_type_error: "First name must be a string",
  }),
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format"),
  ageGroup: z.enum(["adult", "child", "infant"]),
  address: z.optional(z.string()),
});

export type FormData = z.infer<typeof FormSchema>;

export default function SavingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { mutate: saveForms, status } = useSaveForms({
    onSuccess: (res: AxiosResponse) => {
      console.log(res);
    },
    onError: (err: AxiosError) => {
      console.error(err);
    },
  });

  const onSubmit = (data: FormData) => {
    saveForms(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            First Name
          </label>
          <input
            id="firstName"
            {...register("firstName")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="ageGroup"
            className="block text-gray-700 font-bold mb-2"
          >
            Age Group
          </label>
          <select
            id="ageGroup"
            {...register("ageGroup")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.ageGroup ? "border-red-500" : ""
            }`}
          >
            <option value="adult">Adult</option>
            <option value="child">Child</option>
            <option value="infant">Infant</option>
          </select>
          {errors.ageGroup && (
            <p className="text-red-500 text-xs italic">
              {errors.ageGroup.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <input
            id="address"
            {...register("address")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>

        {status === "loading" && (
          <p className="text-center mt-4 text-blue-500">Please wait...</p>
        )}
        {status === "success" && (
          <p className="text-center mt-4 text-green-500">
            Form submitted successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-center mt-4 text-red-500">
            There was an error submitting the form.
          </p>
        )}
      </form>
    </div>
  );
}
