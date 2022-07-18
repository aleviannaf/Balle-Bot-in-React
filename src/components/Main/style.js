import styled from "styled-components";

export const Conteudo = styled.main`
  margin-bottom: 48px;
  border-top: 0.4px solid #FFF2E7 ;
`

export const ConteudoPrincipal = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  img{
    height: 430px;
  }

  @media (max-width: 974px){
    flex-direction: column-reverse ;
  }

  @media (max-width: 370px){
    img{
      height: 200px;
    }
  }
`
export const ConteudoPrincipalEscrito = styled.div`
     display: flex;
    flex-direction: column;
    gap: 32px;

    h1{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 4.5rem;
        line-height: 79px;
        color: #FFF2E7;  
    }

    h2{
        font-family: 'Sarala';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 39px;

  color: #ECD6C4;
    }

    @media (max-width: 974px){
      align-items: center;

      h2{
        text-align: center;
      }
    }

`

export const ConteudoSecundario = styled.section`
     display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;

    h3{
        border-top: 0.4px solid #FFF2E7;
        padding-top: 48px;
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        text-align: center;

        color: #FFF2E7;
    }

    p{
        font-family: 'Sarala';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 29px;
        text-align: center;

        color: #ECD6C4;
    }
`