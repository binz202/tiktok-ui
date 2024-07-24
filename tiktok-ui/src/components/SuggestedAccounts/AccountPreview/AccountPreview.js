import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cd995c1d0cc29b16b1f974dfbd71a6ae.jpeg?lk3s=a5d48078&nonce=70571&refresh_token=211a7a528669672c09b8d989c9974a64&x-expires=1721919600&x-signature=s57%2F5RSJOkXPqiIvV7JINIZVe6o%3D&shp=a5d48078&shcp=81f88b70"
                    width="44px"
                />
                <Button className={cx('btn-following')} outline_primary small>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    trandiep204
                    <FontAwesomeIcon
                        className={cx('iconcheck')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('name')}>Diệp 1m71</p>
            </div>

            <p className={cx('thongso')}>
                <strong className={cx('value')}>6.7M</strong>
                <span className={cx('label')}>Follower </span>
                <strong className={cx('value')}>8.7M</strong>
                <span className={cx('label')}> Likes</span>
            </p>
            <p className={cx('decibe')}>Anh đã wuayy trở nạiiii 😼</p>
        </div>
    );
}

export default AccountPreview;
