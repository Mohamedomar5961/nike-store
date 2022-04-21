import React, { useState } from "react";

const SideMenu = ({
  data,
  setData,
  onChange,
  black,
  grey,
  brown,
  red,
  white,
  multi,
}) => {
  const [collopsed, setCollopsed] = useState(true);
  return (
    <div>
      <div className="GenderWrapper">
        <div className="GenderDiv" onClick={() => setCollopsed(!collopsed)}>
          <button
            className="GenderBtn"
            onClick={() => setCollopsed(!collopsed)}
          >
            Color
          </button>
        </div>
        {collopsed ? (
          <div className="collopsedDiv">
            <label className="inputLabel" for="black">
              <input
                name="color"
                type="checkbox"
                onChange={onChange}
                id="black"
                disabled={black}
              />
              <label for="black">Black</label>
            </label>
            <label className="inputLabel" for="brown">
              <input
                name="color"
                onChange={onChange}
                type="checkbox"
                id="brown"
                disabled={brown}
              />
              <label for="brown">Brown</label>
            </label>
            <label className="inputLabel" for="grey">
              <input
                name="color"
                onChange={onChange}
                type="checkbox"
                id="grey"
                disabled={grey}
              />
              <label for="Grey">Grey</label>
            </label>
            <label className="inputLabel" for="multi-color">
              <input
                name="color"
                onChange={onChange}
                type="checkbox"
                id="multi-color"
                disabled={multi}
              />
              <label for="multi-color">Multi-Color</label>
            </label>
            <label className="inputLabel" for="red">
              <input
                name="color"
                onChange={onChange}
                type="checkbox"
                id="red"
                disabled={red}
              />
              <label for="red">Red</label>
            </label>
            <label className="inputLabel" for="white">
              <input
                name="color"
                onChange={onChange}
                type="checkbox"
                id="white"
                disabled={white}
              />
              <label for="white">White</label>
            </label>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SideMenu;
