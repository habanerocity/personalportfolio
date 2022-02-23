// import { SideBarData } from './SideBarData';
import { useRouter } from 'next/router';
import classes from './SideBar.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { Fragment } from 'react';

const SideBar = () => {
	const router = useRouter();
	return (
		<Fragment>
			<nav className={classes.nav_menu}>
				<ul className={classes.nav_menu_items}>
					<li className={classes.logo}> LR </li>
					<li className={classes.nav_text}>
						<Image height={20} width={20} src={'/static/icons/house-solid.svg'} />
						<Link href="/">
							<a
								className={
									router.pathname == '/' ? `${classes.active} ${classes.nav_text}` : classes.nav_text
								}
							>
								Home
							</a>
						</Link>
					</li>
					<li className={classes.nav_text}>
						<Image className={classes.icon} src={'/static/icons/user-solid.svg'} height={20} width={20} />
						<Link href="/About">
							<a
								className={
									router.pathname == '/About' ? (
										`${classes.active} ${classes.nav_text}`
									) : (
										classes.nav_text
									)
								}
							>
								About
							</a>
						</Link>
					</li>
					<li className={classes.nav_text}>
						<Image height={20} width={20} src={'/static/icons/laptop-code-solid.svg'} />
						<Link href="/Skills">
							<a
								className={
									router.pathname == '/Skills' ? (
										`${classes.active} ${classes.nav_text}`
									) : (
										classes.nav_text
									)
								}
							>
								Skills
							</a>
						</Link>
					</li>
					<li className={classes.nav_text}>
						<Image height={20} width={20} src={'/static/icons/briefcase-solid.svg'} />
						<Link href="/Projects">
							<a
								className={
									router.pathname == '/Projects' ? (
										`${classes.active} ${classes.nav_text}`
									) : (
										classes.nav_text
									)
								}
							>
								Projects
							</a>
						</Link>
					</li>
					<li className={classes.nav_text}>
						<Image height={20} width={20} src={'/static/icons/envelope-solid.svg'} />
						<Link href="/Contact">
							<a
								className={
									router.pathname == '/Contact' ? (
										`${classes.active} ${classes.nav_text}`
									) : (
										classes.nav_text
									)
								}
							>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default SideBar;
