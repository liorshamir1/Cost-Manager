import React, { useRef } from "react";
import Image from "next/image";
import "./customPopUp.css";

interface Props {
  title: string;
  body: string;
  show: boolean;
  setShow: (show: boolean | false) => void;
}
const CustomPopUp: React.FC<Props> = (props) => {
  return (
    <>
      <div
        className="site-masking"
        style={{ display: props.show == true ? "block" : "none" }}
        onClick={() => {
          props.setShow(false);
        }}
      ></div>
      {props.show == true && (
        <div>
          <section id="popUpNotification" className="popup gdtf-popup">
            <div className="card-hdr">
              <p className="popup-hdl" id="popUpNotificationTitle">
                {props.title}
              </p>
            </div>
            <div className="popup-body">
              <div
                id="popupInstruct"
                className="popup-instruct"
                role="alert"
                dangerouslySetInnerHTML={{
                  __html: props.body,
                }}
              />
              <button
                type="button"
                role="button"
                className="approve-btn btn btn--blue"
                id="popUpNotificationButton"
                onClick={() => props.setShow(false)}
              >
                אישור
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default CustomPopUp;
