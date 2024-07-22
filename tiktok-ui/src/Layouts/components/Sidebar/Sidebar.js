import React from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu/';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupsIcon,
    UserGroupsActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupsIcon />}
                    iconActive={<UserGroupsActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    iconActive={<LiveActiveIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
