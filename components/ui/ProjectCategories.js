import classes from './ProjectCategories.module.scss';

const ProjectCategories = ({ activeCategoryProps, setActiveCategoryProps }) => {

    const categories = [
        { name: 'All' },
        { name: 'WordPress' },
        { name: 'Shopify' },
        { name: 'React JS' },
        { name: 'Landing Pages' },
        { name: 'Design' },
      ];

    return (
        <ul className={`my-2 list-unstyled ${classes.flex__container}`}>
            {categories.map((category) => (
            <li
                key={category.name}
                onClick={() => setActiveCategoryProps(category.name)}
                className={`${activeCategoryProps === category.name ? classes.nav__link__active : ''} ${classes.nav__link} ${category.name !== 'Design' ? 'me-3' : ''}`}
            >
                {category.name}
            </li>
            ))}
        </ul>
    )
}

export default ProjectCategories;