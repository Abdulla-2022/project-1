import React from "react";
import s from './Header.module.css';
import logo from "../../images/logo.png";
import youTube from "../../images/icon-youtube.png";
import vk from "../../images/icon-vk.png";

const Header = () => {
    return(
        <div className={s.container}>
            <div className={s.contentHeader}>
                <div className={s.logo}>
                    <img src={logo}/>
                </div>
                <div className={s.navHeader}>
                    <ul>
                        <li>Главная</li>
                        <li>О клубе</li>
                        <li>Новости</li>
                        <li>Услуги</li>
                        <li>Цена</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={s.iconHeader}>
                    <img src={youTube}/>
                    <img src={vk}/>
                </div>
            </div>
        </div>
    )
}

export default Header;