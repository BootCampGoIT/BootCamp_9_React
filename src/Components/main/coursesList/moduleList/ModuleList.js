import sprite from "../../../../icons/courses/spite.svg";
import { ModuleListContainer } from "./ModuleListStyled";

const ModuleList = ({ modules }) => {
  return (
    <ModuleListContainer>
      {modules.map((moduleItem, idx) => (
        <li className='moduleListItem' key={idx}>
          <h4 className='moduleListTitle'>{moduleItem.name}</h4>
          <iframe
            className='moduleListFrame'
            width={560 / 3}
            height={315 / 3}
            src={moduleItem.webinar}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
          <div className='moduleListLink'>
            <svg className='moduleListLinkIcon'>
              <use href={sprite + "#icon-link"} />
            </svg>
            <a href={moduleItem.repository} className='moduleListLinkText'>
              Git-repository
            </a>
          </div>
        </li>
      ))}
    </ModuleListContainer>
  );
};

export default ModuleList;
