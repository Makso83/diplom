import React from 'react';
import PropTypes from 'prop-types';

function CollectionCard(props) {
  const { title, price, images } = props.item;
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <div className="img-container">
          <img
            src={images[0]}
            className="card-img-top img-fluid"
            alt={title}
          />
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{`${price} руб.`}</p>
          <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  );
}

CollectionCard.propTypes = {

};

export default CollectionCard;
