import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Lễ thành hôn" time="Khách sạn Hà Quế - TT. Hát Lót - Mai Sơn - Sơn La" date="10:30, thứ 3 ngày 03/10/2023" />
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Thời gian và địa điểm</h2>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(WeddingSection);
