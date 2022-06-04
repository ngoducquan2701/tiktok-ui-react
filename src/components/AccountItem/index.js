import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Images';

function AccountItem() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('info-wrapper')}>
            <Image
                className={cx('info-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1654412400&x-signature=LGZVEzqS9HF3iNGtFc3tnK%2Bb%2F%2F0%3D"
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
