import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-caramel">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Tell me, and I forget, teach me, and I may remember, involve me, and
            I learn. – Benjamin Franklin.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                // Modify the animation for text
                className="text-center md:text-start"
              >
                <div
                  className="relative mt-10 z-0 ml-80 before:absolute before:-top-10 
                before:-left-20 before:w-full before:max-w-[400px] md:before:max-w-[600px]
                 before:h-full before:border-2 before:border-redish before:z-[-1]"
                >
                  <div
                    className="relative z-0 ml-20 before:absolute before:-top-20
                   before:left-50 before:w-full before:max-w-[400px] md:before:max-w-[600px]
                    before:h-full before:border-2 before:border-caramel before:z-[-1]"
                  ></div>
                </div>
              </motion.div>
              <img
                alt="skills"
                className="z-10 w-96 h-auto"
                src="assets/skills-image2.png"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10 w- h-full"
              src="assets/skills-image2.png"
            />
          )}
        </div>
      </div>

      <div
        className={
          !isAboveLarge
            ? " md:flex md:justify-between mt-16 gap-40"
            : "ml-72 mr-72 md:flex md:justify-between mt-16 gap-40"
        }
      >
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Front End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-grey absolute right-0 top-0 z-[-1] rounded-b-full rounded-e-full" />
          </div>
          <p className="mt-5 text-center text-lg">
            HTML / CSS / Tailwind CSS / JavaScript / React
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Back End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-caramel absolute right-0 top-0 z-[-1] rounded-b-full rounded-e-full" />
          </div>
          <p className="mt-5 text-center text-lg">
            MERN Stack / MongoDB / Express.js / Node.js / Render
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Tools</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] rounded-b-full rounded-e-full" />
          </div>
          <p className="mt-5 text-center text-lg">
            VS Code / Git & Github / MUI / NPM
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
