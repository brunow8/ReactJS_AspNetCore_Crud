import React from "react";
import style from "./../../css/InputImage.module.css";

const InputImage = (props) => {
  const HandleFileSelection = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name !== "") {
        props.changePhotoName(event.target.files[0].name);
      }
    }
  };

  const fileOpenFolder = () => {
    document.getElementById("inputImage").click();
  };

  if (props.disabled) {
    return (
      <div
        className={`col-12 d-flex justify-content-center ${style.ImageDivPosition}`}
      >
        <div>
          <img
            src={require(`./../../images/${props.src}`)}
            className={`${style.imageDisabled}`}
            alt="person"
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        className={`col-12 d-flex justify-content-center ${style.ImageDivPosition}`}
      >
        {props.src === "" ? (
          <>
            <input
              type="file"
              onChange={HandleFileSelection}
              hidden
              id="inputImage"
              accept="image/png, image/jfif, image/jpeg, image/jpg"
            />
            <div className={`${style.addImage}`} onClick={fileOpenFolder}>
              <span className={`material-icons ${style.inputImagePlus}`}>
                add
              </span>
              <label className={`textFormation ${style.inputImageAddText}`}>
                Add Photo
              </label>
            </div>
          </>
        ) : (
          <>
            <input
              type="file"
              onChange={HandleFileSelection}
              hidden
              id="inputImage"
              accept="image/png, image/jfif, image/jpeg, image/jpg"
            />
            <div onClick={fileOpenFolder}>
              <img
                src={require(`./../../images/${props.src}`)}
                className={`${style.addImage}`}
                alt="person"
              />
              <div className="d-flex justify-content-center">
                <span
                  className={`material-icons me-3 ${style.inputImageChangeIcon}`}
                >
                  change_circle
                </span>
                <span className={`textFormation ${style.inputImageAddText}`}>
                  Change Photo
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      {props.errors !== "" ? (
        <p
          className="errorText"
          style={{
            textAlign: "center",
            position: "relative",
            top: "-45px",
            left: "-22px",
          }}
        >
          {props.errors}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default InputImage;
