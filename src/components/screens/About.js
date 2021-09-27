import React from 'react';
import Img5 from '../images/about_img.jpg'
import {AboutSection,AboutDiv,AboutLeft,AboutHeading,AboutParagraph,AboutRight,ImageContainer,Img,GlobalStyle} from './AboutElement'
function About (){
    return <>
        <GlobalStyle/>
            <AboutSection>
                <AboutDiv>
                    <AboutLeft>
                        <AboutHeading>about our hotel</AboutHeading>
                        <AboutParagraph>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</AboutParagraph>
                    </AboutLeft>
                    <AboutRight>
                        <ImageContainer>
                            <Img src={Img5} alt=""></Img>
                        </ImageContainer>
                    </AboutRight>
                </AboutDiv>
            </AboutSection>
        </>

}
export default About;