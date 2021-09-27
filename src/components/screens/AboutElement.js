import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
  }
`;
export const AboutSection = styled.section`
	background-color : hsl(218deg 19% 26%);
	@media all and (max-width: 1280px) {
			
	}
`;
export const AboutDiv = styled.div`
	width : 80%;
	margin : 0 auto;
	padding: 5% 0;
	display : flex;
	@media all and (max-width: 1280px) {
		
	}
	@media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		display: block;
	}
`;
export const AboutLeft = styled.div`
	padding : 8% 0;
	width : 50%;
	@media all and (max-width: 1280px) {
		padding: 6% 0;
    }
	@media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		width : 100%;
	}
`;
export const AboutHeading = styled.h1`
	font-size : 60px;
	color : #fff;
	font-weight : bold;
	text-transform: capitalize;
	@media all and (max-width: 1280px) {
		font-size: 50px;
    }
	@media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		font-size: 40px;
	}
	@media all and (max-width :640px) {
		font-size: 38px;
	}
	@media all and (max-width :540px) {
		font-size: 34px;
	}
	@media all and (max-width :480px) {
		font-size : 22px;
	}
`;
export const AboutParagraph = styled.p`
	margin-top: 23px;
	line-height: 1.7rem;
	color: #fff;
	@media all and (max-width: 1280px) {
       
    }
	@media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		margin-top: 16px;
		line-height: 1.5rem;
		margin-right: 10px;
	}
	@media all and (max-width : 540px) {
		margin-right :0
	}
`;
export const AboutRight = styled.div` 
	width : 50%;
	@media all and (max-width: 1280px) {
       
    }
	@media all and (max-width: 1080px) {
		    margin-top: 30px;
	}
	@media all and (max-width: 980px) {
		width : 100%;
	}
`;
export const ImageContainer = styled.div`
  	width : 90%;
	  @media all and (max-width: 1280px) {
		width: 100%;
    }
	@media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		
	}
`;
export const Img = styled.img` 
  	width : 100%;
	display : block;
	@media all and (max-width: 1280px) {
       
    }
	@media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		
	}
`;