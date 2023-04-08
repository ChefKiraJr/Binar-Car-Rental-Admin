import { useRef } from "react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const { pathname } = useLocation();
    let activeClassName =
        "space-x-3 hover:bg-alternative bg-[#006DFF] text-white p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-100";

    let inActiveClassName =
        "flex items-center p-2 space-x-3 rounded-md bg-primary text-white gap-6 hover:bg-[#006DFF] hover:text-white";

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid
        ? {
              open: {
                  x: 0,
                  width: "16rem",
                  transition: {
                      damping: 40,
                  },
              },
              closed: {
                  x: -250,
                  width: 0,
                  transition: {
                      damping: 40,
                      delay: 0.15,
                  },
              },
          }
        : {
              open: {
                  width: "16rem",
                  transition: {
                      damping: 40,
                  },
              },
              closed: {
                  width: "4rem",
                  transition: {
                      damping: 40,
                  },
              },
          };

    return (
        <div>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
                    open ? "block" : "hidden"
                } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
            >
                <div className="flex flex-col bg-[#0D28A6] h-full">
                    <div className="flex items-center justify-between flex-shrink-0 p-2 mr-16 bg-[#0D28A6]">
                        <span className="p-2 text-2xl font-bold leading-8 tracking-wider whitespace-nowrap">
                            <div className="flex"></div>
                        </span>
                    </div>
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                        <li>
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : inActiveClassName
                                }
                            >
                                <AiOutlineHome
                                    size={23}
                                    className="min-w-max"
                                />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/list"}
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : inActiveClassName
                                }
                            >
                                <ImFilesEmpty size={23} className="min-w-max" />
                                Cars
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                  x: 0,
                                  y: 0,
                                  rotate: 0,
                              }
                            : {
                                  x: -10,
                                  y: -200,
                                  rotate: 180,
                              }
                    }
                    transition={{ duration: 0 }}
                    className="absolute w-fit h-fit md:block z-150 hidden right-1 bottom-20 cursor-pointer bg-primary p-3 rounded-full text-white"
                >
                    <IoIosArrowBack size={25} />
                </motion.div>
            </motion.div>
            <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    );
};


export default Sidebar;
