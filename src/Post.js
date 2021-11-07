import React from 'react';
import "./post.css";
import {Button,Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

// うまく呼び出せないので関数を定義します
// import avaterImg from "./img/image0.jpeg";
// import post1Img from "./img/picture1-min.jpg";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}){

    return(
        <div className="post">
            <Avatar src={avatar} className="post__avatar"/>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                        {displayName}
                        <span>{verified && <VerifiedUserIcon className="post__badge"/>}{username}</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                    {/* 　上記で定義した関数から呼び出しています */}
                </div>
                <img src={image}></img>
            </div>
        </div>
    );

};

export default Post;