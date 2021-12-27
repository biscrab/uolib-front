import * as S from '../styled/Search'
import { NavLink, useParams } from 'react-router-dom';

const SerializePage = () => {

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명"}];
    const clist = ["공모전", "판타지", "현대", "라이트노벨", "하렘", "일상", "중세", "TS", "전생", "로맨스", "먼치킨", "아카데미", "SF", "드라마", "코미디", "이세계", "순애", "빙의", "남성향", "몸으로하는스포츠"]
    const params = useParams();

    const Category = () => {
        return(
            <>
            {clist.map(
                i => {
                    return(
                        <S.Category selected={i === params.category}>{i}</S.Category>
                    )
                }
            )}
            </>
        )
    }

    return(
        <>
        <S.Banner />
        <S.Body>
            <S.SearchTypeDiv>
                <S.SearchType selected={params.type === "/"}>전체</S.SearchType>
                <S.SearchType selected={params.type === "/"}>독점</S.SearchType>
                <S.SearchType selected={params.type === "/"}>신작</S.SearchType>
                <S.SearchType selected={params.type === "/"}>완결</S.SearchType>
            </S.SearchTypeDiv>
            <S.Result>
                <b>총 0개의 작품</b>
                <div>
                    <div>
                        <b>공개일자 순</b>
                    </div>
                <div>
                    <b>조회순</b>
                </div>
                <div>
                    <b>추천순</b>
                </div>
                </div>
            </S.Result>
            <S.CategoryDiv>
                <S.Category selected={!params.category}>전체</S.Category>
                <Category />
            </S.CategoryDiv>
            <S.List>
                {lists.map(
                    i => {
                        return(
                        <S.Book>
                            <NavLink to="/novel">
                                <S.BookCover src={i.image}/>
                            </NavLink>
                            <S.BookInfo>    
                                <NavLink to="/novel">
                                    <b>{i.title}</b>
                                </NavLink>
                                <S.Explane>{i.explane}</S.Explane>
                                <S.Info>
                                    <img src="https://novelpia.com/img/new/icon/count_view.png"/>
                                    <span>104.3K명</span>
                                    <img src="https://novelpia.com/img/new/icon/count_book.png"/>
                                    <span>515회차</span>
                                    <img src="https://novelpia.com/img/new/icon/count_like.png"/>
                                    <span>8.0K회</span>
                                </S.Info>
                            </S.BookInfo>
                        </S.Book>
                    )
                }
            )}
        </S.List>
    </S.Body>
    </>
    )
}

export default SerializePage