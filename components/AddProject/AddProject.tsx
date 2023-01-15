"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import NewProjectButton from "./NewProjectButton";
import AddProjectModal from "./AddProjectModal";
import { createProject } from "../../lib/api/project";
import { useRouter } from "next/navigation";

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const AddProject = ({}: any) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    // perform submit action, such as making an HTTP request to a server to log in the user
    await createProject(values);
    resetForm();
    setIsModalOpen(false);
    // router.push("/home");
    router.refresh();
  };

  return (
    <>
      <div className="flex">
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
