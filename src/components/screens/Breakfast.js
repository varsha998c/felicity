import React from 'react';
import Img4 from '../images/img4.jpg'
import {BreakfastSection,Section,DivImage,Img,DivContent,Span,ContentHeading,Description,Button,GlobalStyle} from './BreakfastElement'
function Breakfast (){
    return <>
        <GlobalStyle/>
            <BreakfastSection>
                <Section>
                    <DivImage>
                        <Img src={Img4} alt= ""></Img>
                    </DivImage>
                    <DivContent>
                        <Span>our best</Span>
                        <ContentHeading>breakfast</ContentHeading>
                        <Description>lorem ipsum dolor sit amet, consecut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</Description>
                        <Button>read more</Button>
                    </DivContent>
                </Section>
            </BreakfastSection>
    </>
}
export default Breakfast;
