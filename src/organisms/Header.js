import Delete from '../atoms/Delete';
import Publish from '../atoms/Publish';
import Search from '../atoms/Search';
import style from '../styles/organisms.module.css'

function Header() {
    return (
        <div className={style.header}>
            <h1>News Articles</h1>
            <div className={style.header_searchbar}>
                <div className={style.header_buttons}>
                    <input type='checkbox'></input>
                    <Publish />
                    <Delete />
                </div>
                <Search />
            </div>
        </div>
    );
}

export default Header;