import { Disclosure } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";

const ButtonTop = () => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            {/* Subir  */}
            <ScrollLink
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Disclosure.Button
                // className={`fixed z-40 flex items-center justify-center transition duration-300 rounded-full hover:blur-xl  right-5 bottom-[6.5rem] w-14 h-14  focus:outline-none text-white bg-black  dark:bg-white dark:text-black`}
                className={`fixed z-40 flex items-center justify-center transition duration-300 rounded-full right-5 bottom-[6.5rem] w-14 h-14 focus:outline-none text-white bg-[#0077B6] dark:text-white`}
                style={{
                  filter: open ? "blur(0)" : "none",
                  transition: "filter 0.3s",
                }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <svg
                    className="w-6 h-6 font-bold filter-none"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    ></path>
                  </svg>
                </div>
                <div className="absolute w-full h-full rounded-full bg-[#0077B6] opacity-10 dark:bg-white transition hover:blur-xl"></div>
              </Disclosure.Button>
            </ScrollLink>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default ButtonTop;
