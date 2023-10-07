import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32 ">
        {isAboveMediumScreens ? (
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
              <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-redish before:z-[-1]">
                <div className="relative z-0 ml-20 before:absolute before:-top-20 before:left-50 before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-caramel before:z-[-1]">
                  <div className="relative z-0 ml-20 before:absolute before:-top-30 before:-left-70 before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-redish before:z-[-1]">
                    {" "}
                    <div className="relative z-0 ml-20 mb-5 before:absolute before:-top-40 before:left-90 before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-redish before:z-[-1]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <img
              alt="profile"
              className="hover:filter hover:scale-110 hover:brightness-110
               transition duration-500 z-10 w-full max-w-[400px]
                md:max-w-[600px] "
              src="assets/profile1.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:scale-105 hover:brightness-110
             transition duration-500 z-10 
             w-full max-w-[400px] md:max-w-[600px] rounded-b-full rounded-e-full"
            src="assets/profile1.png"
          />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
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
          <motion.p
            className="text-6xl font-playfair z-10 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          >
            <span className="hover:underline transition duration-500">
              Hi, {""}
            </span>
            <span className="hover:underline transition duration-500">
              I am {""}
            </span>
            <span className="xs:relative  xs:font-semibold z-20  before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] hover:brightness-125 transition duration-500">
              Adrian.
            </span>
          </motion.p>

          <motion.p
            className="mt-10 mb-7 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
          >
            My name is Sufana Adrian, and I'm passionate about web developing.
            Go take a look over my work. Hope you will like it!
          </motion.p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-redish text-white rounded-sm py-3 px-7 font-semibold
              hover:bg-redish hover:text-white transition duration-500"
            onClick={() => setSelectedPage("projects")}
            href="#contact"
          >
            My work.
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-redish py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="text-bgcolor bg-caramel hover:text-redish transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
