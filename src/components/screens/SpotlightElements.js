import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
  }
`;
export const Section = styled.section`
    background : #fff;
    display : flex;
    width : 80%;
    margin : 0 auto;
    padding: 6%;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		padding: 6% 0 3% 0;
	}
    @media all and (max-width: 768px) {

    }
`;
export const SpotlightSection = styled.section`
    display : flex;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 768px) {
		display: block;
	}
`;
export const DivAccommodation = styled.div`
    width : 50%;
    padding-top: 10%;
    @media all and (max-width: 1280px) {
        padding-top: 5%;
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 768px) {
        width: 100%;
	}
`;
export const SpotlightHeading = styled.h1`
    font-size: 60px;
    text-transform: capitalize;
    @media all and (max-width: 1280px) {
        font-size: 40px;
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		font-size: 35px;
	}
    @media all and (max-width :640px) {
        font-size: 33px;
    }
    @media all and (max-width :540px) {
        font-size: 31px;
    }
    @media all and (max-width :480px) {
        font-size: 29px;
    }
    @media all and (max-width :360px) {
        font-size: 26px;
    }
`;
export const Bold = styled.span`
    font-size: 60px;
    text-transform: capitalize;
    color : #000;
    @media all and (max-width: 1280px) {
        font-size: 40px;
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        font-size: 35px;
	}
    @media all and (max-width :640px) {
        font-size: 33px;
    }
    @media all and (max-width :540px) {
        font-size: 31px;
    }
    @media all and (max-width :480px) {
        font-size: 29px;
    }
    @media all and (max-width :360px) {
        font-size: 26px;
    }
`;
export const Paragraph = styled.p`
    margin-top: 30px;
    line-height: 1.7rem;
    font-size: 20px;
    color : #6d6d6d;
    @media all and (max-width: 1280px) {
        font-size: 19px;
        margin-top: 25px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 6px;
	}
	@media all and (max-width: 540px) {
        margin-right :0;
        font-size: 18px;	
	}
    @media all and (max-width :480px) {
        font-size: 16px;
    }
`;
export const SpotlightButton = styled.a.attrs({
    href: 'https://www.google.com'
})`
    color: #fff;
    padding: 10px 35px;
    border-radius: 10px;
    background-color: #000;
    font-size: 21px;
    text-transform: capitalize;
    display: inline-block;
    margin-top: 50px;
    text-decoration : none;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
		margin-top: 17px;
	}
	@media all and (max-width: 540px) {
        font-size: 16px;
	}
`;
export const DivImages = styled.div`
    width : 50%;
    @media all and (max-width: 1280px) {
        padding-top: 5%;
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        padding-top: 14%;	
	}
    @media all and (max-width :768px) {
        width: 100%;
    }
`;
export const DivOne = styled.div`

`;
export const Img = styled.img`
    display : block;
    width : 100%;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 768px) {

	}
    
`;
export const DivTwo = styled.div`
    display : flex;
    justify-content: space-between;
    margin-top: 20px;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 768px) {
	}
`;
export const ImgFirst = styled.img`
    display: inline-block;
    width: 48%;
    margin-right: 10px;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		
	}
`;
export const ImgSecond = styled.img`
    display: inline-block;
    width: 48%; 
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		
	}
`;
