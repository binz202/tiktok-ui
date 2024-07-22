import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, iconActive }) {
    return (
        <NavLink
            to={to}
            className={(nav) => {
                return cx('menu-item', { active: nav.isActive });
            }}
        >
            {({ isActive }) => (
                <>
                    {isActive ? iconActive : icon}
                    <span className={cx('title')}>{title}</span>
                </>
            )}
            {/* {icon}
            <span className={cx('title')}>{title}</span> */}
        </NavLink>
    );
}

MenuItem.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
