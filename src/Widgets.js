import React from 'react';
import './Widgets.css';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTweetEmbed,TwitterTimelineEmbed} from 'react-twitter-embed';

function Widgets(){

    return(
        <div className="widgets">

            <div className="widgets__input">
                    <SearchIcon/>
                    <input placeholder="SearchTwitter"></input>
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's Happened?</h2>
                <TwitterTweetEmbed tweetId='1455391108997922822'/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="HideNavi1390"
                options={{height: 400}}
                />
            </div>
        </div>

    );
}

export default Widgets;