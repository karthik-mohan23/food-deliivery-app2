import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  console.log(content);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((menu) => {
            return (
              <>
                <div key={menu.card.info.id} className="flex-sbc menu-items">
                  <div>
                    <h3>{menu.card.info.name}</h3>
                    <p>{menu.card.info.price} / 100</p>
                    <p>{menu.card.info.description}</p>
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
