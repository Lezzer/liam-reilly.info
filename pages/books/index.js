import React from "react";
import Head from "next/head";
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Page from "../../components/page";
import BookTimeline from "../../components/book-timeline";

const Index = () => (
  <React.Fragment>
      <Head>
          <title>The books I've read:  liam-reilly.info</title>
      </Head>
      <SiteContainer>
          <Header/>
          <Page>
            <BookTimeline year={"2021"} month={"jul"}/>
          </Page>
      </SiteContainer>
  </React.Fragment>
);

export default Index