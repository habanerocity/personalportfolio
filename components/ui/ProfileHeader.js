import classes from './ProfileHeader.module.scss';

import Image from 'next/image';
import { getOptimizedImageSrc, getResponsiveSizes } from './ResponsiveImage';

import { socialMediaInfoData } from '../../data/socialMediaInfoData';

import SocialMediaIcons from './SocialMediaIcons';

const ProfileHeader = (props) => {

    // Extract URL from Contentful asset object
    let profileImageUrl = null;
    if (props.profileImage) {
      if (typeof props.profileImage === 'string') {
        profileImageUrl = props.profileImage;
      } else if (props.profileImage?.fields?.file?.url) {
        profileImageUrl = props.profileImage.fields.file.url;
        // Contentful URLs are protocol-relative, add https:
        if (profileImageUrl.startsWith('//')) {
          profileImageUrl = `https:${profileImageUrl}`;
        }
      }
    }

    return(
        <div className={`w-100 align-items-center ${classes.flex__containerHeading}`}>
            <Image
                src={getOptimizedImageSrc(profileImageUrl, 'thumbnail')}
                alt="me"
                height={150}
                width={140}
                className={`position-relative ${classes.me}`}
                sizes={getResponsiveSizes('thumbnail')}
                quality={90}
                priority
            />
            <div className={`justify-content-evenly ${classes.flex__containerCol}`}>
                <h1 className={`fw-bolder text-center ${classes.lr}`}>{props.name ? props.name : "Lindy Ramirez"}</h1>
                <h3 className={`text-left ${classes.dev}`}>{props.jobTitle ? props.jobTitle : "Web Developer"}</h3>
                <div className={`align-items-center justify-content-evenly ${classes.icons}`}>
                {socialMediaInfoData.map(SocialMediaIcons)}
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;