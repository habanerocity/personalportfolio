import Link from 'next/link';
import Image from 'next/image';

import classes from './SocialMediaIcons.module.scss';

const SocialMediaIcons = (logo, index) => {
    return (
      <div  className={`mt-1 ${classes.img} w-100`} key={index}>
        <Link href={logo.link} target="_blank" rel="noreferrer">
          <Image
            className={`${classes.social_media}`}
            src={logo.image}
            alt={logo.alt}
            height={25}
            width={25}
            layout="intrinsic"
          />
        </Link>
      </div>
    );
  };

  export default SocialMediaIcons;