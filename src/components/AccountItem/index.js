import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountItem() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('info-wrapper')}>
            <img
                className={cx('info-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e86867bdcd0d0fa4649f4731b60677ad~c5_100x100.jpeg?x-expires=1652756400&x-signature=N6OSwpnss3u19EnwsMi7%2BjYdpfU%3D"
                alt="hoa"
            />
            <div className={cx('info-user')}>
                <h4 className={cx('name')}>
                    <span>Đỗ Như Phương</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <p className={cx('user-name')}>@dnphuong</p>
            </div>
        </div>
    );
}

export default AccountItem;
