import React, { Fragment } from 'react';
import Bride from '@assets/images/tien.jpg';
import Groom from '@assets/images/ly.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Thư mời tham gia lễ cưới</h2>
              <p className="info">
                Được sự đồng ý và ủng hộ của hai bên gia đình.
                Chúng em Tiến & Ly trân trọng kính mời anh chị em, bạn bè thân hữu cùng người thân,
                người thương đến tham dự lễ cưới của vợ chồng chúng em.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Nguyễn Văn Tiến</h3>
                <p className="parent-name parent-name__top">
                  Nguyễn Văn Ngọc<br />Tống Thị Hảo
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Nguyễn Thị Thúy Ly</h3>
                <p className="parent-name">
                  Nguyễn Văn Giang <br />Phạm Thị Hòa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HelloSection;
