import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Formik = () => {
  // ✅ Define validation schema
  const validationSchema = yup.object({
    username: yup.string().min(3, "Username too short").required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password too short").required("Password is required"),
  });

  // ✅ Setup Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema, // attach schema here
    onSubmit: (values) => {
      console.log("Form submitted ✅", values);
    },
  });

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Form</h1>

      {/* ✅ Add onSubmit here, not onClick */}
      <form onSubmit={formik.handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter your username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username} // controlled
          />
          {formik.touched.username && formik.errors.username ? (
            <small className="text-danger">{formik.errors.username}</small>
          ) : null}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="text-danger">{formik.errors.email}</small>
          ) : null}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="text-danger">{formik.errors.password}</small>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formik;
