import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.jsx";

import SHOP_DATA from "../../shopData.js";

function ShopPage() {
  return (
    <div className="shop-page">
      {SHOP_DATA.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
}

export default ShopPage;
