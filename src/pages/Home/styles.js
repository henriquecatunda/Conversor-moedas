import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 15px 0;
`;

export const Title = styled.div`
 
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    color: #171717;
    

    @media (max-width: 425px){
       font-size: 16px;
    }
    
`;


export const Card = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    background-color:  #FFFFFF;
    margin: 15px  auto;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    flex-direction: column;
    padding: 45px 55px;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;


export const TagMoeda = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    flex-direction: column;
  
`;

export const Tag = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

export const TitleMessage = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    color: red;
    margin-top: 15px;
`;