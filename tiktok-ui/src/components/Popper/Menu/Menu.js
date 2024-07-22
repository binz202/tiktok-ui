import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';
import HeaderLanguage from './HeaderLanguage';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu({ children, hideOnClick = false, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <HeaderLanguage title={current.title} onBack={handleBack} />
                )}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[8, 8]}
            placement="bottom-end"
            delay={[0, 800]}
            hideOnClick={hideOnClick}
            interactive
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            <span>{children}</span>
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
