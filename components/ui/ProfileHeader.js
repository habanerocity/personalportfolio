import classes from './ProfileHeader.module.scss';

import Image from 'next/image';

import { socialMediaInfoData } from '../data/socialMediaInfoData';

import SocialMediaIcons from './SocialMediaIcons';

const ProfileHeader = () => {

    return(
        <div className={`w-100 align-items-center ${classes.flex__containerHeading}`}>
            <Image
                src={"/static/lor-portfolio.png"}
                alt="me"
                height={150}
                width={140}
                className={`position-relative ${classes.me}`}
            />
            <div className={`justify-content-evenly ${classes.flex__containerCol}`}>
                <h1 className={`fw-bolder text-center ${classes.lr}`}>Lindy Ramirez</h1>
                <h3 className={`text-left ${classes.dev}`}>Web Developer</h3>
                <div className={`align-items-center justify-content-evenly ${classes.icons}`}>
                {socialMediaInfoData.map(SocialMediaIcons)}
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;