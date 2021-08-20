import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
button {
    color: cornflowerblue;
}

body{
    background-color: ${({ theme }) => theme.colors.primary};
}
`;
