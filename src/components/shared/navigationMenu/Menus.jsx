import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "@/utils/fackData/menuList";
import getIcon from "@/utils/getIcon";

const Menus = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [activeParent, setActiveParent] = useState("");
    const [activeChild, setActiveChild] = useState("");
    const pathName = useLocation().pathname;

    const handleMainMenu = (name, hasDropdown) => {
        if (!hasDropdown) return;
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleDropdownMenu = (e, name) => {
        e.stopPropagation();
        setOpenSubDropdown(openSubDropdown === name ? null : name);
    };

    useEffect(() => {
        if (pathName !== "/") {
            const x = pathName.split("/");
            setActiveParent(x[1]);
            setActiveChild(x[2]);
            setOpenDropdown(x[1]);
            setOpenSubDropdown(x[2]);
        }
    }, [pathName]);

    return (
        <>
            {menuList.map(({ dropdownMenu, id, name, path, icon, isCaption }) => {
                // Handle caption items
                if (isCaption) {
                    return (
                        <li key={id} className="nxl-item nxl-caption">
                            <label>{name}</label>
                        </li>
                    );
                }

                const hasDropdown = dropdownMenu?.length > 0;

                return (
                    <li
                        key={id}
                        className={`nxl-item ${hasDropdown ? "nxl-hasmenu" : ""} ${
                            activeParent === name ? "active nxl-trigger" : ""
                        }`}
                        onClick={() => handleMainMenu(name, hasDropdown)}
                    >
                        <Link to={hasDropdown ? "#" : path} className="nxl-link text-capitalize">
                            {/* <span className="nxl-micon">{getIcon(icon)}</span> */}
                           


                            <span className="nxl-micon">
  {typeof icon === "function" ? (
    React.createElement(icon, { size: 18 })
  ) : (
    getIcon(icon)
  )}
</span>



                            <span className="nxl-mtext" style={{ paddingLeft: "2.5px" }}>
                                {name}
                            </span>

                            {/* ✅ Arrow only if dropdown exists */}
                            {hasDropdown && (
                                <span className="nxl-arrow fs-16">
                                    <FiChevronRight />
                                </span>
                            )}
                        </Link>

                        {/* ✅ DROPDOWN MENU */}
                        {hasDropdown && (
                            <ul
                                className={`nxl-submenu ${
                                    openDropdown === name ? "nxl-menu-visible" : "nxl-menu-hidden"
                                }`}
                            >
                                {dropdownMenu.map(({ id, name, path, subdropdownMenu }) => {
                                    const hasSubDropdown = Array.isArray(subdropdownMenu) && subdropdownMenu.length > 0;

                                    return (
                                        <Fragment key={id}>
                                            {hasSubDropdown ? (
                                                <li
                                                    className={`nxl-item nxl-hasmenu ${
                                                        activeChild === name ? "active" : ""
                                                    }`}
                                                    onClick={(e) => handleDropdownMenu(e, name)}
                                                >
                                                    <Link
                                                        to="#"
                                                        className="nxl-link text-capitalize"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <span className="nxl-mtext">{name}</span>
                                                        <span className="nxl-arrow">
                                                            <FiChevronRight />
                                                        </span>
                                                    </Link>

                                                    <ul
                                                        className={`nxl-submenu ${
                                                            openSubDropdown === name
                                                                ? "nxl-menu-visible"
                                                                : "nxl-menu-hidden"
                                                        }`}
                                                    >
                                                        {subdropdownMenu.map(({ id, name, path }) => (
                                                            <li
                                                                key={id}
                                                                className={`nxl-item ${
                                                                    pathName === path ? "active" : ""
                                                                }`}
                                                            >
                                                                <Link
                                                                    className="nxl-link text-capitalize"
                                                                    to={path}
                                                                >
                                                                    {name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ) : (
                                                <li
                                                    className={`nxl-item ${
                                                        pathName === path ? "active" : ""
                                                    }`}
                                                >
                                                    <Link className="nxl-link" to={path}>
                                                        {name}
                                                    </Link>
                                                </li>
                                            )}
                                        </Fragment>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </>
    );
};

export default Menus;
