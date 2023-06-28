import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2 className="accordion-category">
          {title} ({content.length})
        </h2>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((menu) => {
            return (
              <>
                <div key={menu.card.info.id} className="flex-sbc menu-items">
                  <div className="menu-text">
                    <h3 className="menu-res-name">{menu.card.info.name}</h3>
                    <p className="menu-price">₹ {menu.card.info.price / 100}</p>
                    <p className="menu-description">
                      {menu.card.info.description}
                    </p>
                  </div>
                  <div>
                    <div className="food-image">
                      <img
                        src={
                          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                          menu.card.info.imageId
                        }
                        className="food-image"
                        alt="food image"
                      />
                    </div>
                  </div>
                </div>
                <hr className="hr-menu" />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
