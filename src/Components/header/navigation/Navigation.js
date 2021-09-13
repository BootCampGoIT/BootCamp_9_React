import React from "react";
import { mainRoutes } from "../../../routes/mainRoutes";
import NavigationItem from "./navigationItem/NavigationItem";
import { NavigationContainer } from "./NavigationStyled";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../redux/auth/authActions";
import { authIsAuthSelector } from "../../../redux/auth/authSelectors";

const Navigation = ({ isBurgerMenuOpen = false, toggleModal = null }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authIsAuthSelector);
  const closeModal = () => {
    isBurgerMenuOpen && toggleModal();
  };

  const signOutUser = () => {
    dispatch(signOut());
    closeModal();
  };
  return (
    <>
      <NavigationContainer>
        <ul className='navList'>
          {mainRoutes.map((link) => (
            <NavigationItem
              closeModal={closeModal}
              link={link}
              key={link.path}
            />
          ))}
          {isAuth && (
            <li className='navItem' onClick={signOutUser}>
              SIGN OUT
            </li>
          )}
        </ul>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
