import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}

button {
    color: ${(props) => props.theme.colors.buttonText};
    background-color: ${(props) => props.theme.colors.main};
    height: 24px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 50pc;
    outline: none;
    cursor: pointer;
    padding: 0 24px;
}

button:hover {
    background-color: ${(props) => props.theme.colors.active};
  }

label {
    color: ${(props) => props.theme.colors.label};
    font-size: 16px;
    line-height: 20px;
}
ul {
    list-style: none;
}
/* p {
    color: ${(props) => props.theme.colors.text}
} */

input, select {
    color: ${(props) => props.theme.colors.input};
    border: 1px solid ${(props) => props.theme.colors.main};
    height: 25px;
    border-radius: 16px;
    outline: none;
    padding: 0 12px;
    height: 32px;
    width: 100%;
    font-size: 16px;
    margin: 8px 0
}

input::-webkit-input-placeholder {
    color: "#dbd7d8";
}
input::-moz-placeholder {
    color: "#dbd7d8";
}
input:-moz-placeholder{
    color: "#dbd7d8";
}
input:-ms-input-placeholder{
    color: "#dbd7d8";
}

input::-webkit-input-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input::-moz-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input:-moz-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input:-ms-input-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
input:focus::-moz-placeholder{opacity: 0; transition: opacity 0.3s ease;}
input:focus:-moz-placeholder{opacity: 0; transition: opacity 0.3s ease;}
input:focus:-ms-input-placeholder{opacity: 0; transition: opacity 0.3s ease;}
`;
