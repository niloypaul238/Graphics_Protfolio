import React from "react";
import {Saira ,Nunito} from 'next/font/google';

import Work from "../Work";
import AllProjects from "../AllProjects";
import MostProject from "@/Component/MostProject";

export const metadata = {
    title:'Projects'
}
const saira = Saira({
  subsets: ['latin'],
})

const Projects = () => {
    return (
        <section className="bg-[#f2fbf7]">
            <Work/>
            <div className="w-10/12 mx-auto px-4">

                <MostProject/>
            </div>


            <AllProjects/>
        </section>
    );
};

export default Projects;
