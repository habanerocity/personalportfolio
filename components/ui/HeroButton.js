import classes from './HeroButton.module.scss';

import Link from 'next/link';

const HeroButton = (props) => {
    return (
        <Link className='text-decoration-none' href={props.href || '#'} passHref>
            <button className={`${classes.hero__btn_solid} text-white ${classes.hero__btn} fs-3 mt-4 me-4 ${props.fullWidth ? 'w-100' : ''}`}>
                {props.children}
            </button>
        </Link>
    )
}

export default HeroButton;