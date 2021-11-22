import React from 'react';
// スライドバー用のCSSを作成
import "./sidebarOption.css";
import {Link} from 'react-router-dom';

function SidebarOption({
    active,
    text, 
    Icon,
    navlink}){

    return(
        // これはなんぞや？ 　状態＆＆CSS　でその状態のときのｃｓｓを指定することができる
        <div className={`sidebarOption ${active && 'sidebarOption-active'}`}>
            <Icon /><h2><Link to ={navlink}>{text}</Link></h2>
        </div>
    );
};

export default SidebarOption;