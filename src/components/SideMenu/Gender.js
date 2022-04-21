import React, { useState } from "react";

const SideMenu = ({
  data,
  setData,
  onChange,
  menDisabled,
  womenDisabled,
  unisexDisabled,
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
            Gender
          </button>
        </div>
        {collopsed ? (
          <div className="collopsedDiv">
            <label className="inputLabel" for="Men">
              <input
                name="gender"
                type="checkbox"
                onChange={onChange}
                id="Men"
                disabled={menDisabled}
              />
              <label for="Men">Men</label>
            </label>
            <label className="inputLabel" for="Women">
              <input
                name="gender"
                type="checkbox"
                onChange={onChange}
                id="Women"
                disabled={womenDisabled}
              />
              <label for="Women">Women</label>
            </label>
            <label className="inputLabel" for="Unisex">
              <input
                name="gender"
                type="checkbox"
                onChange={onChange}
                id="Unisex"
                disabled={unisexDisabled}
              />
              <label for="Unisex">Unisex</label>
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
