import * as React from "react"
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";
import Icon from "../components/Icon/Icon";
import "../assets/css/common.css";
import testSvg from "../assets/svg/bell.svg";

const IndexPage = () => (
  <Layout>
    <Title level={2}>Platform V Functions</Title>
    <p>Мы взяли на себя создание, поддержку и масштабирование среды для разработки. Вы думаете только про продукт, который вам нужен: </p>
    <Button href="/test.html">Button</Button>
    <br />
    <Icon source={testSvg} width="24px" color="red" />
  </Layout>
);

export default IndexPage;