import styled from 'styled-components'

export const ShopDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    background-color: #704bfa;
    color: white;
    padding: 10px 0px;
    font-size: 18px;
    div{
        width: 500px;
        display: flex;
        justify-content: space-between;
    }
    span{
        cursor: pointer;
    }
`

export const Banner = styled.div`
    height: 250px;
    background: #eee;
`

export const Body = styled.div`
    position: relative;
    margin-top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
`

export const Tittle = styled.h3`
    font-weight: bold;
    margin-bottom: 30px;
`

export const MemberShipDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 100px;
`

export const MemberShip = styled.div`
    border: 2px solid #704bfa;
    width: 30%;
    height: 250px;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h4{
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 15px;
        color: #333;
        cursor: pointer;
    }
    input{
        margin-right: 5px;
    }
    button{
        border: 0;
        background: #704bfa;
        color: white;
        width: 100%;
        padding: 5px 0px;
        font-size: 18px;
        border-radius: 3px;
    }
`

export const MemeberShipExplane = styled.span`
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 0px 30px;
`

export const Guidance = styled.div`
    width: 100%;
    margin-bottom: 100px;
    border: 1px solid #ddd;
    padding: 30px 50px;
    background: #f6f6f6;
    box-sizing: border-box;
    list-style: inside;
    h3{
        margin-bottom: 20px;
    }
    li{
        font-size: 14px;
        padding: 3px 0px;
        color: #777;
    }
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`

export const Payment = styled.div`
    background-color: white;
    padding: 20px;
    width: 500px;
    height: 400px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
`

export const PaymentHead = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #333;
    svg{
        cursor: pointer;
    }
`

export const PriceDiv = styled.div`
    border: 1px solid gray;
    background: #eee;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

export const MethodDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    div{
        width: 33.3%;
        height: 80px;
        border: 1px solid gray;
    }
`

export const CoinDiv = styled.div`
`