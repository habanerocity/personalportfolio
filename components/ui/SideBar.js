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
        <Link href={link.routerPath} className={
          router.pathname == `${link.routerPath}`
            ? `${classes.active} ${classes.nav_text}`
            : classes.nav_text
        }>

          <Image
            height={28}
            width={25}
            src={link.image}
            alt={link.linkName}
            priority={true}
          />
          <span className={classes.link_content}>{link.linkName}</span>

        </Link>
      </li>
    );
  };

  return (
    <main >
      <div className='container'>
        <nav className={`${classes.nav_menu} `}>
          <ul className={classes.nav_menu_items}>
            <span className={`${classes.logo}`}>

              <Link href="/">

                <Image
                  fill

                  src={"/static/habaneroicon.png"}
                  alt="Logo"
                  className={classes.hab}
                />

              </Link>

            </span>
            {linkInfo.map(renderLinks)}
          </ul>
        </nav>

      </div>
    </main>
  );
};

export default SideBar;
