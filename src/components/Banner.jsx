import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
  const { image, imgAlt, bannerHeader } = props;
  return (
    <div className="banner">
      <img src={image} className="img-fluid" alt={imgAlt} />
      <h2 className="banner-header">{bannerHeader}</h2>
    </div>
  );
}

Banner.defaultProps = {
  image: '',
  imgAlt: 'Здесь могла бы быть картинка',
  bannerHeader: 'Безымянный баннер',
};

Banner.propTypes = {
  image: PropTypes.string,
  imgAlt: PropTypes.string,
  bannerHeader: PropTypes.string,
};

export default Banner;
