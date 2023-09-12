import styled from 'styled-components';

const StyledText = styled.div`
    color: black;
    background: cyan;
    font-size: 70px;
    font-family: Arial;
    text-align: center;
    margin-bottom: 10px;
`;

function Title(props) {
    return (
    <>
        <b><StyledText>{props.text}</StyledText></b>
    </>
);
}

export default Title;