import React ,{useState,useEffect} from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import AvaterHanako from "./img/kadai__img__019.jpg";
import avaterImg from "./img/image0.jpeg";
import post1Img from "./img/picture1-min.jpg";
import db from "./firebase";

function Feed(){

    // ここからユーズステートの出番ですよ
    const [post, setPost] = useState([]);

    useEffect(() => {
        db.collection('post').onSnapshot(snapshot =>(
            setPost(snapshot.docs.map(doc => doc.data()))
        ))
    },[]);

    return(
        <div className="feed">
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            
            <TweetBox/>
            {post.map(post => (
            <Post
             displayName={post.displayName}
             username={post.username}
             verified={post.verified}
             text={post.text}
             image={post.image}
             avatar={post.avatar}
             />
            ))}
            <Post　
            displayName='Hanako' 
            username='hana'
            verified={false}
            text='Hello New World!!'
            image='https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            avatar={AvaterHanako}/>
            <Post/>
            <Post/>
        </div>
        
    );
// tweetbox

    }

export default Feed;