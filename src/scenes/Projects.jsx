import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, appLink, githubLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-8 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <div className="pt-10">
          <a
            href={appLink}
            class="m-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Open the app
          </a>
          <a
            href={githubLink}
            class="m-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Source code
          </a>
        </div>
      </div>
      <img
        className="p-0.5  "
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-redish bg-white rounded-b-full rounded-e-full text-5xl">
              PRO
            </span>
            JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here, you'll find a showcase of my latest work and projects. I'm
          passionate about crafting creative solutions and pushing the
          boundaries of what's possible. Explore the projects below to see some
          of my recent accomplishments.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="m-0.5 flex justify-center text-center items-center p-10 bg-grey
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MADE WITH LOVE
          </div>
          <Project
            title="SA-Visuals"
            description="More than a simple gallery, one that defines and displays the hidden details and techniques of photographers."
            appLink="https://sa-visuals.onrender.com/"
            githubLink="https://github.com/sufanaadrian/Photogram"
          />
          {/* <Project title="Inwork 1" description="Coming soon" /> */}

          {/* ROW 2 */}
          {/* <Project title="Inwork 1" description="Coming soon" />
          <Project title="Inwork 1" description="Coming soon" />
          <Project title="Inwork 1" description="Coming soon" /> */}

          {/* ROW 3 */}
          {/* <Project title="Inwork 1" description="Coming soon" />
          <Project title="Inwork 1" description="Coming soon" /> */}
          <div
            className="m-0.5 flex justify-center text-center items-center p-10 bg-redish
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            DESIGNED WITH PASSION
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
