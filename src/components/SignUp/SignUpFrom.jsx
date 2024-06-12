import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserServices from "../../services/UserServices";
import { notify } from "../../utils/toastify";
import { useEffect } from "react";

const SignUpFrom = () => {
  // Use the useNavigate hook to navigate to the sign-in page
  const navigate = useNavigate();
  // Define initial values for Formik
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Define validation schema for Formik using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    // Call the API to create a new user
    UserServices.createUser(values)
      .then((response) => {
        if (response.statusCode === 201) {
          // Redirect to the sign-in page
          navigate("/sign-in");
          notify("success", "Account created successfully");
        }
      })
      .catch((error) => {
        notify("error", "Error creating account");
        console.error(error);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  return (
    <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
      <div className="w-full p-4 md:p-12 xl:p-16">
        <span className="mb-1.5 block font-medium text-secondary">
          Start for free
        </span>
        <h2 className="mb-9 text-2xl font-bold text-black md:text-[32px]">
          Sign Up to TailAdmin
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="mb-2.5 block font-medium text-black"
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="relative">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                          fill=""
                        ></path>
                        <path
                          d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="mb-2.5 block font-medium text-black"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="mb-2.5 block font-medium text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.8757 9.79739H16.454V7.41489C16.454 3.94364 13.5115 1.00114 10.0403 1.00114C6.56905 1.00114 3.62655 3.94364 3.62655 7.41489V9.79739H2.2048C1.42605 9.79739 0.790527 10.4329 0.790527 11.2116V19.4736C0.790527 20.2524 1.42605 20.8879 2.2048 20.8879H17.8757C18.6545 20.8879 19.29 20.2524 19.29 19.4736V11.2116C19.29 10.4329 18.6545 9.79739 17.8757 9.79739ZM5.1978 7.41489C5.1978 4.80489 7.4303 2.57239 10.0403 2.57239C12.6503 2.57239 14.8828 4.80489 14.8828 7.41489V9.79739H5.1978V7.41489ZM17.8757 19.3161H2.2048C2.12655 19.3161 2.05553 19.2816 2.00894 19.2294C1.96318 19.178 1.9278 19.1077 1.9278 19.0299V11.2116C1.9278 11.1334 1.96318 11.0631 2.00894 11.0117C2.05553 10.9595 2.12655 10.925 2.2048 10.925H17.8757C17.9539 10.925 18.0249 10.9595 18.0715 11.0117C18.1173 11.0631 18.1527 11.1334 18.1527 11.2116V19.0299C18.1527 19.1077 18.1173 19.178 18.0715 19.2294C18.0249 19.2816 17.9539 19.3161 17.8757 19.3161Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="mb-2.5 block font-medium text-black"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.8757 9.79739H16.454V7.41489C16.454 3.94364 13.5115 1.00114 10.0403 1.00114C6.56905 1.00114 3.62655 3.94364 3.62655 7.41489V9.79739H2.2048C1.42605 9.79739 0.790527 10.4329 0.790527 11.2116V19.4736C0.790527 20.2524 1.42605 20.8879 2.2048 20.8879H17.8757C18.6545 20.8879 19.29 20.2524 19.29 19.4736V11.2116C19.29 10.4329 18.6545 9.79739 17.8757 9.79739ZM5.1978 7.41489C5.1978 4.80489 7.4303 2.57239 10.0403 2.57239C12.6503 2.57239 14.8828 4.80489 14.8828 7.41489V9.79739H5.1978V7.41489ZM17.8757 19.3161H2.2048C2.12655 19.3161 2.05553 19.2816 2.00894 19.2294C1.96318 19.178 1.9278 19.1077 1.9278 19.0299V11.2116C1.9278 11.1334 1.96318 11.0631 2.00894 11.0117C2.05553 10.9595 2.12655 10.925 2.2048 10.925H17.8757C17.9539 10.925 18.0249 10.9595 18.0715 11.0117C18.1173 11.0631 18.1527 11.1334 18.1527 11.2116V19.0299C18.1527 19.1077 18.1173 19.178 18.0715 19.2294C18.0249 19.2816 17.9539 19.3161 17.8757 19.3161Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary p-4 text-white transition hover:bg-opacity-90"
                >
                  {isSubmitting ? "Submitting..." : "Create Account"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="text-center text-base font-medium text-body-color">
          Already a member?{" "}
          <Link to="/sign-in" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpFrom;
