import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

function Sidebar() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <h1>side bar</h1>
        </div>
    );
}

export default Sidebar;
