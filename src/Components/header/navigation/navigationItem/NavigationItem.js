import React, { useContext } from "react";
import { CustomLanguage } from "../../../App";
import { useLocation, NavLink } from "react-router-dom";
import { authIsAuthSelector } from "../../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const NavigationItem = ({ closeModal, link }) => {
  const { language } = useContext(CustomLanguage);
  const isAuth = useSelector(authIsAuthSelector);
  const location = useLocation();
  return (
    <>
      {!link.isPrivate && !link.isRestricted && (
        <li className='navItem' onClick={closeModal}>
          <NavLink
            exact={link.exact}
            // to={link.path}
            to={{ pathname: link.path, state: { from: location } }}
            className='navLink'
            activeClassName='activeNavLink'>
            {language.header.navigation[link.name] || link.name}
          </NavLink>
        </li>
      )}
      {!link.isPrivate && !isAuth && link.isRestricted && (
        <li className='navItem' onClick={closeModal}>
          <NavLink
            exact={link.exact}
            // to={link.path}
            to={{ pathname: link.path, state: { from: location } }}
            className='navLink'
            activeClassName='activeNavLink'>
            {language.header.navigation[link.name]}
          </NavLink>
        </li>
      )}
      {link.isPrivate && isAuth && !link.isRestricted && (
        <li className='navItem' onClick={closeModal}>
          <NavLink
            exact={link.exact}
            // to={link.path}
            to={{ pathname: link.path, state: { from: location } }}
            className='navLink'
            activeClassName='activeNavLink'>
            {language.header.navigation[link.name]}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;

// {
//   ((!link.isPrivate && !link.isRestricted) ||
//     (!link.isPrivate && !isAuth && link.isRestricted) ||
//     (link.isPrivate && isAuth && !link.isRestricted)) && (
//     <li className='navItem' onClick={closeModal}>
//       <NavLink
//         exact={link.exact}
//         // to={link.path}
//         to={{ pathname: link.path, state: { from: location } }}
//         className='navLink'
//         activeClassName='activeNavLink'>
//         {language.header.navigation[link.name] || link.name}
//       </NavLink>
//     </li>
//   );
// }

// (false || true || false) && <h2>Hello</h2>;
