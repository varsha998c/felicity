import styled from 'styled-components';
export const SectionFooter = styled.section`
    background-color : #fff;
    height :60px;

`;
export const Heading = styled.h4`
    color : #000;
    text-align : center;
    text-transform: capitalize;
    font-size: 18px;
    padding: 2% 0;
    @media all and (max-width :768px) {
        font-size: 17px;
    }
    @media all and (max-width : 640px){
        font-size: 16px;
    }
    @media all and (max-width :480px) {
        font-size: 14px;
    }
    @media all and (max-width :360px) {
        font-size: 13px;
    }
`;
