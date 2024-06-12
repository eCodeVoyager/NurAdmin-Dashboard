import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DefaultInput from "../../components/FormElement/InputFields/DefaultInput";
import FormButton from "../../components/FormLayout/FormButton/FormButton";

import { useNavigate } from "react-router-dom";

import MessServices from "../../services/MessService";
import { useAuth } from "../../context/AuthContext";
import { notify } from "../../utils/toastify";

const MessForm = () => {
  const { setShouldNavigate } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Mess name is required"),
      phone: Yup.string().required("phone is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      const createMessPromise = MessServices.createMess(values);

      notify("promise", {
        promise: createMessPromise,
        messages: {
          pending: "Creating mess...",
          success: "Mess created successfully!",
          error: "Error creating mess!",
        },
      });

      createMessPromise
        .then((response) => {
          console.log(response.data);
          setShouldNavigate(false);
          navigate("/");
        })
        .catch((error) => {
          setShouldNavigate(true);
          console.log(error);
        });
    },
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="border-b border-stroke px-6 py-4">
        <h3 className="font-medium text-black">Mess Form</h3>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-6">
          <div className="mb-4">
            <DefaultInput
              label="Mess Name *"
              placeholder="Enter the mess name"
              type="text"
              isRequired={true}
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <DefaultInput
              label="phone *"
              placeholder="Enter the phone"
              type="text"
              isRequired={true}
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <DefaultInput
              label="Address *"
              placeholder="Enter the address"
              type="text"
              isRequired={true}
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500">{formik.errors.address}</div>
            ) : null}
          </div>

          <div className="mb-6">
            <FormButton name="Submit" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessForm;
