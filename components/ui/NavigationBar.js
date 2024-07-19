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
          <span className={classes.link_content}>{link.linkName}</span>

        </Link>
      </li>
    );
  };

  return (
    <main className={`position-absolute bg-white w-100 ${classes.nav_container}`}>
      <div className={`container ${classes.nav_menu_wrapper} d-flex justify-content-center align-items-center p-0`}>
        <nav className={`${classes.nav_menu} `}>
          <div className={`${classes.logo}`}>

            <Link href="/">

              <Image
                layout="fill"
                src={"/static/habaneroicon-50pxw.webp"}
                alt="Logo"
                className={classes.hab}
                priority
              />

            </Link>

          </div>
          <div className={classes.nav_menu_items_wrapper}>
            <ul className={`p-0 m-0 ${classes.nav_menu_items}`}>
              {linkInfo.map(renderLinks)}
            </ul>
          </div>
        </nav>

      </div>
    </main>
  );
};

export default NavigationBar;
