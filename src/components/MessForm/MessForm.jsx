import DefaultInput from "../FormElement/InputFields/DefaultInput";

import FormButton from "../FormLayout/FormButton/FormButton";

import { useFormik } from "formik";
import * as Yup from "yup";

const MessForm = () => {
  const formik = useFormik({
    initialValues: {
      messName: "",
      number: "",
      address: "",
    },
    validationSchema: Yup.object({
      messName: Yup.string().required("Mess name is required"),
      number: Yup.string().required("Number is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
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
              label={"Mess Name *"}
              placeholder={"Enter the mess name"}
              type={"text"}
              isRequired={true}
              name="messName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.messName}
            />
            {formik.touched.messName && formik.errors.messName ? (
              <div className="text-red-500">{formik.errors.messName}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <DefaultInput
              label={"Number *"}
              placeholder={"Enter the number"}
              type={"text"}
              isRequired={true}
              name="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className="text-red-500">{formik.errors.number}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <DefaultInput
              label={"Address *"}
              placeholder={"Enter the address"}
              type={"text"}
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
            <FormButton name={"Submit"} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessForm;
