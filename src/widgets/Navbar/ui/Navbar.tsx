import React from 'react';
import {classNames} from "shared/lib/className/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwithcer";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.mainLink}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Главная страница</AppLink>
                <AppLink  theme={AppLinkTheme.PRIMARY} to={'/about'}>о сайте</AppLink>
            </div>
        </div>
    );
};