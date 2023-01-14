"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import NewProjectButton from "./NewProjectButton";
import AddProjectModal from "./AddProjectModal";

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const AddProject = ({}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    // perform submit action, such as making an HTTP request to a server to log in the user
    // await signin(values);
    resetForm();
    // router.push("/home");
  };

  return (
    <>
      <div className="flex justify-center">
        <NewProjectButton handleClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <AddProjectModal
          handleSubmit={handleSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AddProject;
