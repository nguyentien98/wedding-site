import React, { useState } from 'react';

import WishesItem from './WishesItem';
import { wishlist } from './wishlist-data';

function WishesContainer() {
  const [active] = useState(0);

  const renderWishlist = () => {
    return wishlist.map((w, index) => <WishesItem key={index} {...w} isActive={index === active} />);
  };

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
    </div>
  );
}

export default React.memo(WishesContainer);
