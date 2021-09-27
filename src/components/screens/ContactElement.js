import styled from 'styled-components';
export const SectionContact = styled.section`
    background-color :hsl(60deg 1% 14%);
    position : relative;
    padding: 5% 0;
    @media all and (max-width: 1280px) {
		
	}
`;
export const Section = styled.section`
    width : 80%;
    margin : 0 auto;
    @media all and (max-width: 1280px) {
		
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		
	}
`;
export const Container = styled.section`
    padding : 5% 0;
    display : flex;
    @media all and (max-width: 1280px) {
		
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        flex-direction: column;
	}
`;
export const LeftDiv = styled.div`
    width :50%;
    @media all and (max-width: 1280px) {
		
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        width: 100%;
	}
`;
export const HeadingOne = styled.h1`
    color : #fff;
    font-size : 60px;
    font-weight : bold;
    margin-bottom: 25px;
    text-transform: capitalize;
    @media all and (max-width: 1280px) {
		font-size: 50px;
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 640px) {
		font-size: 46px;
	}
    @media all and (max-width :540px) {
        font-size: 31px;
    }
    @media all and (max-width :480px){
        font-size: 29px;
    }
    @media all and (max-width :360px) {
        font-size: 26px;
    }
`;
export const HeadingTwo = styled.h3`
    color : #fff;
    font-size: 50px;
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        font-size: 37px;
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 640px) {
		font-size: 33px;
	}
    @media all and (max-width : 540px) {
        font-size: 29px;
    }
    @media all and (max-width :480px) {
        font-size: 24px;
    }
    @media all and (max-width :360px) {
        font-size: 20px;
    }
`;
export const Paragraph = styled.p`
    color : #fff;
    font-size : 20px;
    @media all and (max-width: 1280px) {
		
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 640px) {
		font-size: 19px;
	}
    @media all and (max-width :540px) {
        font-size: 18px;
    }
    @media all and (max-width :480px) {
        font-size: 16px;
    }
    @media all and (max-width :360px) {
        font-size: 14px;
    }
`;
export const RightDiv = styled.div`
    width : 50%;
    position: absolute;
    right: 0;
    bottom: 131px;
    @media all and (max-width: 1280px) {
		bottom: 91px;
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        position : unset;
        width: 100%;
        margin-top: 36px;
	}
`;
export const Form = styled.form`
    background-color: rgb(242,96,24);
    width: 78%;
    height: 600px;
    border-radius: 25px;
    @media all and (max-width: 1280px) {
		height: 540px;
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
       width: 100%; 
    }
	@media all and (max-width :480px) {
        height: 473px;
    }
    @media all and (max-width :360px) {
        height: 400px;
    }
`;
export const Input = styled.input`
    width: 90%;
    padding: 18px 10px;
    margin: 25px 20px;
    border-radius: 10px;
    border: none;
    font-size : 20px;
    @media all and (max-width: 1280px) {
		width: 84%;
        padding: 18px 10px;
        margin: 19px 17px;
        border-radius: 10px;
        font-size: 18px;
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
        width: 87%;
	}
    @media all and (max-width :768px) {
        font-size: 16px;
    }
    @media all and (max-width :540px) {
        padding: 12px 10px
    } 
    @media all and  (max-width :480px ) {
        width: 78%;
    }
    @media all and (max-width :360px) {
        padding: 6px 10px;
        font-size: 14px;
    }
`;
export const TextArea = styled.textarea`
    width: 90%;
    padding: 45px 10px;
    margin: 10px 20px 37px;
    border-radius: 10px;
    border: none;
    font-size : 20px;
    @media all and (max-width: 1280px) {
		width: 84%;
        padding: 34px 10px;
        margin: 19px 17px;
        border-radius: 10px;
        font-size: 18px;
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width: 980px) {
		width: 87%;
	}
    @media all and (max-width :768px) {
        font-size: 16px;
    }
    @media all and  (max-width :480px ) {
        width: 78%;
    }
    @media all and (max-width : 360px) {
        margin: 7px 17px;
        padding: 26px 10px;
    }
`;
export const StyledButton = styled.a.attrs({
    href: 'https://www.google.com'
})`
    color: #fff;
    font-size: 20px;
    display: block;
    width: 10%;
    background-color: #000;
    padding: 16px 55px;
    text-transform: capitalize;
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
    text-decoration : none;
    @media all and (max-width: 1280px) {
		
	}
    @media all and (max-width: 1080px) {
		
	}
	@media all and (max-width :768px) {
        font-size: 16px;
    }
    @media all and (max-width : 360px) {
        padding: 7px 43px;
    }
`;