import { classNames } from 'shared/lib/className/classNames';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className,
        theme = AppLinkTheme.PRIMARY,
        children, ...otherProps
    } = props;

    return (
        <Link
            {...{ to }}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
