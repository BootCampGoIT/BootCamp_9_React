import PropTypes from "prop-types";
import sprite from "../../../../icons/courses/spite.svg";

const ModuleList = ({ modules }) => {
  return (
    <ul>
      {modules.map((moduleItem, idx) => (
        <li key={idx}>
          <h4>{moduleItem.name}</h4>
          <iframe
            width={560 / 3}
            height={315 / 3}
            src={moduleItem.webinar}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
          <div>
            <svg>
              <use href={sprite + "#icon-link"} />
            </svg>
            <a href={moduleItem.repository}>Repository link</a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ModuleList;

ModuleList.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      webinar: PropTypes.string,
      repository: PropTypes.string,
    })
  ),
};
