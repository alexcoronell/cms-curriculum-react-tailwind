/* Components */
import BasicPage from "../../Components/BasicPage";

import defaultImage from "../../assets/images/default-images/user.png"

const BasicData = () => {
  const titlePage = "Personal Data";

  return (
    <BasicPage titlePage={titlePage}>
      <div className="BasicData content">
        <form>
        <div className="BasicData__image">
          <img src={defaultImage} alt={"Default name"} />
        </div>
        <div className="BasicData__imageInput">
          <div className="form-group">
            <label htmlFor="profileImage">Profile Image</label>
          <input type="file" name="profileImage" id="profileImage" />
          </div>
        </div>
        <div className="BasicData__basicInputs">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
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
        <div className="button-area">
          <button type="submit" className="btn-primary w-full">Save</button>
          <button type="button" className="w-full">Cancel</button>
        </div>
        </form>
      </div>
    </BasicPage>
  );
};

export default BasicData;
