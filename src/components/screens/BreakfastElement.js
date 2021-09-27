import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
  }
`;
export const BreakfastSection = styled.section`
    background : #fff;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		
	}   
`;  
export const Section = styled.section`
    display : flex;
    width : 80%;
    margin : 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 2% 0;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 768px) {
		display : block;
	}
`;
export const DivImage = styled.div`
    width: 50%;
    @media all and (max-width: 1280px) {
        display: block;
        width: 50%;
        margin-right: 2%;
    }
    @media all and (max-width: 1080px) {
        
    }
    @media all and (max-width: 980px) {
        height: 326px;
    }
    @media all and (max-width : 768px) {
        width: 100%;
    }
    @media all and (max-width :480px) {
        height: 216px;
    }
`;
export const Img = styled.img`
    display : block;
    width : 100%;
    @media all and (max-width: 1280px) {

    }
    @media all and (max-width: 1080px) {
        
    }
    @media all and (max-width: 980px) {
        margin-top: 19%;
    }
`;
export const DivContent= styled.div`
    padding: 2% 0;
    width: 50%;
    text-align : right;
    @media all and (max-width: 1280px) {
        padding: 10% 0;
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        padding: 0;
	}
    @media all and (max-width : 768px) {
        width: 100%;
        margin-top: 25%;
    }
    @media all and (max-width :480px) {
        margin-top: 17%;
    }
`;
export const ContentHeading = styled.h1`
    color : #000;
    font-size : 60px;
    text-transform: capitalize;
    @media all and (max-width: 1280px) {
        font-size: 45px;
    }
    @media all and (max-width: 1080px) {
		font-size: 42px;
	}
	@media all and (max-width: 980px) {
		font-size: 38px;
	}
    @media all and (max-width :640px) {
        font-size: 36px;
    }
    @media all and  (max-width : 540px) {
        font-size: 34px;
    }
    @media all and (max-width :480px) {
        font-size: 30px;
    }
    @media all and (max-width :360px) {
        font-size: 26px;
    }
`;
export const Span = styled.span`
    color : #000;
    font-size : 60px;
    text-transform: capitalize;  
    @media all and (max-width: 1280px) {
        font-size: 45px;
    } 
    @media all and (max-width: 1080px) {
		font-size: 42px;
	}
	@media all and (max-width: 980px) {
		font-size: 38px;
	}
    @media all and (max-width :640px) {
        font-size: 36px;
    }
    @media all and  (max-width : 540px) {
        font-size: 34px;
    }
    @media all and (max-width :480px) {
        font-size: 30px;
    }
    @media all and (max-width :360px) {
        font-size: 26px;
    }
`;
export const Description = styled.p`
    color: #6d6d6d;
    margin-top: 45px;
    line-height: 1.9rem;
    font-size: 20px;
    @media all and (max-width: 1280px) {
        margin-top: 20px;
    }
    @media all and (max-width: 1080px) {
        margin-top: 8px;
        line-height: 1.6rem;	
	}
	@media all and (max-width: 540px) {
		font-size: 19px;
	}
    @media all and  (max-width :360px) {
        font-size: 16px;
    }
`;
export const Button = styled.a.attrs({
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
        margin-top: 10px;
    }
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 540px) {
		font-size: 19px;
	}
    @media all and (max-width :480px) {
        font-size: 17px;
    }
    @media all and (max-width :360px) {
        font-size: 15px;
        padding: 10px 27px;
    }
`;