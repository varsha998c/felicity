import React from 'react';
import {SectionContact,Section,Container,LeftDiv,HeadingOne,HeadingTwo,Paragraph,RightDiv,Form,Input,TextArea, StyledButton } from './ContactElement';
function Contact (){
    return <> 
        <SectionContact>
            <Section>
                <Container>
                    <LeftDiv>
                        <HeadingOne>contact us</HeadingOne>
                        <HeadingTwo>Free download Landing page Felicity Hotel</HeadingTwo>
                        <Paragraph>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour.</Paragraph>
                    </LeftDiv>
                    <RightDiv>
                        <Form>
                            <Input type="text" name="Full Name" placeholder="Full Name"/>
                            <Input type="email" name="Email" placeholder="Email"/>
                            <Input type="number" name="Phone Number" placeholder="Phone Number"/>
                            <TextArea>Message</TextArea>
                            <StyledButton>Send</StyledButton>
                        </Form>
                    </RightDiv>
                </Container>
            </Section>
        </SectionContact>
    </>
}
export default Contact;
