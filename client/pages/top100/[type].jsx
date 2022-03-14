import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../../styled/Top100'
import { NextPage } from 'next';
import Link from 'next/link';
import {useRouter} from 'next/router'
/*
type BookType = {
    id: number,
    title: string,
    author: string,
    image: string
}*/

const Top100Page = ({props}) => {

    const router = useRouter()
    const {type} = router.query;

    useEffect(()=>{
        //axios.get(location.pathname)

    },[])

    const [lists, setLists] = useState([
        {id: 1, title: "1", author: "1123123123", image: "https://image.novelpia.com/img/layout/readycover4.png"},
    ]);

    return(
        <S.Body>
            <S.SelectDiv>
                <Link href={"/top100/all"}>
                    <S.Select selected={type === "all" || !type}>전체</S.Select>
                </Link>
                <Link href={"/top100/monopoly"}>
                    <S.Select selected={type === "monopoly"}>독점</S.Select>
                </Link>
                <Link href={"/top100/new"}>
                    <S.Select selected={type === "new"}>신작</S.Select>
                </Link>
                <Link href={"/top100/complete"}>
                    <S.Select selected={type === "complete"}>완결</S.Select>
                </Link>
            </S.SelectDiv>
            <S.List>
                {props.data[0] ?
                <>
                {props.data.map(
                (i, index) => {
                    return(
                        <div key={index}>
                        <S.Book>
                            <S.Rank>{index + 1}</S.Rank>
                            <Link href="/novel/1">
                            <S.BookImgDiv>
                                <img src={i.image}/>  
                            </S.BookImgDiv>
                            </Link>
                            <b>{i.title}</b>
                            <Link href="/user/1">
                                <S.Author>{i.author}</S.Author>
                            </Link>
                            <S.TypeDiv>
                                <S.Type color='#5232dd'>PLUS</S.Type>
                                <S.Type color='#166d95'>자유</S.Type> 
                                <S.Type color='#0d60d1'>독점</S.Type>
                                <S.Type color='black'>완결</S.Type>  
                            </S.TypeDiv>
                        </S.Book>
                        </div>
                    )
                })}
                </>
                :
                <S.Null>
                    작품이 존재하지 않습니다.
                </S.Null>
                }
            </S.List>
        </S.Body>
    )
}

Top100Page.getInitialProps = async function(content){
    const {type} = content.query;
    const res = await axios.get(`https://uolib.herokuapp.com/top100/${type ? type : "all"}`);
    const data = await res.data;
    return{
        props: {data}
    }
}

export default Top100Page