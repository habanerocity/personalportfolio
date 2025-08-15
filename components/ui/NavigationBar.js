import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./NavigationBar.module.scss";

import { linkInfo } from "../../data/navigationBarLinkInfoData";

import Link from "next/link";
import Image from "next/legacy/image";

const NavigationBar = () => {
  const router = useRouter();
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 450) {
      e.preventDefault();
      setServicesMenuOpen(prevState => !prevState);
    }
  };

  const renderLinks = (link, index) => {
    const isServicesLink = link.linkName === "Services";
    return (
      <li className={classes.nav_text} key={index}>
        <Link href={link.routerPath} className={
          router.pathname.startsWith(link.routerPath) && link.routerPath !== '/'
          ? `${classes.active} ${classes.nav_text}`
          : router.pathname === link.routerPath 
          ? `${classes.active} ${classes.nav_text}`
          : classes.nav_text
        }
        onClick={isServicesLink ? handleServicesClick : null}>

          <Image
            height={28}
            width={25}
            layout="fixed"
            className={
              router.pathname.startsWith(link.routerPath) && link.routerPath !== '/'
                  ? `${classes.active}`
                  : router.pathname === link.routerPath
                  ? `${classes.active}`
                  : null
          }
            src={link.image}
            alt={link.altText}
            priority={true}
            /> 
          <span className={`${classes.link_content}`}>{link.linkName}</span>
        </Link>
        {link.subLinks && (
          <ul className={`${classes.submenu} ${isServicesMenuOpen && isServicesLink ? classes.submenu_open : ''}`}>
            {link.subLinks.map((subLink, subIndex) => (
              <li key={subIndex}>
                <Link href={subLink.routerPath} className={classes.nav_text}>
                  <span>{subLink.linkName}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <main className={`position-absolute bg-white w-100 ${classes.nav_container}`}>
      <div className={`container ${classes.nav_menu_wrapper} d-flex justify-content-center align-items-center p-0`}>
        <nav className={`${classes.nav_menu} w-100 bg-white position-relative d-flex align-items-center`}>
          <Link href="/">
            <div className={`${classes.logo} list-unstyled position-relative p-0 fw-bold`}>
              <Image
                src="/static/Lr-svg-cropped.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
          <div className={`position-absolute ${classes.nav_menu_items_wrapper}`}>
            <ul className={`p-0 m-0 ${classes.nav_menu_items} list-unstyled d-flex align-items-center position-relative`}>
              {linkInfo.map(renderLinks)}
            </ul>
          </div>
        </nav>

      </div>
    </main>
  );
};

export default NavigationBar;
