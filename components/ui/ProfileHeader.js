import classes from './ProfileHeader.module.scss';

import Image from 'next/image';

import { socialMediaInfoData } from '../data/socialMediaInfoData';

import SocialMediaIcons from './SocialMediaIcons';

const ProfileHeader = () => {

    return(
        <div className={classes.flex__containerHeading}>
            <Image
                src={"/static/lor-portfolio.png"}
                alt="me"
                height={150}
                width={140}
                className={classes.me}
            />
            <div className={classes.flex__containerCol}>
                <h1 className={classes.lr}>Lindy Ramirez</h1>
                <h3 className={`text-left ${classes.dev}`}>Web Developer</h3>
                <div className={classes.icons}>
                {socialMediaInfoData.map(SocialMediaIcons)}
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;