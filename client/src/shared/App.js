import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import * as P from  '../pages'
import Header from '../contents/Header'
import Footer from '../contents/Footer'
import * as S from '../styled/App'
import axios from 'axios';

function App() {

  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    axios.get('https://michinjin.herokuapp.com/notice/1')
      
  },[])

  useEffect(()=>{
    window.scroll(0, 0);
    if(!location.pathname.includes("/viewer")){
      document.body.style.backgroundColor = "white";
    }
  },[location.pathname])

  return (
    <>
      {!location.pathname.includes("/viewer") ?
      <Header />
      :
      <></>
      }
      <Routes>
        <Route exact path="/novel/:id" element={<P.Novel />}/>
        <Route exact path="/new" element={<P.New />}/>
        <Route exact path="/search/:type/:keyword/:page" element={<P.Search />} />
        <Route exact path="/search/:type/:keyword" element={<P.Search />} />
        <Route exact path="/search/:type" element={<P.Search />} />
        <Route exact path="/search" element={<P.Search />}/>
        <Route exact path="/free/:type/:category" element={<P.Serialize/>}/>
        <Route exact path="/free/:type" element={<P.Serialize/>}/>
        <Route exact path="/free" element={<P.Serialize/>}/>
        <Route exact path="/plus/:type/:category" element={<P.Serialize/>}/>
        <Route exact path="/plus/:type" element={<P.Serialize/>}/>
        <Route exact path="/plus" element={<P.Serialize/>}/>
        <Route exact path="/readers/:type" element={<P.Readers />}/>
        <Route exact path="/readers" element={<P.Readers />}/>
        <Route exact path="/readers/view/:id" element={<P.ReadersView />}/>
        <Route exact path="/mybook" element={<P.MyBook />}/>
        <Route exact path="/mybook/:type" element={<P.MyBook />}/>
        <Route exact path="/top100/:type" element={<P.Top100/>}/>
        <Route exact path="/top100" element={<P.Top100/>}/>
        <Route exact path="/login" element={<P.Login />} />
        <Route exact path="/signup" element={<P.SignUp />} />
        <Route exact path="/write" element={<P.Write />} />
        <Route exact path="/alarm" element={<P.Alarm />} />
        <Route exact path="/alarm/:type" element={<P.Alarm />} />
        <Route exact path="/viewer/:id/:list" element={<P.Viewer />} />
        <Route exact path="/viewer/:id" element={<P.Viewer />} />
        <Route exact path="/user/:id" element={<P.User />} />
        <Route exact path="/plus_shop" element={<P.PlusShop/>}/>
        <Route exact path="*" element={<P.Main />}/>
      </Routes>
      <Footer />
      {loading ?
      <S.LoadingBackground>
      <div class="spinner-border text-secondary" style={{width: "4rem", height: "4rem"}} role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <S.LoadingText>로딩중...</S.LoadingText>
      </S.LoadingBackground>
      :
      <></>
      }
    </>
  );
}

export default App;
