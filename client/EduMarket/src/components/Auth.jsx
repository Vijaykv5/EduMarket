import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Validation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Auth = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const response = async function handleSubmit() {
    fetch("http://localhost:8080/hello", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        passowrd,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center my-8">
        <h1 className="font-semibold text-2xl">Sign Up</h1>
      </div>
      <form className="flex flex-col space-y-4 px-6">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <p className="font-light text-red-400 text-sm">{errors?.name}</p>
        ) : (
          <></>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="font-light text-red-400 text-sm">{errors?.email}</p>
        ) : (
          <></>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="font-light text-red-400 text-sm">{errors?.password}</p>
        ) : (
          <></>
        )}

        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="confirmpassword"
          name="confirmpassword"
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmpassword && touched.confirmpassword ? (
          <p className="font-light text-red-400 text-sm">
            {errors?.confirmpassword}
          </p>
        ) : (
          <></>
        )}

        <button
          type="submit"
          className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        >
          Button
        </button>
      </form>
    </div>
  );
};

export default Auth;
