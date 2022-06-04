import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';

const cx = classNames.bind(styles);

function SearchInput() {
    const [visible, setVisible] = useState([]);
    const [searchShow, setSearchShow] = useState('');
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setVisible([1, 2]);
        }, 1000);
    }, []);

    const handleClear = () => {
        setSearchShow('');
        setVisible([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResults(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResults && visible.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-accounts')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchShow}
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => {
                            setSearchShow(e.target.value);
                        }}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchShow && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        /* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */
                    )}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchInput;
