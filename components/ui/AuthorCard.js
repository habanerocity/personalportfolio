import Image from "next/image";
import Link from "next/link";

import classes from "./AuthorCard.module.scss";
import socialClasses from "./SocialMediaIcons.module.scss";
import { socialMediaInfoData } from "../../data/socialMediaInfoData";
import ButtonPair from "./ButtonPair";

const AuthorCard = ({
  name = "Lindy Ramirez",
  title = "Freelance WordPress & Shopify Developer based in Los Angeles",
  bio = "Most businesses I work with already have a WordPress site — one that technically works but is slow, unreliable, or holding growth back. I step in as a technical partner: stabilizing, improving, and maintaining the site so it supports the business instead of creating risk. Over three years and 40+ sites, mostly for businesses that can't afford downtime and don't have in-house technical staff.",
  avatar = "/static/lor-portfoliox160.webp",
}) => {
  return (
    <aside className={classes.author_card} aria-label="About the author">
        <div className='d-flex flex-column align-items-center' >
            <Image
                className={classes.author_card__avatar}
                src={avatar}
                alt={name}
                width={150}
                height={160}
            />
            <div className={`mt-3 ${classes.author_card__socials}`}>
                {socialMediaInfoData.map((logo, index) => (
                    <Link key={index} href={logo.link} target="_blank" rel="noreferrer">
                    <Image
                        className={socialClasses.social_media}
                        src={logo.image}
                        alt={logo.alt}
                        height={22}
                        width={22}
                    />
                    </Link>
                ))}
            </div>
        </div>
        <div className={classes.author_card__info}>
            <h3 className={classes.author_card__name}>{name}</h3>
            <p className={`mb-2 ${classes.author_card__title}`}>{title}</p>
            <p className='fs-4 mb-0'>{bio}</p>
            <ButtonPair
            primaryCtaButtonText="Get In Touch"
            primaryCtaButtonLink="/contact"
            secondaryCtaButtonText="Back to Blog"
            secondaryCtaButtonLink="/blog"
            />
        </div>
    </aside>
  );
};

export default AuthorCard;
