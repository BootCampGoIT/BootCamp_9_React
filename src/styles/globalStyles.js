import { createGlobalStyle } from "styled-components";

console.dir(createGlobalStyle);

export default createGlobalStyle`
button {
    color: cornflowerblue;
}

h2 {
    color: ${({ theme }) => theme.colors.main}
}
body{
    background-color: ${({theme})=> theme.colors.primary};
}
`;
