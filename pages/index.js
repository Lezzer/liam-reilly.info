import React from "react";
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import Post from "../components/post"
import SiteContainer from "../components/site-container";
import Page from "../components/page";

const Index = () => (
    <React.Fragment>
        <Head>
            <title>liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Post
                    month={"June"}
                    day={"01"}
                    year={"2021"}
                    title={"Update"}
                    content={[
                        "Another new month, another book delivery. I swear I will not purchase any more books for the rest of the year now!",
                        "I started the year with a handful of physical books scattered around my house but when I decided to improve my home office, a bookshelf was top of the list of things I needed to buy.  I grossly overestimated the number of books I owned and built a bookshelf floor to ceiling which looked embarrassingly bare when I put my handful of books on the shelves!",
                        "Fast forward a few months and it's now looking much healthier with 70+ books on the shelf currently with a couple more books still due to arrive.",
                        "I finished reading my current book 'The Parasitic Mind:  How infectious ideas are killing common sense' by the wonderful Gad Saad this morning and I have to say I think this book should be required reading in every high school and college/university.  I cannot praise this book highly enough and thoroughly recommend you grab a copy today.  Society depends on it!  It really is that good.",
                        "A number of new books were delivered which I'm looking forward to reading but as I sat at my desk looking over them all I found myself automatically reading the complete overture section of 'Beyond Order' by the equally fantastic Jordan B. Peterson and with that subconsciously I decided my next read.",
                        "I'm quite happy that it worked out this way to be honest. My recent reading order has been as follows:",
                        "Jordan B. Peterson - 12 Rules for Life. An antidote to Chaos. ",
                        "Dr Gad Saad - The Consuming Instinct.",
                        "Dr Gad Saad - The Parasitic Mind.  How infectious ideas are killing common sense.",
                        "Jordan B. Peterson - Beyond Order.",
                        "Quite a nice symmetry, a natural order from Chaos even :)"

                    ]}
                    link={{ post_text: "You can learn more about Jordan B. Peterson ", url: "https://www.jordanbpeterson.com/", url_text: "here", external: true }}
                />
                <Post
                    month={"May"}
                    day={"28"}
                    year={"2021"}
                    title={"Update"}
                    content={[
                        "I don't often read two books in a row from the same author or even on the exact same subject, but I find Gad Saad so interesting I've done just that again this month.",
                        "You might have noticed that in January I did read both Tyson Fury books back to back, and whilst you can't tell from the website I did also read 2x MMA books to back last year.  (Michael Bisping: Quitters Never Win and Dan Hardy:  Part Reptile). But this isn't my modus operandi.",
                        "'The Parasitic Mind: How Infectious Ideas Are Killing Common Sense' arrived a couple of days before I finished reading 'The Consuming Instinct' and I couldn't wait to jump into the new book so that's what I did, the very next day!",
                        "If you're a bit fed up of woke nonsense seemingly destroying every facet of modern society and wonder how/why things are the way they are right now I thoroughly recommend you check out the book. It's brilliant!"
                    ]}
                    link={{ post_text: "You can learn more about Dr Gad Saad ", url: "https://www.gadsaad.com/", url_text: "here", external: true }}
                />
                <Post
                    month={"May"}
                    day={"13"}
                    year={"2021"}
                    title={"New Book Day!"}
                    content={[
                        "One of my most favourite personal moments these days is picking a new book to read from my ever growing bookshelf.",
                        "Today is that day!",
                        "I've bought many books this year, far more than I will probably even have time to read this year. I've bought around 10-15 books this week covering a large variety of topics including psychology, branding, business strategy, computing books and more.",
                        "I am addicted to reading now and I have a thirst for knowledge to help me grow as a human being first and foremost, but also to add some new skills to enable me to make my business a success.",
                        "I have received a book delivery most days this week and they will continue long into next week, today is one of those days.  I ordered two books by Dr Gad Saad. The Parasitic Mind is not yet with me but an earlier book of his arrived today so I think I've got my next book picked out.",
                        "The Consuming Instinct - Dr Gad Saad"
                    ]}
                    link={{ post_text: "You can learn more about Dr Gad Saad ", url: "https://www.gadsaad.com/", url_text: "here", external: true }}
                />
                <Post
                    month={"May"}
                    day={"03"}
                    year={"2021"}
                    title={"Google... FLoC off!"}
                    content={[
                        "Just a quick update.  I added the headers to the site which opt out of Google's invasive Federated Learning of Cohorts (FLoC)."
                    ]}
                    link={{ post_text: "You can learn more about FLoC ", url: "https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea", url_text: "here", external: true }}
                />
                <Post
                    month={"May"}
                    day={"02"}
                    year={"2021"}
                    title={"Books!"}
                    content={[
                        "I've been reading a lot this year. I like to start each day reading a chapter or two of a book rather than doom scroll social media. I find myself to be much happier and productive when I do this!",
                        "Because I'm reading so many books now I wanted a way to keep track so I figured why not use this website to keep track. So today I've added a new books page, with a simple timeline showing the books I've read so far in 2021.",
                        "It's very simple for now but I plan to expand it and make it a bit more useful in the future.",
                        "Please take a look and get in touch if you have any recommendations or want to talk about something I've read."

                    ]}
                    link={{ post_text: ""}}
                />
                <Post
                    month={"Jan"}
                    day={"27"}
                    year={"2021"}
                    title={"New Website!"}
                    content={[
                        "After years of neglect I decided to completely rebuild and slightly re-design this website.",
                        "The website has now been re-built using the very latest versions of NextJS & React.",
                        "I intend to use this website a lot more going forward as I reduce my big tech/social media and bring more content to the web on a platform I build myself.",
                        "Micro blogging and images will be amongst the first of the new features to arrive sometime this year (hopefully).",
                        "But this is depending largely how much free time I can find when I'm not building products/websites for my business Alchemist Labs.",
                        "Stay tuned!"
                    ]}
                    link={{ post_text: "CHECK OUT ", url: "http://www.alchemistlabs.tech/", url_text: "ALCHEMIST LABS" }}
                />
                <Post
                    month={"Aug"}
                    day={"27"}
                    year={"2020"}
                    title={"Update"}
                    content={[
                        "It's been a long time since I gave an update on here but things have been going from strength to strength.",
                        "Around 18 months ago I launched my own company Alchemist Labs which has been my day job ever since.",
                        "We have a super top-secret new product in the works, and a new website to launch soon.",
                        "More details to follow..."
                    ]}
                    link={{ post_text: "You can find ALCHEMIST LABS ", url: "http://www.alchemistlabs.tech/", url_text: "here" }}
                />
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Index;