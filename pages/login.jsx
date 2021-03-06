import * as S from '../styled/Account'
import { useState } from 'react'
import axios from 'axios';
import { setCookies } from 'cookies-next';
import Link from 'next/link';

const LoginPage = () => {

    const [info, setInfo] = useState({email: "", password: ""});

    const clientId = "236232072754-81f153ainje620b38lonfi9u4r6qv3cc.apps.googleusercontent.com";

    const onSuccess = (res) => {
    	console.log(res.accessToken);
        setCookies('uolib_token', res.accessToken);
        //document.cookie = `uolib_token=${res.accessToken}`;
        //const { googleId, profileObj : { email, name } } = response;
        /*
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            email,
            nickname : name
        });*/
    }

    const onFailure = (error) => {
        console.log(error);
    }

    const login = () => {
        if(!info.email || !info.password){
            alert("로그인 정보를 모두 입력해주세요.");
        }
        else{
            axios.post('https://uolib.herokuapp.com/login', info)
                .then(res => {
                    setCookies('uolib_token', res.data);
                    //document.cookie = `uolib_token=${res.data}`;
                    alert("로그인 완료");
                    location.reload();
                })
                .catch(err => alert("잘못된 정보 입니다. " + err.status))
        }
    }

    const downEnter = (e) => {
        if(e.keycode === 13){
            login();
        }
    }

    return(
        <S.Background src="https://t1.daumcdn.net/cfile/tistory/99FEFF455E2112E632">
        <S.BackgroundFilter>
        <S.Body>
            <S.Tittle>로그인</S.Tittle>
            <S.Input placeholder="이메일" onChange={(e)=>setInfo({...info, email: e.target.value})} value={info.email}/>
            <S.Input placeholder="비밀번호" onChange={(e)=>setInfo({...info, password: e.target.value})} value={info.password} onKeyDown={(e)=>downEnter(e)} type="password"/>
            <S.LButton onClick={()=>login()}>로그인</S.LButton>
            <Link href="/signup">
            <S.SButton>회원가입</S.SButton>
            </Link>
            <S.GoogleLoginButton
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                buttonText="구글계정으로 로그인"
            />
        </S.Body>
        </S.BackgroundFilter>
        </S.Background>
    )
}
/*
LoginPage.getInitialProps = async function(context){
    const {id} = context.query;
    const res = await axios.post(`https://uolib.herokuapp.com/test`)
    const props = res.data;
    return {props}
}
*/
export default LoginPage


/*            <GoogleLogin
            className='google'
            clientId={clientId}
            onSuccess={responseGoogle}
            //onFailure={responseGoogle}
            //cookiePolicy={'single_host_origin'}
            >
            <span>구글 로그인</span>
            </GoogleLogin> */