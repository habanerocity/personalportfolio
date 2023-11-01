import classes from "./LogoBar.module.scss";

import Link from "next/link";
import Image from "next/image";

const LogoBar = () => {

    return (
        <div className={`d-flex justify-content-center align-items-center ${classes.logo_wrapper}`} >
            <div className={`${classes.logo}`}>
                <Link href="/">
                    <Image
                        fill
                        src={"/static/lor-long_logo.webp"}
                        alt="Logo"
                        className={classes.hab}
                    />
                </Link>
            </div>
        </div>
    );
};

export default LogoBar;
