import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 30px;
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const BTittle = styled.b`
    margin-bottom: 10px;
`

export const Tittle = styled.input`
    display: block;
    outline: 0;
    padding: 12px 10px;
    font-size: .875rem;
    line-height: 1.25;
    color: #495057;
    background-color: #f8f9fa;
    border: 1px solid rgba(0,0,0,0.15);
`

export const SelectDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Select = styled.div`
    width: 200px;
    height: 35px;
    background-color: #f8f9fa;
    border: 1px solid rgba(0,0,0,0.15);
    margin: 30px 0px;
`

export const TextDiv = styled.div`
    border: 1px solid rgba(0,0,0,0.15);
    .text{
        resize: vertical;
        min-height: 500px;
        outline: 0;
        display: block;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
`

export const RTittle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    b{
        margin-bottom: 5px;
    }
    span{
        color: dimgray;
        font-size: 13px;
    }
    margin-bottom: 10px;
`

export const Review = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    min-height: 300px;
    border: 1px solid rgba(0,0,0,0.15);
    outline: 0;
    padding: 10px;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 80px;

    button{
        font-size: 17px;
        display: inline-block;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.75rem 0.75rem;
        width: 200px;
        font-size: .875rem;
        line-height: 1.25;
        border-radius: 2px;
        transition: all .15s ease-in-out;

        i{
            margin-right: 5px;
        }
    }
`

export const CheckButton = styled.button`
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    margin-right: 20px;
}
`

export const RegistButton = styled.button`
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
`

export const SettingDiv = styled.div`
    background-color: #eee;
    padding: 10px;
    display: flex;
`

interface SettingProps{
    selected?: boolean
}

export const Setting = styled.button<SettingProps>`
    background: ${props => props.selected ? "#e9ecef" : "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.15);
    width: 35px;
    height: 35px;
    border-radius: 3px;
    margin-right: 5px;

    svg{
        width: 20px;
        height: 20px;
    }
`

export const SettingButton = styled.div`
    display: flex;
    flex-direction: column;
`

export const SettingSelectDiv = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 40px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 1px 0.5px rgba(0, 0, 0, 0.3);

    :last-child{
        border-bottom: 0;
    }
`

export const SettingSelect = styled.div`
    padding: 5px 10px;
    width: 100px;
    font-size: 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
`

export const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
` 

export const ImageDiv = styled.div`
    background: white;
    width: 330px;
`

export const ImageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    h2{
        font-weight: 300;
        margin: 0;
    }
    svg{
        cursor: pointer;
    }
`

export const ImageBody = styled.div`
    background: #f8f9fa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    span{
        font-size: 15px;
        margin-bottom: 5px;
    }
`

export const ImageBottom = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;

    button{
        color: white;
        background-color: #007bff;
        border: 1px solid #007bff;
        padding: 10px;
    }
`