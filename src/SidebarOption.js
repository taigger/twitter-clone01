import React from 'react';
// スライドバー用のCSSを作成
import "./sidebarOption.css";

function SidebarOption({active,text, Icon }){

    return(
        // これはなんぞや？ 　状態＆＆CSS　でその状態のときのｃｓｓを指定することができる
        <div className={`sidebarOption ${active && 'sidebarOption-active'}`}>
            <Icon /><h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;