import { useRouter } from "next/router";
import classes from "./NavigationBar.module.scss";

import { linkInfo } from "../data/navigationBarLinkInfoData";

import Link from "next/link";
import Image from "next/legacy/image";

const NavigationBar = () => {
  const router = useRouter();

  const renderLinks = (link, index) => {
    return (
      <li className={classes.nav_text} key={index}>
        <Link href={link.routerPath} className={
          router.pathname == `${link.routerPath}`
            ? `${classes.active} ${classes.nav_text}`
            : classes.nav_text
        }>

          <Image
            height={28}
            width={25}
            layout="fixed"
            className={
              router.pathname == `${link.routerPath}`
                ? `${classes.active}`
                : null
            }
            src={link.image}
            alt={link.altText}
            priority={true}
            />
          <span className={`${classes.link_content}`}>{link.linkName}</span>

        </Link>
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
                layout="fill"
                src={"/static/habaneroicon-50pxw.webp"}
                alt="Logo"
                className={classes.hab}
                priority
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
