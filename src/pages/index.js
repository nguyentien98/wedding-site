import React, { Fragment, useEffect } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import PhotoSection from '@components/PhotoSection/Loadable';
import WishesSection from '@components/WishesSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  useEffect(() => {
    if (typeof document === "undefined") return
    if (document.getElementById('myAudio')?.currentTime !== 0 && document.getElementById('myAudio')?.currentTime !== undefined) return

    document.addEventListener('scroll', () => {
      if (document.getElementById('myAudio').currentTime !== 0) return
      document.getElementById('audioControl').click()
      document.getElementById('audioControl').click()
    })
  });

  const renderDetailContent = () => {
    return (
      <Fragment>
        <HelloSection />
        <WeddingSection />
        <PhotoSection />
        <WishesSection />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        location={location}
        codeLink={finalTicketLink}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
