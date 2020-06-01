import styled from 'styled-components';

export const Header = styled.header`
    background-color: #282828;
    border-bottom: 1px solid #4c4949;
    color: #fff;
    padding: 20px;
`;

export const List = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1130px;
`;

export const Logo = styled.img`
    border-radius: 20px;
    height: 40px;
    text-align: start;
    width: 70%;
`;

export const Item = styled.li`
    text-align: center;
    width: 15%;
`;

export const Search = styled.input`
    padding: 5px;
    text-align: center;
    width: 70%;
    border-radius: 20px;
`;
