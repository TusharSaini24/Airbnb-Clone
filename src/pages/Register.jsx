import React from "react";
import styled from "styled-components";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt from "jwt-decode";
import { ImCross } from "react-icons/im";
const Register = () => {
  const credentialRes = async (credentialResponse) => {
    const user = jwt(credentialResponse.credential);
    console.log(user);
  };
  return (
    <Container>
      <div className="header">
        {/* <span>
      <ImCross />
    </span> */}
        <span>Log in or sign up</span>
      </div>
      <div className="form">
        <div className="phone-number">
          <select
            data-testid="login-signup-countrycode"
            class="_1iwku6d"
            id="country"
          >
            <option value="93AF">India (+91)</option>
            <option value="358AX">Åland Islands (+358)</option>
            <option value="355AL">Albania (+355)</option>
            <option value="213DZ">Algeria (+213)</option>
            <option value="1AS">American Samoa (+1)</option>
            <option value="376AD">Andorra (+376)</option>
            <option value="244AO">Angola (+244)</option>
            <option value="1AI">Anguilla (+1)</option>
            <option value="1AG">Antigua &amp; Barbuda (+1)</option>
            <option value="54AR">Argentina (+54)</option>
            <option value="374AM">Armenia (+374)</option>
            <option value="297AW">Aruba (+297)</option>
            <option value="61AU">Australia (+61)</option>
            <option value="43AT">Austria (+43)</option>
            <option value="994AZ">Azerbaijan (+994)</option>
            <option value="1BS">Bahamas (+1)</option>
            <option value="973BH">Bahrain (+973)</option>
            <option value="880BD">Bangladesh (+880)</option>
            <option value="1BB">Barbados (+1)</option>
            <option value="375BY">Belarus (+375)</option>
            <option value="32BE">Belgium (+32)</option>
            <option value="501BZ">Belize (+501)</option>
            <option value="229BJ">Benin (+229)</option>
            <option value="1BM">Bermuda (+1)</option>
            <option value="975BT">Bhutan (+975)</option>
            <option value="591BO">Bolivia (+591)</option>
            <option value="599BQ">
              Bonaire, Sint Eustatius and Saba (+599)
            </option>
          </select>
          <input type="number" />
        </div>
        <div className="privacy">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </div>
        <div className="btn">
          <button>Continue</button>
        </div>
      </div>
      <div className="google-login">
        <GoogleOAuthProvider
          // clientId={`${process.env.REACT_APP_CLINET_ID}`}
          clientId="307112139512-s0nd1b59roq934l734tueti9l97m3hod.apps.googleusercontent.com"
          className="google"
        >
          <GoogleLogin
            onSuccess={credentialRes}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 4rem;
  background-color: white;
  right: 25rem;
  border-radius: 25px;
  box-shadow: 2px 2px 1px #fff;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-sizing: border-box;
  gap: 1rem;
  padding: 1rem;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20px;
      color: black;
      font-weight: bolder;
    }
    svg {
      font-size: 10px;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;
    .btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        width: fit-content;
        background-color: #ff385c;
        border: none;
        width: 95%;
        padding: 1rem;
        border-radius: 10px;
      }
      padding-bottom: 1rem;
    }
    .phone-number {
      display: flex;
      flex-direction: column;
      width: 95%;
      select {
        outline: none;
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid #dddddd;
      }
      input {
        outline: none;
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid #dddddd;
      }
    }
    border-bottom: 1px solid #dddddd;
  }
  .google-login {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Register;
