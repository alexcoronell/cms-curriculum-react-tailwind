import { useState, useRef } from "react";
/* Components */
import BasicPage from "../../Components/BasicPage";

/* Images */
import defaultImage from "../../assets/images/default-images/user.png";

/* Style */
import './style.scss';

const BasicData = () => {
  const titlePage = "Personal Data";
  const [personalData, setPersonalData] = useState({
    firstname: '',
    lastname: '',
    title: '',
    email: '',
    image: ''
  })
  const form = useRef(null)

  onSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      title: formData.get('title'),
      email: formData.get('email'),
      image: formData.get('image'),
    }
    console.log(data);
  }

  return (
    <BasicPage titlePage={titlePage}>
      <div className="BasicData content adminPages">
        <div className="adminPages__content BasicData__content">
          <form className="BasicData__content__form">
            <div className="BasicData__content__form__image">
              <img src={defaultImage} alt={"Default name"} />
            </div>
            <div className="BasicData__content__form__imageInput">
              <div className="form-group">
                <label htmlFor="profileImage">Profile Image</label>
                <input type="file" name="profileImage" id="profileImage" className="BasicData__content__form__imageInput__input" />
              </div>
            </div>
            <div className="BasicData__content__form__basicInputs">
              {/* Firstname */}
              <div className="form-group">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname" />
              </div>

              {/* Lastname */}
              <div className="form-group">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" />
              </div>

              {/* Title */}
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
              </div>

              {/* Title */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="BasicData__content__form__buttonsArea">
              <button type="submit" className="btn-primary w-full">
                Save
              </button>
              <button type="button" className="btn-cancel w-full">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </BasicPage>
  );
};

export default BasicData;
