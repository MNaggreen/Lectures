import { useParams, Link } from 'react-router-dom';
import './singleComicPage.scss';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useMarvelService from '../../services/MarvelService'
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import xMen from '../../resources/img/x-men.png';


const SingleComicPage = () => {
    const {comicId} = useParams();
    console.log(comicId);
    // здесь выведется comicId: '8416'
    // текущий Id нашего комикса

    const [comic, setComic] = useState(null);

    const { loading, error, getComic, clearError } = useMarvelService()
  /* создаем экземпляр класса тут будет храниться потом класса */

    useEffect(() => {
        updateComic()
    }, [comicId]);

        const updateComic = () => {
            clearError()
            getComic(comicId) 
              .then(
                onComicLoaded
              ) 
          }
        
          const onComicLoaded = (comic) => {
            setComic(comic)            
          }

            const errorMessage = error ? <ErrorMessage /> : null; /* если ошибка есть */
            const spinner = loading ? <Spinner /> : null; /* если загрузка */
            const content = !(loading || error || !comic) ? (
            <View comic={comic} comicId={comicId} /* checkImg={checkImg} */ />
  ) : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}            
        </>
    )
}

const View = ({ comic }) => {
    const { title, description, thumbnail, pageCount, price, id } = comic;
    // const { comicIds } = comicId;
    let titleUrl = title.replace(/[()#]/g, '')
    // подготавливаем id для перехода на сайт марвел!
    titleUrl = titleUrl.replace(/ +/g, '_')
    // We used the plus + symbol to match one or more occurrences of 
    // a space and replaced multiple spaces with a single space.

    return (
      <div className="single-comic">     
            <Link to={`https://www.marvel.com/comics/issue/${id}/${titleUrl}`}><img src={thumbnail || xMen} alt={title} className="single-comic__img"/></Link>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: en-us</p>
                <div className="single-comic__price">{price}</div>
                <Link className="single-comic__link" to={`https://www.marvel.com/comics/issue/${id}/${titleUrl}`}><span className="single-comic__price">CLICK HERE</span> to open this specific MARVEL Comic Page<br/>or... Just click the comic thumbnail!</Link>
            </div>
            <Link to="/comics">Back to all</Link>
      </div>
    )
  }

export default SingleComicPage;