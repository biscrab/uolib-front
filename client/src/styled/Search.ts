import styled from 'styled-components'

type BannerProps = {
    background: string
}

export const Banner = styled.div<BannerProps>`
    width: 100%;
    height: 150px;
    background-color: ${props => props.background};
`

export const Body = styled.div`
    width: 1200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    @media screen and (max-width: 1200px){
        width: 100%;
        padding: 0px 10px;
    }
`

export const Search = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 2px solid darkgray;
    height: 50px;
    padding: 0px 10px;
    box-sizing: border-box;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: bold;
`

export const SelectDiv = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    a{
        width: 100%;
    }
`

export const CategoryDiv = styled.ul`
    padding: 0;
    cursor: pointer;
    display: flex;
    border-bottom: 1px solid #eee;
    margin: 0;
    overflow-x: auto;
`

interface SelectedProps{
    selected: boolean
}

export const Category = styled.li<SelectedProps>`
    list-style: none;
    padding: 10px;
    font-size: 14px;
    color: ${props => props.selected ? "white" : ""};
    background-color: ${props => props.selected ? "#5a35cd" : ""};
`

export const Select = styled.div<SelectedProps>`
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    border-bottom: 2px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
    border: ${props => props.selected ? "1px solid #333" : ""};
    border-bottom: ${props => props.selected ? "none" : "1px solid #333"};
`

export const ResultSpan = styled.div`
    margin: 20px 0px;
    font-weight: bold;
`

export const Result = styled.div`
    margin-top: 30px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    color: #333;
    border-bottom: 2px solid #333;
    div{
        display: flex;
        b{
            margin-right: 15px;
            font-size: 14px;
            cursor: pointer;
        }
    }
`

export const List  = styled.ul`
    padding: 0;
    margin: 0;
    height: 1000px;
    list-style: none;
`

export const TagListDiv = styled.ul`    
    width: 100%;
    height: 1000px;
`

export const TagList = styled.li`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    b{
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    ul{
        list-style: none;
        margin-top: 10px;
    }
`

export const Tag = styled.div`
    color: #000;
    border: 2px solid #333;
    border-radius: 20px;
    padding: 1px 8px;
    line-height: 20px;
    float: left;
    margin: 3px 2px;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
`