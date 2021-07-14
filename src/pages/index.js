import React from "react";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Header from "@site/src/components/header/";
import sectionCSS from "@site/src/css/section.module.css/";
import Image from "@site/static/img/home.svg";

const HomeImage = () => {
  return (
    <section className={sectionCSS.section}>
      <Image title="Home Page Image" className={styles.home_image}></Image>
    </section>
  );
};

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="My thoughts on software, technology and the future."
    >
      <main>
        <Header
          title="Hi, I'm Luke"
          subtitle="I’m a software engineer with a passion for technology."
        />
        <HomeImage />
      </main>
    </Layout>
  );
}
