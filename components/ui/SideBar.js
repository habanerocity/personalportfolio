import { useRouter } from "next/router";
import classes from "./SideBar.module.scss";

import { linkInfo } from "../data/sideBarLinkInfoData";

import Link from "next/link";
import Image from "next/image";

const SideBar = () => {
  const router = useRouter();

  const renderLinks = (link, index) => {
    return (
      <li className={classes.nav_text} key={index}>
        <Link href={link.routerPath}>
          <a
            className={
              router.pathname == `${link.routerPath}`
                ? `${classes.active} ${classes.nav_text}`
                : classes.nav_text
            }
          >
            <Image
              height={25}
              width={25}
              src={link.image}
              alt={link.linkName}
              priority={true}
            />
            <span className={classes.link_content}>{link.linkName}</span>
          </a>
        </Link>
      </li>
    );
  };

  return (
    <main>
      <nav className={`${classes.nav_menu} `}>
        <ul className={classes.nav_menu_items}>
          <span className={classes.logo}>
            <Link href="/">
              <a>
                <Image
                  height={50}
                  width={75}
                  src={"/static/Images/habaneroicon5.png"}
                  alt="Logo"
                  className={classes.hab}
                />
              </a>
            </Link>
          </span>
          {linkInfo.map(renderLinks)}
        </ul>
      </nav>
    </main>
  );
};

export default SideBar;
