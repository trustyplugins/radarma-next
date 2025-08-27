"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { all_routes } from "../core/data/routes/all_routes";
import ImageWithBasePath from "../core/img/ImageWithBasePath";
import { set_header_data, set_toggleSidebar_data } from "../core/data/redux/action";
import * as Icon from "react-feather";
import { AppState, Header } from "../core/models/interface";
import { header } from "../core/data/json/header";

// 👉 Link adapter so you can keep using "to" for now
const L = (props: any) => {
  const { to, href, ...rest } = props;
  return <Link href={to ?? href ?? "#"} {...rest} />;
};

type Props = { type: number };

const HomeHeader: React.FC<Props> = ({ type }) => {
  const routes = all_routes;
  const pathname = usePathname();
  const dispatch = useDispatch();

  const header_data = header; // using your JSON for now
  const toggle_data = useSelector((state: AppState) => state.toggleSidebar);

  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [close, setClose] = useState(true);
  const [imageUrl, setImageUrl] = useState({ logo: "", logoSmall: "", logoSvg: "" });

  const toogle = () => dispatch(set_toggleSidebar_data(!toggle_data));

  const activeRouterPath = (routesArray: any[]) => {
    if (!Array.isArray(routesArray)) return false;
    const list = routesArray.map((x: any) => x.routes);
    return list.includes(pathname);
  };

  const handleScroll = () => setScrollYPosition(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // submenu activation logic using "pathname" instead of location.pathname
    const subs = document.querySelectorAll(".has-submenu");
    subs.forEach((submenu) => {
      submenu.classList.remove("active");
      const liActive = submenu.querySelector("li.active");
      const singleDemoActive = submenu.querySelector(".single-demo.active");
      if (liActive || singleDemoActive) submenu.classList.add("active");
    });
  }, [pathname]);

  useEffect(() => {
    if (type === 1 || type === 4 || type === 10) {
      setImageUrl({
        logo: "assets/img/logo.png",
        logoSmall: "assets/img/logo-small.png",
        logoSvg: "assets/img/logo.svg",
      });
    } else {
      setImageUrl({
        logo: "assets/img/logo-02.svg",
        logoSmall: "assets/img/logo-icon.png",
        logoSvg: "assets/img/logo-02.svg",
      });
    }
  }, [type]);
  const renderButtons = (pathType: number) => {
    switch (pathType) {
      case 1:
        return (
        <ul className="nav header-navbar-rht">
            <li className="nav-item pe-1">
              <Link className="nav-link btn btn-light" href="#" data-bs-toggle="modal" data-bs-target="#login-modal"><i className="ti ti-lock me-2"></i>Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-linear-primary" href="#" data-bs-toggle="modal" data-bs-target="#register-modal"><i className="ti ti-user-filled me-2"></i>Join Us</Link>
            </li>
				</ul>
        );
        break;
      case 2:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link
                className="nav-link header-reg"
                href={routes.userSignup}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link header-login"
                href={routes.login}
              >
              <i className="fa-regular fa-circle-user me-2"></i>Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 3:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.login}>
              <i className="feather icon-user" /> Register / Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 4:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.userSignup}>
               <i className="feather icon-calendar me-2"/>
                APPOINTMENT
              </Link>
            </li>
            <li className="nav-item">
              <div className="cta-btn">
                <Link className="btn" href={routes.userSignup}>
                 <i className="feather icon-users me-2"/>
                  REGISTER /
                </Link>
                <Link className="btn ms-1" href={routes.login}>
                  LOGIN
                </Link>
              </div>
            </li>
          </ul>
        );
        break;
      case 5:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.login}>
                <i className="feather icon-users me-2" />
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.userSignup}>
                <i className="feather icon-users me-2" />
                Register
              </Link>
            </li>
          </ul>
        );
        break;
      case 6:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-reg" href={routes.userSignup}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.login}>
              <i className="feather icon-user me-2" />
                Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 7:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-button-six" href={routes.userSignup}>
                <i className="feather icon-user-plus me-2" />
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-button-six" href={routes.login}>
                <i className="feather icon-log-in me-2" />
                Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 8:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.userSignup}>
                <i className="feather icon-user me-2" />
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.login}>
                <i className="feather icon-log-in me-2" />
                Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 9:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.login}>
                <i className="feather icon-log-in me-2" />
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" href={routes.userSignup}>
                <i className="feather icon-user-plus me-2" />
                Register
              </Link>
            </li>
          </ul>
        );
        break;
      case 10:
        return (
          <ul className="nav header-navbar-rht header-navbar-rht-nine ">
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Become A Professional
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Become A User
              </Link>
            </li>
          </ul>
        );
        break;
      case 11:
        return (
          <div className="header-btn d-flex align-items-center">
                <div className="provider-head-links">
                  <Link
                    href="#"
                    className="d-flex align-items-center justify-content-center me-2 notify-link"
                    data-bs-toggle="dropdown"
                  >
                    <i className="feather icon-bell" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
                    <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                      <h6 className="notification-title">
                        Notifications <span className="fs-18 text-gray"> (2)</span>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link href="#" className="text-primary fs-15 me-3 lh-1">
                          Mark all as read
                        </Link>
                        <div className="dropdown">
                          <Link
                            href="#"
                            className="bg-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            <i className="ti ti-calendar-due me-1" />
                            Today
                          </Link>
                          <ul className="dropdown-menu mt-2 p-3">
                            <li>
                              <Link
                                href="#"
                                className="dropdown-item rounded-1"
                              >
                                This Week
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="dropdown-item rounded-1"
                              >
                                Last Week
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="dropdown-item rounded-1"
                              >
                                Last Week
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="noti-content">
                      <div className="d-flex flex-column">
                        <div className="border-bottom mb-3 pb-3">
                          <Link href={routes.commonNotification}>
                            <div className="d-flex">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-52.jpg"
                                  alt="Profile"
                                  className="rounded-circle"
                                />
                              </span>
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center">
                                  <p className="mb-1 w-100">
                                    <span className="text-dark fw-semibold">
                                      Stephan Peralt
                                    </span>{" "}
                                    rescheduled the service to 14/01/2024.{" "}
                                  </p>
                                  <span className="d-flex justify-content-end ">
                                    {" "}
                                    <i className="ti ti-point-filled text-primary" />
                                  </span>
                                </div>
                                <span>Just Now</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="border-bottom mb-3 pb-3">
                          <Link href={routes.commonNotification} className="pb-0">
                            <div className="d-flex">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-36.jpg"
                                  alt="Profile"
                                  className="rounded-circle"
                                />
                              </span>
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center">
                                  <p className="mb-1 w-100">
                                    <span className="text-dark fw-semibold">
                                      Harvey Smith
                                    </span>{" "}
                                    has requested your service.
                                  </p>
                                  <span className="d-flex justify-content-end ">
                                    {" "}
                                    <i className="ti ti-point-filled text-primary" />
                                  </span>
                                </div>
                                <span>5 mins ago</span>
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                  <span className="btn btn-light btn-sm me-2">Deny</span>
                                  <span className="btn btn-dark btn-sm">Accept</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="border-bottom mb-3 pb-3">
                          <Link href={routes.commonNotification}>
                            <div className="d-flex">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-02.jpg"
                                  alt="Profile"
                                  className="rounded-circle"
                                />
                              </span>
                              <div className="flex-grow-1">
                                <p className="mb-1">
                                  <span className="text-dark fw-semibold">
                                    {" "}
                                    Anthony Lewis
                                  </span>{" "}
                                  has left feedback for your recent service{" "}
                                </p>
                                <span>10 mins ago</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="border-0 mb-3 pb-0">
                          <Link href={routes.commonNotification}>
                            <div className="d-flex">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-22.jpg"
                                  alt="Profile"
                                  className="rounded-circle"
                                />
                              </span>
                              <div className="flex-grow-1">
                                <p className="mb-1">
                                  <span className="text-dark fw-semibold">
                                    Brian Villaloboshas{" "}
                                  </span>{" "}
                                  cancelled the service scheduled for 14/01/2024.
                                </p>
                                <span>15 mins ago</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex p-0 notification-footer-btn">
                      <Link href="#" className="btn btn-light rounded  me-2">
                        Cancel
                      </Link>
                      <Link href="#" className="btn btn-dark rounded ">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="provider-head-links">
                  <Link
                    href={routes.customerChat}
                    className="d-flex align-items-center justify-content-center me-2"
                  >
                    <i className="feather icon-mail" />
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className=""
                  >
                    <div className="booking-user d-flex align-items-center">
                      <span className="user-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="user" />
                      </span>
                    </div>
                  </Link>
                  <ul className="dropdown-menu p-2">
                    <li>
                      <Link
                        className="dropdown-item d-flex align-items-center"
                        href={routes.login}
                      >
                        <i className="ti ti-logout me-1" />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header__hamburger d-lg-none my-auto">
                  <div className="sidebar-menu">
                    <i className="fa-solid fa-bars" />
                  </div>
                </div>
              </div>
        );
        break;

        break;
      default:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link
                className="nav-link header-reg"
                href="/authentication/choose-signup"
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link header-login"
                href="/authentication/login"
              >
                <i className="fa-regular fa-circle-user me-2"></i>Login
              </Link>
            </li>
          </ul>
        );
        break;
    }
  };
  // ... keep your renderButtons as-is, but it will use <L href="..."> instead of <Link href="...">

  return (
    <>
      <div className={`top-bar ${type !== 3 || !close ? "d-none" : ""}`}>
        <h6>50% OFF on Christmas</h6>
        <ul><li>2</li><li>15</li><li>33</li><li>32</li></ul>
        <L href="#" className="top-close" onClick={() => setClose(false)}>
          <Icon.X />
        </L>
      </div>

      <header className={`header ${/* routerPath(type).className */ "header-one"} ${scrollYPosition > 200 ? "fixed" : ""}`}>
        <div className={`${type === 4 || type === 1 ? "container-fluid" : "container"}`}>
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <L onClick={toogle} id="mobile_btn" href="#">
                <span className="bar-icon"><span /><span /><span /></span>
              </L>
              <L href={routes.index} className="navbar-brand logo">
                <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
              </L>
              {/* ...rest unchanged, just use <L href="..."> everywhere */}
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link href={'/'} className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  onClick={toogle}
                  id="menu_close"
                  className="menu-close"
                  href="#"
                >
                  {' '}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav align-items-lg-center">
                {type == 1 ?
                  <li className="d-none d-lg-block">
                    <div>
                      <div className="dropdown">
                        <Link href="#" className="dropdown-toggle bg-light-300 fw-medium"
                          data-bs-toggle="dropdown">
                          <i className="ti ti-layout-grid me-1"></i>Categories
                        </Link>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" href="#">Construction</Link></li>
                          <li><Link className="dropdown-item" href="#">Removals</Link></li>
                          <li><Link className="dropdown-item" href="#">Interior</Link></li>
                        </ul>
                      </div>
                    </div>

                  </li>
                  :
                  <></>
                }

                {header_data.map((item: any, index: number) => {
                  if (item.separateRoute) return null;

                  return (
                    <li
                      key={`menu-item-${index}`}  // ✅ unique key
                      className={`has-submenu ${item.tittle == 'Home' ? 'megamenu' : ''} ${activeRouterPath(item.menu) ? 'active' : ''}`}
                    >
                      <Link
                        href="#"
                        onClick={() => (item.showAsTab = !item.showAsTab)}
                      >
                        {item.tittle} <i className="fas fa-chevron-down" />
                      </Link>

                      <ul
                        className={`submenu ${item.tittle == 'Home' ? 'mega-submenu' : ''} ${item.showAsTab ? 'show-sub-menu' : ''}`}
                      >
                        {item.menu.map((menu: any, menuIndex: number) => (
                          <React.Fragment key={`submenu-${index}-${menuIndex}`}> {/* ✅ key on fragment */}
                            {menu.hasSubRoute == false && item.tittle != 'Home' && (
                              <li className={menu.routes == pathname ? 'active' : ''}>
                                <Link href={menu.routes || "#"}>{menu.menuValue}</Link>
                              </li>
                            )}

                            {menu.hasSubRoute && (
                              <li key={`subroute-${index}-${menuIndex}`} className="has-submenu">
                                <Link
                                  onClick={() => (menu.showSubRoute = !menu.showSubRoute)}
                                  href={menu.routes || "#"}
                                >
                                  {menu.menuValue}
                                </Link>
                                <ul className={`submenu ${menu.showSubRoute ? 'show-sub-menu' : ''}`}>
                                  {menu.subMenus.map((subMenu: Header, subMenuIndex: number) => (
                                    <li
                                      key={`sub-submenu-${index}-${menuIndex}-${subMenuIndex}`}
                                      className={subMenu.routes == pathname ? 'active' : ''}
                                    >
                                      <Link href={subMenu.routes}>{subMenu.menuValue}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            )}

                            {menu.menuValue === 'Electrical Home' && (
                              <li key={`mega-${index}-${menuIndex}`}>
                                <div className="megamenu-wrapper">
                                  <div className="row">
                                    {item.menu.map((mega: Header, megaIndex: number) => (
                                      <div className="col-lg-2" key={`mega-col-${index}-${megaIndex}`}>
                                        <div className={`single-demo ${mega.routes == pathname ? 'active' : ''}`}>
                                          <div className="demo-img">
                                            <Link href={mega.routes}>
                                              <ImageWithBasePath src={mega.img} className="img-fluid" alt="img" />
                                            </Link>
                                          </div>
                                          <div className="demo-info">
                                            <Link href={mega.routes}>{mega.menuValue}</Link>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </li>
                            )}
                          </React.Fragment>
                        ))}
                      </ul>
                    </li>
                  );
                })}

                {type == 1 ?
                  <li className="nav-item">
                    <Link className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#provider">Become a Provider</Link>
                  </li>
                  :
                  <></>
                }
                <li className={`nav-item ${type == 10 ? 'd-none' : ''}`}>
                  <Link target='_blank' href="/admin/dashboard">Admin</Link>
                </li>

              </ul>
            </div>
            {renderButtons(type)}
          </nav>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
