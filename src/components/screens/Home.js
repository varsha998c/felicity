import React from 'react';
import {HomeSection,Header,HeaderDiv,LeftDiv,HeadingName,RightDiv,NavUl,LinkTag,LinkButton,DivHome,Heading,Divparagraph,DivContainer,HomeButton,SectionCalender,DateLabel,DateInput,Divf,Divs,Divt,DateButton,GlobalStyle, DivFirst, DivSecond} from './HomeElements'
import { DivOne } from './SpotlightElements';

function Home (){
    return <>
        <GlobalStyle/>
            <HomeSection>
                <Header>
                    <HeaderDiv>
                        <LeftDiv>
                            <HeadingName>Felicity</HeadingName>
                        </LeftDiv>
                        <RightDiv>
                            <NavUl>
                                <LinkTag>about</LinkTag>
                                <LinkTag>contact us</LinkTag>
                            </NavUl>
                            <LinkButton>sign in</LinkButton>
                        </RightDiv>
                    </HeaderDiv>
                </Header>
                <DivHome>
                    <DivContainer>
                        <Heading>welcome to hotel felicity landing page 2019</Heading>
                        <Divparagraph>There are many variations of passages of lorem ipsum available , but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</Divparagraph>
                        <HomeButton>Read More</HomeButton>
                        <SectionCalender>
                            <Divf>
                                <DateLabel>arrival time</DateLabel>
                                <DateInput></DateInput>
                            </Divf>
                            <Divs>
                                <DateLabel>departure time</DateLabel>
                                <DateInput></DateInput>
                            </Divs>
                            <Divt>
                                <DateLabel>person</DateLabel>
                                <DateInput  type="number"/>
                            </Divt>
                            <DateButton>book now</DateButton>
                        </SectionCalender>
                    </DivContainer>
                </DivHome>
            </HomeSection>
        </>
}
export default Home;