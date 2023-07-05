import React from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.mainLink}>
            <AppLink theme={AppLinkTheme.PRIMARY} to="/">Главная страница</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to="/about">о сайте</AppLink>
        </div>
    </div>
);
