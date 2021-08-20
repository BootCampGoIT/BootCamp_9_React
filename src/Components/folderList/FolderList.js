import sprite from "../../icons/courses/spite.svg";
import { FolderListContainer } from "./FolderListStyled";

const FolderList = ({ arr }) => {
  return (
    <FolderListContainer>
      {arr.map((item, idx) => (
        <li className='folderItem' key={idx}>
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

// const coursesArr = [
//   {
//     id: {
//       parent: 0,
//       current: 1,
//     },
//     name: "Html",
//   },
//   {
//     parentId: 0,
//     currentId: 2,
//     name: "Html",
//   },
//   {
//     parentId: 1,
//     currentId: 3,
//     name: "Lesson1",
//   },
//   {
//     parentId: 1,
//     currentId: 4,
//     name: "Lesson2",
//   },
//   {
//     parentId: 2,
//     currentId: 5,
//     name: "Lesson1",
//   },
//   {
//     parentId: 2,
//     currentId: 5,
//     name: "Lesson1",
//   },
// ];
