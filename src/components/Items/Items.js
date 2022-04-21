import React, { useState } from "react";
import Price from "../SideMenu/Price";
import Color from "../SideMenu/Color";
import Gender from "../SideMenu/Gender";
import { Info } from "../Feature/Info";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { favorite } from "../Feature/favorites";
import { cart } from "../Feature/cart";

const Items = () => {
  const [apiData, setApiData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [favData, setFavData] = useState([]);
  const [menDisabled, setMenDisabled] = useState(false);
  const [womenDisabled, setWomenDisabled] = useState(false);
  const [unisexDisabled, setUnisexDisabled] = useState(false);
  const [firstPrice, setFirstPrice] = useState(false);
  const [secondPrice, setSecondPrice] = useState(false);
  const [thirdPrice, setThirdPrice] = useState(false);
  const [fourthPrice, setFourthPrice] = useState(false);
  const [black, setBlack] = useState(false);
  const [white, setWhite] = useState(false);
  const [red, setRed] = useState(false);
  const [grey, setGrey] = useState(false);
  const [brown, setBrown] = useState(false);
  const [multi, setMulti] = useState(false);

  const dispatch = useDispatch();

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setApiData(res.data);
  };
  const getFavorite = async () => {
    const result = await axios.get("http://localhost:3000/favorites");
    setFavData(result.data);
  };
  const getCart = async () => {
    const result = await axios.get("http://localhost:3000/cart");
    setCartData(result.data);
  };

  dispatch(favorite({ count: favData.length }));
  dispatch(cart({ count: cartData.length }));

  const countDispatcher = () => {
    dispatch(cart({ count: cartData.length }));
  };
  const favDispatcher = () => {
    dispatch(favorite({ count: favData.length }));
  };

  React.useEffect(() => {
    getData();
    getFavorite();
    getCart();
    countDispatcher();
    favDispatcher();
  }, []);

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

  const onChange = (e) => {
    const { name, id } = e.target;

    //check if value is checked
    if (e.target.checked === true) {
      const newData = apiData.filter((item) => {
        console.log(id);
        return item[name] === id;
      });
      setApiData(newData);
    } else {
      getData();
    }
    if (id === "Men") {
      setWomenDisabled(!womenDisabled);
      setUnisexDisabled(!unisexDisabled);
    }
    if (id === "Women") {
      setMenDisabled(!menDisabled);
      setUnisexDisabled(!unisexDisabled);
    }
    if (id === "Unisex") {
      setMenDisabled(!menDisabled);
      setWomenDisabled(!womenDisabled);
    }
    if (id === "FirstPrice") {
      setSecondPrice(!secondPrice);
      setThirdPrice(!thirdPrice);
      setFourthPrice(!fourthPrice);
    }
    if (id === "SecondPrice") {
      setFirstPrice(!firstPrice);
      setThirdPrice(!thirdPrice);
      setFourthPrice(!fourthPrice);
    }
    if (id === "ThirdPrice") {
      setFirstPrice(!firstPrice);
      setSecondPrice(!secondPrice);
      setFourthPrice(!fourthPrice);
    }
    if (id === "FourthPrice") {
      setFirstPrice(!firstPrice);
      setSecondPrice(!secondPrice);
      setThirdPrice(!thirdPrice);
    }
    if (id === "black") {
      setWhite(!white);
      setRed(!red);
      setGrey(!grey);
      setBrown(!brown);
      setMulti(!multi);
    }
    if (id === "white") {
      setBlack(!black);
      setRed(!red);
      setGrey(!grey);
      setBrown(!brown);
      setMulti(!multi);
    }
    if (id === "red") {
      setBlack(!black);
      setWhite(!white);
      setGrey(!grey);
      setBrown(!brown);
      setMulti(!multi);
    }
    if (id === "grey") {
      setBlack(!black);
      setWhite(!white);
      setRed(!red);
      setBrown(!brown);
      setMulti(!multi);
    }
    if (id === "brown") {
      setBlack(!black);
      setWhite(!white);
      setRed(!red);
      setGrey(!grey);
      setMulti(!multi);
    }
    if (id === "multi-color") {
      setBlack(!black);
      setWhite(!white);
      setRed(!red);
      setGrey(!grey);
      setBrown(!brown);
    }
  };

  // updatedData = newData;

  // window.localStorage.setItem("data", JSON.stringify(newData));

  // console.log(data);

  return (
    <div>
      <div className="header">
        <h1>Ohio State Buckeyes Apparel & Gear ({apiData.length})</h1>
      </div>
      <div className="body">
        <div className="sideMenu">
          <div className="sideMenuWrapper">
            <Gender
              menDisabled={menDisabled}
              womenDisabled={womenDisabled}
              unisexDisabled={unisexDisabled}
              data={apiData}
              setData={setApiData}
              onChange={onChange}
            />
            <Price
              firstPrice={firstPrice}
              secondPrice={secondPrice}
              thirdPrice={thirdPrice}
              fourthPrice={fourthPrice}
              getData={getData}
              apiData={apiData}
              setApiData={setApiData}
            />
            <Color
              data={apiData}
              setData={setApiData}
              onChange={onChange}
              black={black}
              white={white}
              red={red}
              grey={grey}
              brown={brown}
              multi={multi}
            />
          </div>
        </div>
        <div className="items">
          {apiData.map((item) => {
            return (
              <Link
                to={`/product/${item._id}`}
                onClick={() => onClicked(item)}
                className="item"
                key={item._id}
              >
                <img src={item.imageUrl} alt={item.title} />
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Items;
