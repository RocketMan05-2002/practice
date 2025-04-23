import React from "react";
import { useForm } from "react-hook-form";

const UseFormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: "Email is Required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: "Password is Required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Please confirm password",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            {...register("age", { required: "Age is Required" })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            {...register("gender", { required: "Please select a gender" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseFormTest;
