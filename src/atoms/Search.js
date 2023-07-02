import style from '../styles/atoms.module.css'

function Search() {
    return (
        <input className={style.search} type="text" placeholder="Search..."></input>
    );
}

export default Search;