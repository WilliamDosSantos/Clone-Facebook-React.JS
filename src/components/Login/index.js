import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import { SiFacebook } from "react-icons/si";
import { AuthContext } from "../../contexts/auth";
import GlobalStyles from "../../styles/global";
import * as C from "./styles";

const Login = () => {
  const { signInWithFacebook } = useContext(AuthContext);

  return (
    <>
      <C.Container>
        <SiFacebook />
        <FacebookLogin
          appId="454822689750588"
          fields="name,email,picture"
          callback={signInWithFacebook}
        />
      </C.Container>
      <GlobalStyles />
    </>
  );
};

export default Login;
