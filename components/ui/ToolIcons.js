import Image from 'next/image';

const ToolsIcons = (skill, index) => {
    return (
      <li className="list-unstyled p-1 d-flex flex-column justify-content-center align-items-center" key={index}>
        <Image src={skill.image} alt={skill.alt} height={skill.height} width={skill.width} />
        <div className="text-center fs-6 mt-1">{skill.alt}</div>
      </li>
    );
  };

export default ToolsIcons;