import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserServices from "../../services/UserServices";
import { notify } from "../../utils/toastify";

const AddMember = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "Username must be at least 6 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      const AddMemberPromise = UserServices.AddMember(values);
      notify("promise", {
        promise: AddMemberPromise,
        messages: {
          pending: "Adding Member...",
          success: "Member added successfully!",
          error: "Error adding member!",
        },
      });

      AddMemberPromise.then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    },
  });

  return (
    <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
      <div className="w-full p-4 md:p-12 xl:p-16">
        <span className="mb-1.5 block font-medium text-secondary">
          Start for free
        </span>
        <h2 className="mb-9 text-2xl font-bold text-black md:text-[33px]">
          Add Member To Mess
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
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
            <label className="mb-2.5 block font-medium text-black">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500">{formik.errors.username}</div>
              ) : null}
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

          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="6+ Characters, 1 Capital letter"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
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
                      d="M16.5016 9.625H15.5844V7.97505C15.5844 5.60317 13.6281 3.67817 11.0016 3.67817C8.37499 3.67817 6.41874 5.60317 6.41874 7.97505V9.625H5.50156C4.47187 9.625 3.63593 10.4609 3.63593 11.4906V16.8156C3.63593 17.8453 4.47187 18.6813 5.50156 18.6813H16.5016C17.5312 18.6813 18.3672 17.8453 18.3672 16.8156V11.4906C18.3672 10.4609 17.5312 9.625 16.5016 9.625ZM7.96562 7.97505C7.96562 6.28942 9.23124 4.87505 11.0016 4.87505C12.7719 4.87505 14.0375 6.28942 14.0375 7.97505V9.625H7.96562V7.97505ZM17.1703 16.8156C17.1703 17.216 16.902 17.5188 16.5016 17.5188H5.50156C5.10124 17.5188 4.83281 17.2503 4.83281 16.8156V11.4906C4.83281 11.0903 5.10124 10.7875 5.50156 10.7875H16.5016C16.902 10.7875 17.1703 11.0903 17.1703 11.4906V16.8156Z"
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
              className="w-full rounded-lg bg-primary p-4 text-white transition hover:bg-opacity-90"
            >
              Add Member
            </button>
          </div>
        </form>

        <div className="relative mb-6 h-px bg-body-color">
          <span className="absolute left-1/2 top-1/2 bg-white px-4 text-xs text-textColor">
            or
          </span>
        </div>

        <button className="mb-6 flex w-full items-center justify-center rounded-lg border border-stroke p-4 transition hover:bg-gray-100">
          <span className="mr-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_95:967)">
                <path
                  d="M19.8052 10.1819C19.8052 9.52481 19.7536 8.92481 19.6386 8.31869H10.1992V11.8441H15.6481C15.4636 12.8187 14.8819 13.6941 14.0114 14.226V16.3306H16.5552C18.1847 14.7994 19.8052 12.2949 19.8052 10.1819Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.1992 19.3756C12.6908 19.3756 14.7936 18.515 16.3186 17.0587L14.0114 14.226C13.2341 14.7556 12.2575 15.0787 10.1992 15.0787C7.78256 15.0787 5.75357 13.5481 4.9675 11.3925H2.3186V13.5694C3.83409 16.735 6.85143 19.3756 10.1992 19.3756Z"
                  fill="#34A853"
                />
                <path
                  d="M4.96754 11.3925C4.50004 10.4175 4.23408 9.30005 4.23408 8.14248C4.23408 6.98491 4.50004 5.86748 4.96754 4.89248V2.71564H2.31863C1.36754 4.52491 0.800049 6.66177 0.800049 8.99934C0.800049 11.3368 1.36754 13.4736 2.31863 15.2825L4.96754 11.3925Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.1992 3.92052C12.1052 3.92052 13.5636 4.66505 14.5308 5.57363L16.3825 3.72191C14.7936 2.24134 12.6908 1.25 10.1992 1.25C6.85143 1.25 3.83409 3.89052 2.3186 7.05634L4.9675 10.9463C5.75357 8.79074 7.78256 7.26005 10.1992 7.26005C12.2761 7.26005 13.6225 8.27834 14.1571 9.33677L16.3308 7.01574C15.3368 4.66191 13.3368 3.92052 10.1992 3.92052Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_95:967">
                  <rect
                    width="19.2"
                    height="18.125"
                    fill="white"
                    transform="translate(0.800049 1.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          Add Member with Google
        </button>
        <p className="text-center">
          <span className="text-black">Have an account? </span>
          <Link to="/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AddMember;
