import React,{useState} from 'react';
import "./TweetBox.css";
import {Button,Avatar} from "@material-ui/core";
import db from './firebase';

function TweetBox(){

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('post').add({
            displayName:'taiga',
            userName: "Taiggat",
            verified: true ,
            text: tweetMessage ,
            image: tweetImage ,
            avater: "https://i.ibb.co/fNRt9Tj/958-D1363-9920-47-DC-AEEB-1-D8-B3904762-A.jpg"
        })
    }

    return(

        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar alt="Tora" src="./img/image0.jpeg"/>
                    <input 
                    onChange={e=>setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="Whath's appenning?"></input>
                </div>
                <input 
                onChange={e=>setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox_imageInput" placeholder="Enter Image URL" type="text"></input>
                <Button type="submit" onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>

    );
};

export default TweetBox;