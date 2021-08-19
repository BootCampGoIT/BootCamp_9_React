import sprite from "../../icons/courses/spite.svg";
import { FolderListContainer } from "./FolderListStyled";

const FolderList = ({ arr }) => {
  return (
    <FolderListContainer>
      {arr.map((item) => (
        <li className='folderItem'>
          <div className='folderContainer'>
            <div className='folderIconContainer'>
              <svg className='folderIcon'>
                <use
                  href={
                    sprite +
                    (item.modules?.length
                      ? "#icon-folder-open"
                      : "#icon-folder")
                  }
                />
              </svg>
            </div>
            <span className='folderTitle'>{item.name}</span>
          </div>
          <div className='folderListContainer'>
            {item.modules?.length && <FolderList arr={item.modules} />}
          </div>
        </li>
      ))}
    </FolderListContainer>
  );
};

export default FolderList;
