import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cd995c1d0cc29b16b1f974dfbd71a6ae.jpeg?lk3s=a5d48078&nonce=83622&refresh_token=6725d30d560f60acd13734a787451dcc&x-expires=1721876400&x-signature=MCE2IBqHjZcvxerNUZliOvojRAQ%3D&shp=a5d48078&shcp=81f88b70"
                        alt="Trần Diệp"
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            trandiep204
                            <FontAwesomeIcon
                                className={cx('iconcheck')}
                                icon={faCheckCircle}
                            />
                        </h4>
                        <p className={cx('name')}>Diệp 1m71</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
// 14:33

AccountItem.propTypes = {};

export default AccountItem;
