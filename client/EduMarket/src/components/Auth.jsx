import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Validation";

const initialValues =  {
  name:"",
  email: "",
  password: "",
  confirmpassword: "",
};
const Auth = () => {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} =useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values,action) => {
      console.log(values);
    action.resetForm();

    },
  });
  // console.log("hey",errors);
  return (
    <div>
      <div className="flex text-center justify-center my-8">
        <h1 className="font-semibold text-2xl">Sign Up</h1>
      </div>
      <div className=" ">
      <form className="flex flex-col px-6 space-y-2 " onSubmit={handleSubmit}>
      <label for="fname">Name</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="fname"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name?<p className="font-light text-red-400 font-sm">{errors?.name}</p>:<></>}
        <label for="fname">Email</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="fname"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email?<p className="font-light text-red-400 font-sm">{errors?.email}</p>:<></>}
        <label for="lname">Password</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="lname"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password?<p className="font-light text-red-400 font-sm">{errors?.password}</p>:<></>}

        <label for="lname">ConfirmPassword:</label>
        <input
          type="text"
          className="p-2 border border-gray-200"
          id="lname"
          name="confirmpassword"
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmpassword && touched.confirmpassword?<p className="font-light text-red-400 font-sm">{errors?.confirmpassword}</p>:<></>}

        <button
  class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
      </form>

      </div>
    </div>
  );
};

export default Auth;
