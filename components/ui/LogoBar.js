import classes from "./LogoBar.module.scss";

import Link from "next/link";
import Image from "next/legacy/image";

const LogoBar = () => {

    return (
        <div className={classes.logo_bar_container}>
            <div className='position-relative'>
                <div className={`d-flex justify-content-center align-items-center ${classes.logo_wrapper}`} >
                    <Link href="/">
                        <div className={`${classes.logo} position-relative p-0 `}>
                            <Image
                                layout="fill"
                                src={"/static/lr-svg-long.svg"}
                                alt="Logo"
                                className={classes.hab}
                                priority
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogoBar;