import React from 'react';
import { object, string } from 'prop-types';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import { styWrapper, styHero, styBackground } from './styles';

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center welcome-section">
              <img src={WeddingImg} alt="wedding-dinda-indra" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Văn Tiến <span className="title-separator">&amp;</span> <span className="title-bride">Thúy Ly</span></h1>
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  location: object.isRequired,
  codeLink: string,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
