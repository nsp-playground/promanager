"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Link from "next/link";
import { signin } from "../../lib/api/auth";

interface SigninFormValues {
  email: string;
  password: string;
}

const SigninForm: React.FC = () => {
  const router = useRouter();
  const initialValues: SigninFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: SigninFormValues, { resetForm }: any) => {
    console.log(values);
    // perform submit action, such as making an HTTP request to a server to log in the user
    await signin(values);
    resetForm();
    router.push("/home");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="your@email.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              placeholder="********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link
              href="/signup"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Create new account?
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
