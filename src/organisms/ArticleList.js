import Article from './Article'
import Delete from '../atoms/Delete';
import Publish from '../atoms/Publish';
import Search from '../atoms/Search';
import style from '../styles/organisms.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function ArticleList({ articles }) {
    const [state, setState] = useState(
        articles.map((article, index) => (
            { id: index, article: article, checked: false }
        ))
    )
    const [parentState, setParentState] = useState(false)
    // React Paginate
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const handleChange = e => {
        const newState = state.map(item => (
                item.id === parseInt(e.target.id) ? { ...item, checked: !item.checked } : item
            ))
        setState(newState)
        setParentState(newState.every(item => item.checked))
    }
    const handleDelete = () => {
        setParentState(false)
        setState(
            state.filter(item => !item.checked)
        )
    }
    const handleCheckAll = e => {
        setParentState(!parentState)
        let newState = []
        if (!parentState) {
            newState = state.map(item => (
                !item.checked ? { ...item, checked: true } : item
            ))
        } else {
            newState = state.map(item => (
                item.checked ? { ...item, checked: false } : item
            ))
        }
        
        setState(newState)
    }
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % state.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(state.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(state.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, state])

    return (
        <>
            <div className={style.header}>
                <h1>News Articles</h1>
                <div className={style.header_searchbar}>
                    <div className={style.header_buttons}>
                        <input id='parent' type='checkbox' checked={parentState} onChange={handleCheckAll}></input>
                        <Publish />
                        <Delete onChange={handleDelete} />
                    </div>
                    <Search />
                </div>
            </div>
            <div className={style.article_list}>
                {
                    currentItems.map((e, index) => (
                        <div className={style.article} key={index}> 
                            <div className={style.article_buttons}>
                                <FontAwesomeIcon icon={faGripVertical} />
                                <input id={e.id} type='checkbox' checked={e.checked} onChange={handleChange}/>
                            </div>
                            <Article 
                                title = {e.article.title}
                                author = {e.article.author}
                                date = {e.article.date}
                                content = {e.article.content}
                                tags = {["Sports", "Worldwide", "Local"]}
                            />
                        </div>
                    ))
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default ArticleList;