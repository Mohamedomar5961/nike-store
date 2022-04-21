import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { favorite } from "../Feature/favorites";
import { Link } from "react-router-dom";
import { Info } from "../Feature/Info";
import { cart } from "../Feature/cart";

const FavPage = () => {
  const [data, setData] = React.useState([]);
  const [cartData, setCartData] = React.useState([]);
  const dispatch = useDispatch();

  const getFavorite = async () => {
    const result = await axios.get("http://localhost:3000/favorites");
    setData(result.data);
  };
  const getCart = async () => {
    const result = await axios.get("http://localhost:3000/cart");
    setCartData(result.data);
  };
  dispatch(favorite({ count: data.length }));
  dispatch(cart({ count: cartData.length }));

  React.useEffect(() => {
    getFavorite();
    getCart();
  }, []);

  // const onUnFavorite = async (id) => {
  //   await axios.delete(`http://localhost:3000/favorites/${id}`);
  //   getFavorite();
  // };
  const onClicked = (item) => {
    dispatch(
      Info({
        title: item.title,
        imageUrl: item.imageUrl,
        gender: item.gender,
        price: item.price,
        color: item.color,
        id: item._id,
        description: item.description,
        status: "favored",
      })
    );
  };
  return (
    <div>
      <div className="favbody">
        <h3 className="favoriteTitle">Favorites</h3>
        {data.length > 0 ? (
          <div className="favItems">
            {data.map((item) => {
              return (
                <div className="favItemDiv" key={item._id}>
                  <Link
                    to={`/liked/${item._id}`}
                    onClick={() => onClicked(item)}
                    className="item"
                    key={item._id}
                  >
                    <img src={item.imageUrl} alt={item.title} />
                    <p className="title">{item.title}</p>
                    <p className="description">{item.description}</p>
                    <p className="price">${item.price}</p>
                  </Link>
                  {/* <div className="productButton">
                  <button
                    onClick={() => onUnFavorite(item._id)}
                    className="favoriteBtn"
                  >
                    <p>UnFavorite</p>
                  </button>
                </div> */}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="NoItems">
            <h4>There is no items in wishlist</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavPage;
