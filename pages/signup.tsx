import * as S from '../styled/Account'
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignUpPage = () => {

    const router = useRouter();

    const [info, setInfo] = useState({email: "", password: ""});
    const [check, setCheck] = useState({number: "", password: ""});
    const [edit, setEdit] = useState(true);

    const requestCertification = () => {
        const checkEmail = CheckEmail(info.email);

        if(checkEmail){
            axios.post("/certification/request", {email: info.email})
                .then(res => {
                    alert("요청 성공");
                    setEdit(false);
                })
                .catch(err => {
                    if(err.status === 400){
                        alert("요청 후 5분 뒤에 요청해 주세요.")
                    }
                    else{
                        alert("에러");
                    }
                })
        }
        else{
            alert("잘못된 형식의 메일입니다.")
        }
    }

    const checkCertification = () => {
        if(edit){
            axios.post("/certification/check", {email: info.email, number: check.number})
                .then(res => {
                    axios.post("/user", info)
                        .then(res => {
                            alert("환영합니다.")
                        })
                })
                .catch(err => alert("에러"))
        }
    }

    function CheckEmail(str: string){                                                 

        var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
        if(!reg_email.test(str)) {                            
            return false;         
        }                            
        else {                       
            return true;         
        }                            
    }   

    const signup = () => {
        axios.post('https://uolib.herokuapp.com/signup')
            .then(res => {
                alert("환영합니다.");
                router.push("/");
            })
            .catch(err => alert("에러"))
    }

    return(
        <S.Background src="https://i.ytimg.com/vi/_Zm5cUqE7hg/maxresdefault.jpg">
            <S.BackgroundFilter>
                <S.Body>
                    <S.Tittle>회원가입</S.Tittle>
                    <S.EmailDiv>
                    <S.Input placeholder='이메일' onChange={(e)=>{if(edit)setInfo({...info, email: e.target.value})}} value={info.email}/>
                    <button onClick={()=>requestCertification()}>인증</button>
                    </S.EmailDiv>
                    <S.EmailDiv>
                    <S.Input placeholder='인증번호' onChange={(e)=>setCheck({...check, number: e.target.value})} value={check.number}/>
                    <button onClick={()=>checkCertification()}>인증</button>
                    </S.EmailDiv>
                    <S.Input placeholder='비밀번호 (7~25)' type="password" onChange={(e)=>setInfo({...info, password: e.target.value})} value={info.password}/>
                    <S.Input placeholder='비밀번호 확인' type="password" onChange={(e)=>setCheck({...check, password: e.target.value})} value={check.password}/>
                    <S.LButton onClick={() => signup()}>회원가입</S.LButton>
                    <Link href="/login">
                        <S.SButton>로그인</S.SButton>
                    </Link>
                </S.Body>
            </S.BackgroundFilter>
        </S.Background>
    )
}

export default SignUpPage