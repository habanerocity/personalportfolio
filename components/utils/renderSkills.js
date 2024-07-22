const renderSkills = (skill, index) => {
    return (
      <li className="list-unstyled pe-3 pb-3 d-flex flex-column justify-content-center align-items-center" key={index}>
        <Image src={skill.image} alt={skill.alt} height={skill.height} width={skill.width} />
        <div className="text-center fs-6 mt-1">{skill.alt}</div>
      </li>
    );
  };

export default renderSkills;