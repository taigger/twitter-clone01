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
       <SidebarOption active Icon={HomeIcon} text="Home" navlink="/" />
       <SidebarOption Icon={SearchIcon} text="Exprole" navlink="/explore" />
       <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" navlink="/notification"/>
       <SidebarOption Icon={MailOutlineIcon} text="Messages" navlink="/message"/>
       <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" navlink="/bookmark"/>
       <SidebarOption Icon={ListAltIcon} text="Lists" navlink="/list"/>
       {/* <SidebarOption text="Profile"/> */}
       <SidebarOption Icon={MoreHorizIcon} text="More" navlink="/more"/>

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
            Tweet
        </Button>
    
    </div>

    );

}

export default Sidebar;