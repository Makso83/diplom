import React, { useRef } from 'react';
import nophoto from '../img/nophoto.png';
import { NavLink } from 'react-router-dom';

function CollectionCard(props) {
  const { title, price, images, id } = props.item;
  const picture = useRef();

  const noPhoto = () => {
    picture.current.src = nophoto;
  };

  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <div className="img-container">
          <img
            src={images[0]}
            className="card-img-top img-fluid"
            alt={title}
            ref={picture}
            onError={noPhoto}
          />
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{`${price} руб.`}</p>
          <NavLink to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</NavLink>
        </div>
      </div>
    </div>
  );
}

CollectionCard.propTypes = {

};

export default CollectionCard;
