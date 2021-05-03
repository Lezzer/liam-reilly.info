import React from "react";
import Head from "next/head";
import SiteContainer from "../components/site-container";
import Header from "../components/header";
import Page from "../components/page";
import BookTimeline from "../components/book-timeline";

const BooksPage = () => (
  <React.Fragment>
      <Head>
          <title>The books I've read:  liam-reilly.info</title>
      </Head>
      <SiteContainer>
          <Header/>
          <Page>
            <BookTimeline books={[
                {
                    title: "Behind the Mask",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Faplus-media%2Fvc%2Fbe810dcd-9bd2-40ed-b4b9-560bbaea32de.__CR0%2C0%2C300%2C300_PT0_SX300_V1___.jpg&f=1&nofb=1",
                    year: 2021,
                    month: "jan"
                },
                {
                    title: "The Furious Method",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bookstation.ie%2Fwp-content%2Fuploads%2F2020%2F09%2FThe-Furious-Method-Tyson-Fury.jpg&f=1&nofb=1"
                },
                {
                    title: "The Second Sleep",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.od-cdn.com%2FImageType-400%2F0111-1%2F3E8%2F1E4%2FE4%2F%257B3E81E4E4-44E6-41E2-8767-217ED901406D%257DImg400.jpg&f=1&nofb=1"
                },
                {
                    title: "The 48 Laws of Power",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FI%2F41PfHefFq1L._AA300_.jpg&f=1&nofb=1"
                },
                {
                    title: "The 48 Laws of Power",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FI%2F41PfHefFq1L._AA300_.jpg&f=1&nofb=1",
                    month: "feb"
                },
                {
                    title: "The 48 Laws of Power",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FI%2F41PfHefFq1L._AA300_.jpg&f=1&nofb=1",
                    month: "mar"
                },
                {
                    title: "The 50th Law",
                    url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.contentreserve.com%2FImageType-400%2F0293-1%2F28C%2F84C%2FC6%2F%257B28C84CC6-DA2D-47B9-8BD3-3FDF5C549380%257DImg400.jpg&f=1&nofb=1"
                },
                {
                    title: "Be More Pirate",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-r.fishpond.com.au%2F0161%2F541%2F486%2F1231618764%2F6.jpeg&f=1&nofb=1",
                    month: "apr"
                },
                {
                    title: "The Madness of Crowds",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbilder.akademibokhandeln.se%2Fimages_akb%2F9781635579949_383%2Fthe-madness-of-crowds-gender-race-and-identity&f=1&nofb=1",
                },
                {
                    title: "Rich Dad Poor Dad",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.od-cdn.com%2FImageType-400%2F6251-1%2F078%2FE22%2FAD%2F%257B078E22AD-42E7-49AD-A10C-2F00195DC889%257DImg400.jpg&f=1&nofb=1",
                },
                {
                    title: "Never Split the Difference",
                    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftextbookcentre.com%2Fmedia%2Fcache%2Ffe%2F99%2Ffe992acd5e53f42e1a902b5d3e75f670.jpg&f=1&nofb=1",
                }
            ]}/>
          </Page>
      </SiteContainer>
  </React.Fragment>
);

export default BooksPage