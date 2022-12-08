import { useState } from "react";
import {
  Form,
  FormGroup,
  Col,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import styles from "../styles/pages/Login.module.scss";
import LoginBg from "../public/login-bg.jpg";
import Image from "next/image";
type LoginSignup = {
  page: "login" | "signup";
};

const LoginSignup = ({ page }: LoginSignup) => {
  const { login, signUp } = useAuth();

  const [data, setData] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (page === "login") {
      login(data.email, data.password);
    } else {
      signUp(data.email, data.password);
    }
  };

  return (
    <Container className={styles.container}>
      <div className={styles.leftarea}>
        <Image
          src={LoginBg}
          className={styles.leftareaBg}
          alt="Login Background"
        />
      </div>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <h1 className="w-100 text-start px-3 ">
          {page === "login" ? "Giriş Yap" : "Kayıt Ol"}
        </h1>
        <div className="w-100 text-end px-3 mt-1">
          {page === "login" ? "Hesabın yok mu?" : "Hesabın var mı?"}
          <Link
            href={page === "login" ? "/auth/signup" : "/auth/login"}
            className="ms-1"
          >
            {page === "login" ? "Kayıt Ol" : "Giriş Yap"}
          </Link>
        </div>
        {page === "signup" && (
          <FormGroup className="w-100 px-3">
            <Label for="exampleEmail" size="lg" sm={3}>
              Adınız
            </Label>
            <Col sm={12}>
              <Input
                bsSize="lg"
                id="exampleEmail"
                name="displayName"
                placeholder="Adınız"
                type="text"
                onChange={(e) =>
                  setData({ ...data, displayName: e.target.value })
                }
              />
            </Col>
          </FormGroup>
        )}
        <FormGroup className="w-100 px-3">
          <Label for="exampleEmail" size="lg" sm={3}>
            Email
          </Label>
          <Col sm={12}>
            <Input
              bsSize="lg"
              id="exampleEmail"
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup className="w-100 px-3 ">
          <Label for="exampleEmail2" size="lg" sm={3}>
            Şifre
          </Label>
          <Col sm={12}>
            <Input
              bsSize="lg"
              id="exampleEmail2"
              name="email"
              placeholder="Şifre"
              type="password"
              autoComplete="off"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Col>
        </FormGroup>
        <div className="w-100 d-flex justify-content-end align-items-end px-3 mt-2">
          <Button color="primary">
            {page === "login" ? "Giriş Yap" : "Kayıt Ol"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginSignup;
