import React from 'react';
import {SectionTestimonial,Section,Container,Header,DivSlider,DivLeft,Img,Heading,Paragraph,RightParagraph,DivRight,RightHeading} from './TestimonialElement'
import Img6 from '../images/te1.png'
import Img7 from '../images/te1.png'
function Testimonial (){
    return <>
            <SectionTestimonial>
                <Section>
                    <Container>
                        <Header>testimonial</Header>
                        <DivSlider>
                            <DivLeft>
                                <Heading>mark jonson</Heading>
                                <Paragraph>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour. </Paragraph>
                                <Img src={Img6} alt=""></Img>
                            </DivLeft>
                            <DivRight>
                                <RightHeading>mac Du</RightHeading>
                                <RightParagraph>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour. </RightParagraph>
                                <Img src={Img7} alt=""></Img>
                            </DivRight>
                        </DivSlider>
                    </Container>
                </Section>
            </SectionTestimonial>
        </>
}
export default Testimonial;