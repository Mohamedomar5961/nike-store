import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { favorite } from "../Feature/favorites";
import { cart } from "../Feature/cart";

const Item = () => {
  const info = useSelector((state) => state.info.value);
  const [data, setData] = React.useState([]);
  const [cartData, setCartData] = React.useState([]);
  const [checkIfFav, setCheckIfFav] = React.useState(false);
  const dispatch = useDispatch();

  const getFavorite = async () => {
    const result = await axios.get("https://api-test-mu.vercel.app/favorites");
    setData(result.data);
  };
  const getCart = async () => {
    const result = await axios.get("https://api-test-mu.vercel.app/cart");
    setCartData(result.data);
  };

  dispatch(favorite({ count: data.length }));
  dispatch(cart({ count: cartData.length }));

  const countDispatcher = () => {
    dispatch(cart({ count: cartData.length }));
  };
  // const favDispatcher = () => {
  //   dispatch(favorite({ count: data.length }));
  // };

  React.useEffect(() => {
    getFavorite();
    getCart();
    countDispatcher();
    // favDispatcher();
  }, []);

  const onFavorite = async (e) => {
    e.preventDefault();
    await axios.post("https://api-test-mu.vercel.app/favorites", info);
    getFavorite();
    setCheckIfFav(!checkIfFav);
  };

  const onUnFavorite = () => {
    data.filter((item) => {
      if (item.id === info.id) {
        axios.delete(`https://api-test-mu.vercel.app/favorites/${item._id}`);
        getFavorite();
        setCheckIfFav(!checkIfFav);
        // favDispatcher();
      }
    });
  };

  const onAddToBag = async (e) => {
    e.preventDefault();
    await axios.post("https://api-test-mu.vercel.app/cart", info);
    getCart();
    countDispatcher();
  };

  return (
    <div className="productPage">
      <div className="product">
        <div className="product__image">
          <div className="imageDiv">
            <img src={info.imageUrl} />
          </div>
        </div>
        <div className="product__info">
          <div className="product_Info">
            <div className="productInfo">
              <p className="infoTitle">{info.title}</p>
              <p className="infoDescription">{info.description}</p>
              <p className="infoPrice">${info.price}</p>
            </div>
            <div className="productSize">
              <p className="size">Select Size</p>
              <div className="sizeButtons">
                <button checked="checked">S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>2XL</button>
              </div>
            </div>
            <div className="productButton">
              <button onClick={onAddToBag} className="addToBagBtn">
                <p>Add to Bag</p>
              </button>
              {checkIfFav ? (
                <button onClick={onUnFavorite} className="favoriteBtn">
                  <p>UnFavorite</p>
                </button>
              ) : (
                <button onClick={onFavorite} className="favoriteBtn">
                  <p>Favorite</p>

                  <a className="favorites" href="#">
                    <svg
                      width="24px"
                      height="24px"
                      fill="#111"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
                    </svg>
                  </a>
                </button>
              )}
            </div>
            <div className="shippingDiv">
              <p className="shipping">Shipping*</p>
              <p className="shippingInfo">
                To get accurate shipping information Edit Location
              </p>
            </div>
            <div className="pickupDiv">
              <p>Free Pickup</p>
              <p>Store Pickup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
