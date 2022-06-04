import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Images';
import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    const cx = classNames.bind(styles);

    return (
        <Link to={`/@${data.nickname}`} className={cx('info-wrapper')}>
            <Image className={cx('info-avatar')} src={data.avatar} alt="hoa" />
            <div className={cx('info-user')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <p className={cx('user-name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
