import React, { useState } from "react";

const Price = ({
  apiData,
  setApiData,
  getData,
  firstPrice,
  secondPrice,
  thirdPrice,
  fourthPrice,
}) => {
  const [collopsed, setCollopsed] = useState(true);
  const onPriceChange = (e) => {
    const { name, min, max } = e.target;

    if (e.target.checked) {
      const newData = apiData.filter((item) => {
        const price = parseInt(item[name]);
        return price >= min && price <= max;
      });
      setApiData(newData);
    } else {
      getData();
    }
  };
  return (
    <div>
      <div className="GenderWrapper">
        <div className="GenderDiv" onClick={() => setCollopsed(!collopsed)}>
          <button
            className="GenderBtn"
            onClick={() => setCollopsed(!collopsed)}
          >
            Shop by Price
          </button>
        </div>
        {collopsed ? (
          <div className="collopsedDiv">
            <label className="inputLabel" for="$0-$25">
              <input
                name="price"
                type="checkbox"
                price="25"
                onChange={onPriceChange}
                id="FirstPrice"
                min="0"
                max="25"
                disabled={firstPrice}
              />
              <label for="$0-$25">$0-$25</label>
            </label>
            <label className="inputLabel" for="$25 - $50">
              <input
                name="price"
                type="checkbox"
                onChange={onPriceChange}
                id="SecondPrice"
                min="25"
                max="50"
                disabled={secondPrice}
              />
              <label for="$25 - $50">$25 - $50</label>
            </label>
            <label className="inputLabel" for="$50 - $100">
              <input
                name="price"
                type="checkbox"
                onChange={onPriceChange}
                id="ThirdPrice"
                min="50"
                max="100"
                disabled={thirdPrice}
              />
              <label for="$50 - $100">$50 - $100</label>
            </label>
            <label className="inputLabel" for="$100 - $150">
              <input
                name="price"
                type="checkbox"
                onChange={onPriceChange}
                id="FourthPrice"
                min="100"
                max="150"
                disabled={fourthPrice}
              />
              <label for="$100 - $150">$100 - $150</label>
            </label>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Price;
