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
            <BookTimeline previousBooks={[
                {
                    title: "Behind the Mask",
                    author: "Tyson Fury",
                    isbn: 9781529124866,
                    url: "https://images.isbndb.com/covers/48/66/9781529124866.jpg",
                    year: 2021,
                    month: "jan"
                },
                {
                    title: "The Furious Method",
                    author: "Tyson Fury",
                    isbn: 9781529125924,
                    url: "https://images.isbndb.com/covers/59/24/9781529125924.jpg"
                },
                {
                    title: "The Second Sleep",
                    author: "Robert Harris",
                    isbn: 9781787460966,
                    url: "https://images.isbndb.com/covers/09/66/9781787460966.jpg"
                },
                {
                    title: "The 48 Laws of Power",
                    author: "Robert Greene",
                    isbn: 9781861972781,
                    url: "https://images.isbndb.com/covers/27/81/9781861972781.jpg"
                },
                {
                    title: "The 48 Laws of Power",
                    author: "Robert Greene",
                    isbn: 9781861972781,
                    url: "https://images.isbndb.com/covers/27/81/9781861972781.jpg",
                    month: "feb"
                },
                {
                    title: "The 48 Laws of Power",
                    author: "Robert Greene",
                    isbn: 9781861972781,
                    url: "https://images.isbndb.com/covers/27/81/9781861972781.jpg",
                    month: "mar"
                },
                {
                    title: "The 50th Law",
                    author: "50 Cent & Robert Greene",
                    isbn: 9781846680793,
                    url: "https://images.isbndb.com/covers/07/93/9781846680793.jpg"
                },
                {
                    title: "Be More Pirate",
                    author: "Sam Conniff Allende",
                    isbn: 9780241307885,
                    url: "https://images.isbndb.com/covers/78/85/9780241307885.jpg",
                    month: "apr"
                },
                {
                    title: "The Madness of Crowds",
                    author: "Douglas Murray",
                    isbn: 9781472979575,
                    url: "https://images.isbndb.com/covers/95/75/9781472979575.jpg",
                },
                {
                    title: "Rich Dad Poor Dad",
                    author: "Robert T. Kiyosaki",
                    isbn: 9781612680194,
                    url: "https://images.isbndb.com/covers/28/56/9789463982856.jpg",
                },
                {
                    title: "Never Split the Difference",
                    author: "Chriss Voss with Tahl Raz",
                    isbn: 9781847941497,
                    url: "https://images.isbndb.com/covers/14/97/9781847941497.jpg",
                }
            ]}
            currentBook={{
                title: "12 Rules For life",
                author: "Jordan B. Peterson",
                isbn: 9780141988511,
                url: "https://images.isbndb.com/covers/85/11/9780141988511.jpg"
            }}
            />
          </Page>
      </SiteContainer>
  </React.Fragment>
);

export default Index