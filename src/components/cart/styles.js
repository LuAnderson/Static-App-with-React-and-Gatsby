import styled from 'styled-components';

export const Cart = styled.div`
    background: #fff;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 340px;
    margin: 20px 10px;
    padding: 20px;
    width: ${ props => props.isMobile ? '350' : '220' }px;;
`;

export const Image = styled.img`
    display: block;
    height: auto;
    margin: auto;
    max-height: 200px;
    max-width: 220px;
`;

export const Info = styled.div`
    height: 49px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Name = styled.span`
    font-family: Arial;
    font-weight: bold;
`;

export const Description = styled.span`
    font-family: Arial;
    font-weight: normal;
`;

export const Price = styled.p`
    font-family: Arial;
    font-size: 1.75em;
    font-weight: bold;
    margin: 10px 0;
`;

export const Buy = styled.button`
    background-color: #008000;
    border: 1px solid #8BC34A;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-family: Arial;
    font-weight: bold;
    margin: auto;
    padding: 10px 30px;
    text-align: center;
    width: 100%;
`;