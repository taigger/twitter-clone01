import './App.css';
import React, {useState,useEffect} from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Explore from "./explore";

import { getAuth, onAuthStateChanged } from 'firebase/auth';


import fire from './firebase';
import 'firebase/compat/auth';
import Login from './login';

const auth = getAuth();


function App() {

    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount] = useState(false);


    function clearInput(){
      setEmail('');
      setPassword('');
    };

    function clearErrors(){
      setEmailError('');
      setPasswordError('');
    };

    function handleLogin(){
        fire.auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
    };

    function handleSignup(){
      clearErrors();
      fire.auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/email-already-in-use":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });

    };

    function handleLogout(){
      fire.auth.signOut();
    };

    function authListener(){
      onAuthStateChanged(auth,user =>{
      if(user){
        clearInput();
        setUser(user);
      }else{
        setUser("");
      }
      });
    };

    useEffect(()=>{
      authListener();
    },[] );


  return (
    <div className="app">

    {/* //サイドバー  */}
   
    {/* メイン */}
    <Router>
    <Sidebar />
      <Routes>
        <Route exact path="/" element={<Feed />}/>
        <Route exact path="/explore" element={<Explore/>}/>
      </Routes>
      <Widgets />
    </Router>
    {/* ウィジェット（右側） */}
    

    </div>
  );
}

export default App;
