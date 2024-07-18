import classes from "./LogoBar.module.scss";

import Link from "next/link";
import Image from "next/legacy/image";

const LogoBar = () => {

    return (
        <div className={classes.logo_bar_container}>
            <div className='position-relative'>
                <div className={`d-flex justify-content-center align-items-center ${classes.logo_wrapper}`} >
                    <div className={`${classes.logo}`}>
                        <Link href="/">
                            <Image
                                layout="fill"
                                src={"/static/lor-long_logo.webp"}
                                alt="Logo"
                                className={classes.hab}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoBar;
