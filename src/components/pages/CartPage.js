import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cart } from "../Feature/cart";
import { Link } from "react-router-dom";
import { Info } from "../Feature/Info";
import { favorite } from "../Feature/favorites";
import CartFav from "./CartFav";

const CartPage = () => {
  const [cartData, setCartData] = React.useState([]);
  const [favData, setFavData] = React.useState([]);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();
  let total = 0;
  let totalEach = 0;

  const countDispatcher = () => {
    dispatch(cart({ count: cartData.length }));
  };
  const favCountDispatcher = () => {
    dispatch(favorite({ count: cartData.length }));
  };

  const getCart = async () => {
    const result = await axios.get("http://localhost:3000/cart");
    setCartData(result.data);
  };

  const getFavorite = async () => {
    const result = await axios.get("http://localhost:3000/favorites");
    setFavData(result.data);
  };

  dispatch(cart({ count: cartData.length }));
  dispatch(favorite({ count: favData.length }));

  React.useEffect(() => {
    getCart();
    getFavorite();
    countDispatcher();
    favCountDispatcher();
  }, []);
  cartData.map((item) => {
    total += parseInt(item.price) * quantity;
  });

  const onTrash = async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`);
    getCart();
    countDispatcher();
  };
  const onFavorite = async (item) => {
    const theArray = {
      title: item.title,
      imageUrl: item.imageUrl,
      gender: item.gender,
      price: item.price,
      color: item.color,
      id: item._id,
      description: item.description,
      status: "favored",
    };

    await axios.post("http://localhost:3000/favorites", theArray);
    favCountDispatcher();
  };

  const onAddToBag = async (item) => {
    await axios.post(`http://localhost:3000/cart`, item);
    getCart();
    countDispatcher();
    favCountDispatcher();
    await axios.delete(`http://localhost:3000/favorites/${item._id}`);
  };

  return (
    <div className="cartBody">
      <div className="cartAll">
        <div className="cartContent">
          {cartData.length > 0 ? (
            <div className="cartBagItems">
              <h4 className="bagH4">Bag</h4>
              <div className="cartItems">
                {cartData.map((item) => {
                  return (
                    <div className="cartItem" key={item._id}>
                      <div className="cartItemContent">
                        <div className="cartItemImg">
                          <img src={item.imageUrl} />
                        </div>
                        <div className="cartItemsInfo">
                          <div className="cartItemInfo">
                            <div className="cartItemTitle">
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                            </div>
                            <div className="cartItemPrice">
                              <p>${item.price}</p>
                            </div>
                          </div>
                          <div className="sizeQuantityBtn">
                            <div className="sizeBtn">
                              <label>Size</label>
                              <select name="size">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                              </select>
                            </div>
                            <div className="quantityBtn">
                              <label>Quantity</label>
                              <select
                                name="quantity"
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>
                          </div>
                          <div className="cartSVG">
                            <div
                              className="favoritesDivSVG"
                              onClick={() => onFavorite(item)}
                            >
                              <svg
                                className="heart"
                                width="24px"
                                height="24px"
                                fill="#111"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
                              </svg>
                            </div>
                            <button
                              onClick={() => onTrash(item._id)}
                              className="trashBtn"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 24 24"
                                role="img"
                                width="24px"
                                height="24px"
                                fill="none"
                              >
                                <path
                                  stroke="currentColor"
                                  d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="shippingInfoDiv">
                        <div className="freeShippingP">Free Shipping</div>
                        <div className="arrivalDateP">
                          Arrives in 3-5 business days
                        </div>
                        <div className="freePickupP">Free Pickup</div>
                        <a href="#" className="findStoreLink">
                          Find a Store
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="NoBagItems">
              <h4 className="bagH4">There is nothing in the Bag</h4>
            </div>
          )}

          <div className="cartTotal">
            <h4 className="summaryH4">Summary</h4>
            <div className="promoDiv">
              <p className="prompP">Do you have a Promo Code</p>
            </div>
            <div className="subtotalDiv">
              <p className="subtotal">Subtotal</p>
              <p className="subtotalPrice">${total}.00</p>
            </div>
            <div className="shipping-handlingDiv">
              <p className="shipping-handling">Estimated Shipping & Handling</p>
              <p className="shipping-handlingPrice">$0.00</p>
            </div>
            <div className="taxDiv">
              <p className="tax">Estimated Tax</p>
              <p className="taxPrice">---</p>
            </div>
            <div className="totalDiv">
              <p className="total">Total</p>
              <p className="totalPrice">${total}.00</p>
            </div>
            <div className="checkoutDiv">
              <button className="checkoutBtn">Checkout</button>
              <button className="payoalBtn">
                <img src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png" />
              </button>
            </div>
          </div>
        </div>
        {favData.length > 0 ? (
          <div className="cartFavPage">
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
                          <p className="cartFavItemDescription">
                            {item.description}
                          </p>
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
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartPage;
