import Tag from '../atoms/Tag'
import style from '../styles/molecules.module.css'

function Tags({ tags }) {
    return (
        <div className={style.tags}>
            {
                tags.map((tag, index) => (<Tag tag={tag} key={index}/>))
            }
        </div>
    );
}

export default Tags;