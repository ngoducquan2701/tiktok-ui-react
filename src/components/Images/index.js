import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ alt, src, fallBack: srcFallBack = images.noImage, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleError = () => {
        setFallback(srcFallBack);
    };

    return (
        <img
            alt={alt}
            src={fallBack || src}
            ref={ref}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
