import styled from 'styled-components';

export const Header = styled.header`
    background-color: #282828;
    border-bottom: 1px solid #4c4949;
    color: #fff;
    left: 0;
    padding: 20px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
`;

export const List = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1130px;
`;

export const Logo = styled.img`
    border-radius: 20px;
    height: 40px;
    text-align: start;
    width: 40%;
`;

export const Item = styled.li`
    text-align: center;
    width: 30%;
`;


export const Count = styled.span`
    background: #ff0000;
    border-radius: 20px;
    margin: 0 5px;
    padding: 5px 10px;
`;

export const Anchor = styled.a`
    text-align: center;
    width: 30%;
`;

export const Search = styled.input`
    border-radius: 20px;
    margin: 10px 0;
    padding: 5px;
    text-align: center;
    width: 70%;
`;
