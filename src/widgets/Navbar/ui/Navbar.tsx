import React from 'react';
import { classNames } from 'shared/lib/className/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.mainLink}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    {t('о сайте')}
                </AppLink>
            </div>
        </div>
    );
};
