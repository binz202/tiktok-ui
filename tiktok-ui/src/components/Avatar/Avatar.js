import React from 'react';
import styles from './Avatar.module.scss';

import PropTypes from 'prop-types';

function Avatar({ width, src, className }) {
    return (
        <>
            <img
                className={className}
                style={{ width: width }}
                src={src}
                alt="picture"
            />
        </>
    );
}
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Avatar;
