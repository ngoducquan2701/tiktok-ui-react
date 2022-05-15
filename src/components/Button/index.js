import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    text,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    className = false,
    small,
    large,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    const cx = classNames.bind(styles);
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove listener events
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        small,
        large,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
