import * as React from "react"
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";
import "../assets/css/common.css";
import TestIcon from "../assets/svg/bell.svg";

const IndexPage = () => (
  <Layout>
    <Title level={2}>Platform V Functions</Title>
    <p>Мы взяли на себя создание, поддержку и масштабирование среды для разработки. Вы думаете только про продукт, который вам нужен: </p>
    <Button href="/test.html">Button</Button>
    <br />
    <TestIcon width="25px" height="25px" />
  </Layout>
);

export default IndexPage;