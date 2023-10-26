import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Htext from "../../shared/Htext";
import Ben from "./Ben";
import ActionButton from "../../shared/ActionButton";
import BenefitGraphics from "../../Assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description: "What a great facility,lorem lorem and some random text",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse Classes",
    description:
      "What a great classes we have,lorem lorem and some random text",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro trainers",
    description: "We have expert trainers,lorem lorem and some random text",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      {/* HEader */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Ben
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img className="mx-auto " alt="benefit-page-graphic" src={BenefitGraphics} />

          {/* description */}
          <div>
            <div className="relative ">
              <div
                className="before:absolute before:-top-20 before:-left-20 before:z-[1] 
                        before:content-abstractwaves"
              >
                <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x:50 },
            visible: { opacity: 1, x: 0 },
          }} >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* z description */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}>
              <p className="my-5">
                A gym is a place where people go to train and exercise, but also
                to unwind, socialize, and recharge. Therefore, a good gym is a
                facility that promotes physical activity, provides a safe,
                functional, and comfortable workout environment, and creates a
                pleasant and enjoyable atmosphere for recreation and
                socialization
              </p>
              <p className="mb-5">
                A gym is a place where people go to train and exercise, but also
                to unwind, socialize, and recharge. Therefore, a good gym is a
                facility that promotes physical activity, provides a safe,
                functional, and comfortable workout environment, and creates a
                pleasant and enjoyable atmosphere for recreation and
                socialization
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16 z-[10]">
                <div className="before:absolute before:-bottom-20 before:-right-6 md:before:z-[1]
                before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
