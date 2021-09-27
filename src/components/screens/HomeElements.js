import styled from 'styled-components';
import bgImg from '../images/banner.jpg'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
  }
`;
export const HomeSection = styled.section`
    height : 100vh;
    background : url(${bgImg});
    @media all and (max-width: 1280px) {
        height: 150vh;  
	}
    @media all and (max-width: 640px) {
        height: 135vh;
    }
    @media all and (max-width :540px) {
        height: 120vh;
    }
`;
export const Header = styled.section`

`;  
export const HeaderDiv = styled.div`
    width : 80%;
    height : 80px;
    margin : 0 auto;
    display : flex;
    padding-bottom : 5%;
    align-items : center;
    justify-content : space-between;
    position : relative;
`;
export const LeftDiv = styled.div`
    width :45%;
`;
export const HeadingName = styled.h1 `
    color : #fff;
    font-size : 45px;
    font-weight : bold;
    @media all and (max-width: 1080px) {
        font-size : 40px;
	}
    @media all and (max-width: 980px){
        font-size : 27px;
    }
    @media (max-width: 980px) {
        font-size: 24px;
    }
    @media all and (max-width :360px) {
        font-size :18px;
    }
`;
export const RightDiv = styled.div`
    display : flex;
`;
export const NavUl = styled.ul`
    display : flex;
    list-style: none;
    align-items: center;
    @media all and (max-width :768px) {
        
    }
`;
export const LinkTag = styled.li`
    color: #fff;
    font-size: 20px;
    margin-right: 20px;
    text-transform: uppercase;
    @media all and (max-width: 1080px) {
        font-size : 18px;
	}
    @media all and (max-width: 980px){
        font-size: 16px;
    }
    @media all and (max-width: 768px) {
        display : none;    
    }
`;
export const LinkButton = styled.a.attrs({
    href: 'https://www.google.com'
})`
    color: #000;
    font-size: 20px;
    display: inline-block;
    background-color: #fff;
    padding: 16px 40px;
    margin-left: 20px;
    text-transform: uppercase;
    border-radius: 30px;
    text-decoration : none;  
    @media all and (max-width: 1080px) {
        font-size : 18px;
        padding: 11px 40px;
	} 
    @media all and (max-width: 980px){
       display : none; 
    }
    @media all and (max-width: 768px) {
        
    }
`;
export const DivHome = styled.section`
`;
export const DivContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    text-align: center;
`;
export const Heading = styled.h1`
    color: #fff;
    font-weight: bold;
    font-size: 50px;
    text-transform: uppercase;
    padding: 5% 10% 0;
    @media all and (max-width: 1280px) {
        font-size: 40px;   
	}
    @media all and (max-width: 1080px){
        font-size: 38px;
    }
    @media all and (max-width: 980px){
        font-size: 32px;
    }
    @media all and (max-width: 768px) {
        font-size: 25px;
    }
    @media all and (max-width :540px) {
        font-size: 20px;
    }
    @media all and (max-width :480px) {
        padding : 0;
    }
    @media all and (max-width :360px) {
        font-size: 19px;
    }
`;
export const Divparagraph = styled.p`
    color : #fff;
    font-size : 21px;
    margin-top : 30px;
    @media all and (max-width: 768px) {
        font-size: 19px;
    }
    2media all and (max-width :540px){
        ont-size: 17px;
    }
    @media all and (max-width :480px) {
        font-size: 18px;
    }
    2media all and (max-width :360px) {
        font-size: 16px;
    }
`;
export const HomeButton = styled.a.attrs({
    href: 'https://www.google.com'
})`
    display: inline-block;
    color: #000;
    font-size: 20px;
    padding: 13px 33px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 50px;
    text-decoration : none;
    @media all and (max-width: 480px) {
        font-size: 18px;
        padding: 10px 33px;
    }
    @media all and (max-width :360px) {
        font-size: 15px;
    }
`;
export const SectionCalender = styled.section`
    background-color : #fff;
    height : 100px;
    width: 80%;
    position: absolute;
    bottom: 0px;
    border-radius : 30px 30px 0 0;
    display : flex;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 1280px) {
        bottom: -215px;
        height: 115px;
	}
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        height: 194px;
    }
    @media all and (max-width :640px) {
        display: none;
    }
`;
export const Divf = styled.div`
    display: flex;
    width: 20%;
    padding: 17px;
    justify-content: center;
    flex-direction: column;
    margin-top: 35px;
    @media all and (max-width: 980px) {
        width: 24%;
        padding: 8px;
    }
    @media all and (max-width: 768px) {
        width: 32%;
    }
`;
export const Divs = styled.div`
    display: flex;
    width: 20%;
    padding: 17px;
    justify-content: center;
    flex-direction: column;
    margin-top: 35px;
    @media all and (max-width: 980px) {
        width: 24%;
        padding: 8px;
    }
    @media all and (max-width: 768px) {
        width: 32%;
    }
`;
export const Divt = styled.div`
    display: flex;
    width: 20%;
    padding: 17px;
    justify-content: center;
    flex-direction: column;
    margin-top: 35px;
    @media all and (max-width: 980px) {
        width: 21%;
        padding: 8px;
    }
    @media all and (max-width: 768px) {
        width: 32%;
        margin-top: -5px;
        margin-right: 8px;
    }
    @media all and (max-width: 640px) {
        
    }
`;
export const DateLabel = styled.label`
    color: #6D6D6D;
    font-size: 20px;
    text-transform: Uppercase;
    margin-bottom: 15px;
    font-weight: bold;
    @media all and (max-width: 1280px) {
        font-size : 18px;  
	}
    @media all and (max-width: 1080px) {
        font-size: 17px;
    }
    @media all and (max-width: 980px){
        font-size: 16px;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 9px;
    }
`;
export const DateButton = styled.a.attrs({
    href: 'https://www.google.com'
})`
    color: #fff;
    font-size: 20px;
    display: inline-block;
    background-color: #000;
    padding: 12px 40px;
    margin-top: 63px;
    text-transform: capitalize;
    border-radius: 10px;
    text-decoration : none;
    @media all and (max-width: 980px){
        padding: 9px 32px;
        font-size : 18px;
    }
    @media all and (max-width: 768px) {
        margin-top :0;
    }
`;
export const DateInput = styled.input.attrs({ 
    type: 'date'
  })`
    border-radius : 40px;
    background-color : hsl(0deg 0% 93%);
    border : none;
    padding : 10px;
    outline : none;
    @media all and (max-width: 980px){
        font-size: 17px;
        padding: 6px 0;
    }
    @media all and (max-width : 768px){

    }

   


`;
