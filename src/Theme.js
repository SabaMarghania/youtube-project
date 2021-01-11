import styled,{ createGlobalStyle } from "styled-components";

export const lightTheme = {
    body:'#fff !important',
    // fontColor:'#000 !important',
}
export const darkTheme = {
    body:'#121212 !important',
    fontColor:'#fff !important',
}
export const GlobalStyles = createGlobalStyle`
	body{
        background: ${(props) => props.theme.body};
  color:${(props) => props.theme.fontColor} ;
	}
`;
// const StyledApp = styled.div`
//   color:${(props) => props.theme.fontColor} ;
// `;

