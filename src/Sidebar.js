import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SidebarOption from "./SidebarOption";
import { Button } from '@material-ui/core';
import "./sidebar.css";



function Sidebar() {

    return(

    <div className="sidebar">
        {/* twitter-icon */}
        <TwitterIcon className="sidebar__twitterIcon"/>
        {/* {0-slidebaroption} */}
       <SidebarOption active Icon={HomeIcon} text="Home"/>
       <SidebarOption Icon={SearchIcon} text="Exprole"/>
       <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
       <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
       <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
       <SidebarOption Icon={ListAltIcon} text="Lists"/>
       {/* <SidebarOption text="Profile"/> */}
       <SidebarOption Icon={MoreHorizIcon} text="More"/>

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
            Tweet
        </Button>
    
    </div>

    );

}

export default Sidebar;