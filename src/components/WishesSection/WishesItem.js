import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';
import qr from '@assets/images/qr.jpg';
function WishesItem({ image, name, infoName, description, isActive }) {
  if (!isActive) return null;

  const renderItem = () => {
    return (
      <div className="item" css={styWrapperItem}>
        <div className={`testimony-slide text-center ${isActive ? 'active' : 'hide'}`}>
          <figure>
            <img src={image} alt="user" loading="lazy" />
          </figure>
          <h4>{name}</h4>
          <span className="infoName">{infoName}</span>
          <blockquote>
            <p className="description">
              {description}
              <br />
              <br />
              Trong trường hợp anh chị muốn gửi tặng món quà nhỏ cho đôi vợ chồng son, vui lòng sử dụng mã QR bên dưới.
            </p>
          </blockquote>
          <img src={qr} alt="qr" loading="lazy" style={{width: "200px"}} />
          <p style={{fontWeight: "bold", fontSize: "18px", color: "green"}}>
            Vietcombank <br />
            0491000103883
          </p>
        </div>
      </div>
    );
  };

  return <div css={styWithAnimation(isActive)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  infoName: string.isRequired,
  description: string.isRequired,
  isActive: bool.isRequired,
};

export default React.memo(WishesItem);
