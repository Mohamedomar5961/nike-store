import React from "react";
import axios from "axios";

const CartFav = () => {
  const [cartData, setCartData] = React.useState([]);
  const [favData, setFavData] = React.useState([]);

  const getFavorite = async () => {
    const result = await axios.get("https://api-test-mu.vercel.app/favorites");
    setFavData(result.data);
  };
  const getCart = async () => {
    const result = await axios.get("https://api-test-mu.vercel.app/cart");
    setCartData(result.data);
  };

  React.useEffect(() => {
    getCart();
    getFavorite();
  }, []);

  const onAddToBag = async (item) => {
    await axios.post(`https://api-test-mu.vercel.app/cart`, item);
    getCart();
    await axios.delete(`https://api-test-mu.vercel.app/favorites/${item._id}`);
  };

  return (
    <div className="cartFavBody">
      <h4 className="favH4">Favorite</h4>
      <div className="cartFavItems">
        {favData.map((item) => {
          return (
            <div className="cartFavItem" key={item._id}>
              <div className="cartFavItemImgDiv">
                <img src={item.imageUrl} />
              </div>
              <div className="cartFavItemInfoDiv">
                <div className="cartFavItemInfo">
                  <p className="cartFavItemTitle">{item.title}</p>
                  <p className="cartFavItemDescription">{item.description}</p>
                  <button
                    onClick={() => onAddToBag(item)}
                    className="cartFavItemBagBtn"
                  >
                    Add to Bag
                  </button>
                </div>
                <div className="cartFavItemPrice">
                  <p className="cartFavItemPriceP">${item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartFav;
