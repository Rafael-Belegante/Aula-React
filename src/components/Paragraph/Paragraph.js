import styled from 'styled-components';

const StyledParagraph = styled.div`
    font-size: 15px;
    font-family: Arial;
    color: gray;
    padding-bottom: 20px;
    padding-left: 5px;
    margin-bottom: 20px;
    margin-left: 10px;
    border: 2px solid;
`;

function Paragraph(props) {
    return (
    <>
            <StyledParagraph>{props.text}</StyledParagraph>
    </>
);
}

export default Paragraph;