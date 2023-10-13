import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-3xl">
            LE'TS HAVE A QUICK
            <span className="text-redish ml-3 p-5 float-right bg-white rounded-b-full rounded-l-full text-3xl">
              TALK
            </span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact-image.png" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/f2bee7670e771196454449c78cfe642d"
            method="POST"
          >
            <input
              className="rounded-xl w-full bg-caramel font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-redish mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="rounded-xl w-full bg-caramel font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-redish mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <input
              className="rounded-xl w-full bg-caramel font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="PHONE"
              {...register("phone", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.phone && (
              <p className="text-redish mt-1">
                {errors.phone.type === "required" && "This field is required."}
                {errors.phone.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="rounded-xl w-full bg-caramel font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="LOCATION"
              {...register("location", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.location && (
              <p className="text-redish mt-1">
                {errors.location.type === "required" &&
                  "This field is required."}
                {errors.location.type === "maxLength" &&
                  "Max length is 100 char."}
              </p>
            )}
            <textarea
              className="rounded-xl w-full bg-caramel font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <p className="text-redish mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
              </p>
            )}

            <button
              className="rounded-xl p-5 bg-yellow font-semibold text-opaque-black mt-5 hover:bg-redish hover:text-white transition duration-500"
              type="submit"
            >
              SEND IT LIKE IT'S HOT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
