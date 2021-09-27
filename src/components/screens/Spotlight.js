import React from 'react';
import Img1 from '../images/img1.jpg'
import Img2 from '../images/img2.jpg'
import Img3 from '../images/img3.jpg'
import {Section,SpotlightSection,DivAccommodation,SpotlightHeading,Paragraph,SpotlightButton,Bold,DivImages,DivOne,DivTwo,Img,ImgFirst,ImgSecond,GlobalStyle} from './SpotlightElements'
function Spotlight (){
    return <>
        <GlobalStyle/>
            <Section>
                <SpotlightSection>
                    <DivAccommodation>
                        <Bold>choose the perfect</Bold>
                        <SpotlightHeading>accommodation</SpotlightHeading>
                        <Paragraph>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</Paragraph>
                        <SpotlightButton>see more</SpotlightButton>
                    </DivAccommodation>
                    <DivImages>
                        <DivOne>
                            <Img src={Img1} alt= ""></Img>
                        </DivOne>
                        <DivTwo>
                            <ImgFirst src={Img2} alt=""></ImgFirst>
                            <ImgSecond src={Img3} alt=""></ImgSecond>
                        </DivTwo>
                    </DivImages>
                </SpotlightSection>
            </Section>
        </>
}
export default Spotlight;