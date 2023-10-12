import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Label,
  AccountPageContainer,
  Input,
  Button,
  AccountForm,
  AccountFormContainer,
  ButtonContainer,
} from "./AccountStyle";
import { useAppContext } from "../../AppContext";

// // 쿠키를 주고받기 위해 설정 ( 쿠키가 브라우저에 제대로 저장된 것이 맞는지 확인위함)
// axios.defaults.withCredentials = true;

function Login() {
  const navigate = useNavigate();
  const { cid } = useAppContext();

  const Signup = () => {
    navigate(`/signup`);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const axiosInstance = axios.create({
    baseURL: "http://http://27.96.130.127:8080:8080",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const user_data = {
      username: username,
      password: password,
    };

    axiosInstance
      .post("/member/login", user_data)
      .then((res) => {
        // 서버에서 받아온 리소스 중 access token
        // console.log(res);
        const token = res.data.accessToken;
        // console.log(token);
        axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
        // console.log(axiosInstance.defaults.headers["Authorization"]);
        localStorage.setItem("token", token);
        console.log(cid);
        if (cid === null) {
          navigate(`/`);
        } else {
          navigate(`/qrsave/${cid}`);
        }
      })
      .catch((error) => {
        window.alert(
          "로그인과 비밀번호가 일치하지 않습니다. 다시 입력해주세요."
        );
        console.log(error);
      });
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <AccountPageContainer className="signin">
        <AccountFormContainer>
          <AccountForm>
            <Label className="label">아이디</Label>
            <Input
              className="user"
              name="user-id"
              value={username}
              required
              onChange={onChangeUsername}
            />
            <br />
            <Label className="label">비밀번호</Label>
            <Input
              className="user"
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
            <br />
            <ButtonContainer>
              <Button className="button" type="primary" onClick={handleLogin}>
                로그인
              </Button>
              <Button className="button" type="primary" onClick={Signup}>
                회원가입
              </Button>
            </ButtonContainer>
          </AccountForm>
        </AccountFormContainer>
      </AccountPageContainer>
    </>
  );
}

export default Login;
