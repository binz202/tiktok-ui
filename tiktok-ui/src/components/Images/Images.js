import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from '~/assets/images/Images.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(
    (
        {
            className,
            src,
            alt,
            fallback: customfallback = images.image,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customfallback);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                {...props}
                src={fallback || src}
                alt={alt}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
