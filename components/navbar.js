import Link from "next/link";
import { useRouter } from "next/router";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Topbar from "./Topbar";

const Navbar = ({ links = [] }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const handleSubMenuMouseEnter = () => {
    setSubMenuOpen(true);
  };

  const handleSubMenuMouseLeave = () => {
    setSubMenuOpen(false);
  };

  const router = useRouter();
  const isLandingPage = router.pathname === "/";

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="w-full fixed top-0 z-10 bg-[#ffffff] dark:bg-[#111827]">
      <Topbar />
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto py-2 md:py-4 lg:pl-0 lg:pr-0">
        {/* Navbar mobile */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                {/* LOGO */}
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-[#4888CD] dark:text-gray-100">
                    <Image
                      src="/img-logo/logo-altiora--sinfondo-blanco.png"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-14"
                    />
                    <span>Altiora</span>
                  </span>
                </Link>
                {/* Toggle Button */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto font-bold text-gray-500 rounded-md lg:hidden hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] focus:outline-none dark:text-gray-300"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                {/* ITEMS NAVBAR MOBILE */}
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  {links.map((item, index) =>
                    item.name === "Servicios" ? (
                      <div
                        key={index}
                        className="relative w-full px-4 py-2 text-gray-900 font-bold rounded-md dark:text-gray-100 hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none"
                      >
                        <div
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                          className="flex justify-between items-center"
                        >
                          Servicios
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              subMenuOpen ? "transform rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.707 15.293a1 1 0 0 1-1.414 0L12 10.414l-6.293 6.293a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0l7 7z"
                            />
                          </svg>
                        </div>
                        {subMenuOpen && (
                          <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg">
                            <Link href="/fabricaSoft">
                              <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Fábrica de Software
                              </p>
                            </Link>
                            <div className="relative">
                              <Link href="/sitiosWeb">
                                <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                  Aplicaciones Webs
                                </p>
                              </Link>
                              {/* <p
                                className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none"
                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                              >
                                Apps Webs
                              </p> */}
                              {mobileDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg">
                                  <Link href="/paquetes-todos">
                                    <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                      Todos los Paquetes
                                    </p>
                                  </Link>
                                  <Link href="/paquete1">
                                    <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                      Paquete 1
                                    </p>
                                  </Link>
                                  <Link href="/paquete2">
                                    <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                      Paquete 2
                                    </p>
                                  </Link>
                                  <Link href="/paquete3">
                                    <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                      Paquete 3
                                    </p>
                                  </Link>
                                  <Link href="/paquete4">
                                    <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                      Paquete 4
                                    </p>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <ScrollLink
                        key={index}
                        className="w-full px-4 py-2 text-gray-900 font-bold rounded-md dark:text-gray-100 hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none"
                        activeClass="active"
                        to={item.name}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        {item.name}
                      </ScrollLink>
                    )
                  )}
                  <div className="pt-3 pl-4">
                    <ThemeChanger />
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Navbar for desktop (from md and up) */}
        <div className="hidden lg:flex items-center lg:ml-4 lg:mr-8">
          <ul className="flex-1 flex items-center justify-end lg:space-x-4 list-none">
            {links.map((menu, index) =>
              menu.name === "Servicios" ? (
                // <li
                //   key={index}
                //   className="relative"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
                // >
                //   <span className="px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //     Servicios
                //   </span>
                //   {dropdownOpen && (
                //     <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                //       <Link href="/fabrica-de-software">
                //         <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //           Fábrica de Software
                //         </p>
                //       </Link>
                //       <div className="relative">
                //         <p
                //           className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none"
                //           onMouseEnter={toggleMobileDropdown}
                //           onMouseLeave={toggleMobileDropdown}
                //         >
                //           Apps Webs
                //         </p>
                //         {mobileDropdownOpen && (
                //           <div className="absolute left-full top-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                //             <Link href="/paquetes-todos">
                //               <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //                 Todos los Paquetes
                //               </p>
                //             </Link>
                //             <Link href="/paquete1">
                //               <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //                 Paquete 1
                //               </p>
                //             </Link>
                //             <Link href="/paquete2">
                //               <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //                 Paquete 2
                //               </p>
                //             </Link>
                //             <Link href="/paquete3">
                //               <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //                 Paquete 3
                //               </p>
                //             </Link>
                //             <Link href="/paquete4">
                //               <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                //                 Paquete 4
                //               </p>
                //             </Link>
                //           </div>
                //         )}
                //       </div>
                //     </div>
                //   )}
                // </li>
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                    Servicios
                  </span>
                  {dropdownOpen && (
                    <div
                      className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link href="/fabrica-de-software">
                        <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                          Fábrica de Software
                        </p>
                      </Link>
                      <div
                        className="relative"
                        onMouseEnter={() => setSubMenuOpen(true)}
                        onMouseLeave={() => setSubMenuOpen(false)}
                      >
                        <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                          Apps Webs
                        </p>
                        {subMenuOpen && (
                          <div
                            className="absolute left-full top-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg"
                            onMouseEnter={() => setSubMenuOpen(true)}
                            onMouseLeave={() => setSubMenuOpen(false)}
                          >
                            <Link href="/paquetes-todos">
                              <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Todos los Paquetes
                              </p>
                            </Link>
                            <Link href="/paquete1">
                              <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Paquete 1
                              </p>
                            </Link>
                            <Link href="/paquete2">
                              <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Paquete 2
                              </p>
                            </Link>
                            <Link href="/paquete3">
                              <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Paquete 3
                              </p>
                            </Link>
                            <Link href="/paquete4">
                              <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Paquete 4
                              </p>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <ScrollLink
                    className="px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none"
                    activeClass="active"
                    to={menu.name}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {menu.name}
                  </ScrollLink>
                </li>
              )
            )}
            <li className="pl-4">
              <ThemeChanger />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
