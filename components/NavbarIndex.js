import Link from "next/link";
import { useRouter } from "next/router";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion"; // Importación de framer-motion
import Topbar from "./Topbar";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline"; // Importación de iconos

const Navbar = ({ links = [] }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [appsWebsOpen, setAppsWebsOpen] = useState(false);

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
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          {/* LOGO */}
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-[#4888CD] dark:text-gray-100">
              <Image
                src="/img-logo/logo-altiora--sinfondo-blanco.png"
                alt="Altiora"
                width="32"
                height="32"
                className="w-14 hidden dark:block"
              />
              <Image
                src="/img-logo/logo-altiora-sin-fondo-negro.png"
                alt="Altiora"
                width="32"
                height="32"
                className="w-14 block dark:hidden"
              />
              <span>Altiora</span>
            </span>
          </Link>
          {/* Toggle Button */}
          <button
            aria-label="Toggle Menu"
            className="px-2 py-1 ml-auto font-bold text-gray-500 rounded-md lg:hidden hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] focus:outline-none dark:text-gray-300"
            onClick={toggleMobileDropdown}
          >
            {mobileDropdownOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          {/* ITEMS NAVBAR MOBILE */}
          <AnimatePresence>
            {mobileDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="flex flex-wrap w-full my-5 lg:hidden"
              >
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
                        {subMenuOpen ? (
                          <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </div>
                      <AnimatePresence>
                        {subMenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg"
                          >
                            <Link href="/fabricaSoft">
                              <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                Fábrica de Software
                              </p>
                            </Link>
                            <div className="relative">
                              <div
                                onClick={() => setAppsWebsOpen(!appsWebsOpen)}
                                className="flex justify-between items-center px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none cursor-pointer"
                              >
                                Aplicaciones Webs
                                {appsWebsOpen ? (
                                  <ChevronUpIcon className="w-5 h-5" />
                                ) : (
                                  <ChevronDownIcon className="w-5 h-5" />
                                )}
                              </div>
                              <AnimatePresence>
                                {appsWebsOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg"
                                  >
                                    <Link href="/paquetes-todos">
                                      <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                        Todos los Paquetes
                                      </p>
                                    </Link>
                                    <Link href="/paquete1">
                                      <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                        Embudo
                                      </p>
                                    </Link>
                                    <Link href="/paquete2">
                                      <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                        Paquete Inicial
                                      </p>
                                    </Link>
                                    <Link href="/paquete3">
                                      <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                        Paquete Intermedio
                                      </p>
                                    </Link>
                                    <Link href="/paquete4">
                                      <p className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                        Paquete Full Empresarial
                                      </p>
                                    </Link>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navbar for desktop (from md and up) */}
        <div className="hidden lg:flex items-center lg:ml-4 lg:mr-8">
          <ul className="flex-1 flex items-center justify-end lg:space-x-4 list-none">
            {links.map((menu, index) =>
              menu.name === "Servicios" ? (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ScrollLink
                    activeClass="active"
                    to={menu.name}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <span className="px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                      Servicios
                    </span>
                  </ScrollLink>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link href="/fabricaSoft">
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
                            Aplicaciones Webs
                          </p>
                          <AnimatePresence>
                            {subMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
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
                                  <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-400 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                    Embudo
                                  </p>
                                </Link>
                                <Link href="/paquete2">
                                  <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-400 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                    Paquete Inicial
                                  </p>
                                </Link>
                                <Link href="/paquete3">
                                  <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-400 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                    Paquete Intermedio
                                  </p>
                                </Link>
                                <Link href="/paquete4">
                                  <p className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-400 hover:text-[#4888CD] dark:hover:text-[#4888CD] focus:text-white focus:bg-[#4888CD] dark:focus:bg-gray-800 focus:outline-none">
                                    Paquete Full
                                  </p>
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
