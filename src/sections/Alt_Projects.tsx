import React from "react";
import { Tabs } from "../components/tabs";

const Alt_Projects = () => {
  const tabs = [
    {
      title: "Horizon",
      value: "Horizon - Online Banking Platform",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <a href="https://github.com/Emre-Diricanli/simple_bank_project">
            Horizon - Online Banking Platform
          </a>
          <img
            src="../../public/assets/grid4.png"
            alt="horizon"
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      )
    },
    {
      title: "Store-It",
      value: "Store-It - Storage Management Solution",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <a href="https://github.com/Emre-Diricanli/StorageManagementSolution">
            Store-It - Storage Management Solution
          </a>
        </div>
      )
    },
    {
      title: "Project 3",
      value: "Project 3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Project 3 </p>
        </div>
      )
    },
    {
      title: "Project 4",
      value: "Project 4",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Project 4</p>
        </div>
      )
    },
    {
      title: "Project 5",
      value: "Project 5",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Project 5</p>
        </div>
      )
    }
  ];

  return (
    <section className="c-space my-20 mb-20" id="work">
      <p className="head-text">My Work</p>
      <div className="h-[10rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default Alt_Projects;
