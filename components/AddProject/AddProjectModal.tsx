"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const AddProjectModal = ({ handleSubmit, closeModal }: any) => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="modal-content p-4 bg-white rounded-lg space-y-2">
            <div className="modal-header">
              <h2 className="text-lg font-medium">Add Project</h2>
            </div>
            <div className="modal-body">
              <Field
                className="bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="modal-footer space-x-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Create
              </button>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProjectModal;
