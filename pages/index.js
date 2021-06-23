import React from "react";
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import Post from "../components/post"
import SiteContainer from "../components/site-container";
import Page from "../components/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid"

const Index = () => (
    <React.Fragment>
        <Head>
            <title>liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Post
                    day={"23"}
                    month={"June"}
                    year={"2021"}
                    title={"The Founder!"}
                    anchor={"mcdonalds"}
                    link={{ post_text: "If you've not seen The Founder check it out on ", url: "https://www.imdb.com/title/tt4276820/", url_text: "IMDB", external: true }}
                >
                    <p>I recently watched a movie that I randomly found on Amazon Prime called 'The Founder'.  I knew nothing about it going in and ended up enjoying it immensely.  The movie tells the true story of the earliest days of Mcdonald's and how it came to be the multi national juggernaut that it is today.  If you've not seen it I definitely recommend it, and I will try to avoid spoilers in this post.</p>
                    <p>As am ambitious business owner myself I was particularly intrigued by a character in the movie called Ray Kroc who was played brilliantly by Michael Keaton.</p>
                    <p>A few weeks after watching the movie I was searching online for various entrepreneurial books, particularly auto biographies when I came across Grinding It Out by the man himself Ray Kroc.</p>
                    <img alt="picture of the book Grinding It Out by Ray Kroc" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379150499l/498886.jpg"/>
                    <p>So this is my current read. I'm very excited to read the story in more detail and to pick up some hints/tips and motivation to keep me focussed on my goals.</p>
                </Post>
                <Post
                    day={"18"}
                    month={"June"}
                    year={"2021"}
                    title={"Subscribe!"}
                    anchor={"subscribe"}
                    link={{ post_text: "You can also subscribe using this link to the RSS feed ", url: "https://www.liam-reilly.info/static/feed.xml", url_text: "here", external: true }}
                >
                    <p>I was thinking as I am now posting to this website more often it might be a good idea to add a feed.</p>
                    <p>I've added a simple RSS 2.0 feed to the website now. The permanent link can be found in the footer of the page.</p>
                </Post>
                <Post
                    day={"12"}
                    month={"June"}
                    year={"2021"}
                    title={"Troubling Times"}
                    anchor={"TroublingTimes"}
                    link={{ post_text: "Find out more about the book ", url: "https://www.lauradodsworth.com/a-state-of-fear/", url_text: "here", external: true }}
                >
                    <blockquote>Dare to think for yourself - Voltaire</blockquote>
                    <p>We are truly living through troubling times right now.  Life has been pretty good in my lifetime. No world wars or even civil wars in England at least.  It's my belief that this changed in 2019.</p>
                    <p>When you think of wars you probably think of tanks, bombs and fighting.  This is how wars are fought right?  This is how traditional wars <strong>were</strong> fought!</p>
                    <p>It's my honest belief we are currently living through World War 3 but because the style has changed most people just don't realise it's begun.</p>
                    <p>Wars are waged in secret. Corruption, propaganda and never ending marketing of fear are all that's required to defeat the enemy.  That enemy is you and me!</p>
                    <p>Over the last year I've spent far too much time closely observing the never ending propaganda in this country (England) and abroad including the US, Canada, France and more.  I've seen world leaders tell lie after lie, move goal post after goal post whilst peoples lives have been becoming increasingly worse. </p>
                    <p>At first glance it may appear like every country is acting independently and making its own rules but this simply isn't true at all.  It's the same playbook everywhere with only minor differences.</p>
                    <p>It's quite overwhelming trying to work out what's happening and where we are heading next with big tech routinely censoring information but finally I've found a good book that helps us understand what's going on, certainly in England.</p>
                    <h1>Enter Laura Dodsworth - A State Of Fear</h1>
                    <img src="https://images.squarespace-cdn.com/content/v1/5bae19878155122241cabd0b/1616511915987-J1JGDPRRA6EJ01GY8U3R/ke17ZwdGBToddI8pDm48kNQa-yP5tU6UpWN-P-Q7dtJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmK-rtDVyS8lrwwDyo1SUQ5r0bHfK6lxahlhcDVEA_2l0xemIWRhl9A0JHzq0-bDiS/9781780667201.jpg?format=250w"/>
                    <p>As soon as I saw this book I knew I had to read it!  Today I've read the first four chapters and right from the introduction Laura provides data and facts which have been completely and deliberately missing from the media and Government updates.</p>
                    <p>I will be flying through this book over the next few days and then I will be sending copies out to friends/family. It's truly a book I think everybody <strong>needs</strong> to read!</p>
                    <p>Whether you want to admit it or not, things are far from normal right now and if you ever want your old normal to return you need to learn how you're being manipulated and learn how to fight back!  You need to learn to think for yourself!</p>
                    <p>I urge you to pick up a copy and give it a read!</p>
                </Post>
                <Post
                    month={"June"}
                    day={"01"}
                    year={"2021"}
                    title={"Update"}
                    anchor={"BeyondOrder"}
                    link={{ post_text: "You can learn more about Jordan B. Peterson ", url: "https://www.jordanbpeterson.com/", url_text: "here", external: true }}
                >
                    <p>Another new month, another book delivery. I swear I will not purchase any more books for the rest of the year now!</p>
                    <p>I started the year with a handful of physical books scattered around my house but when I decided to improve my home office, a bookshelf was top of the list of things I needed to buy.  I grossly overestimated the number of books I owned and built a bookshelf floor to ceiling which looked embarrassingly bare when I put my handful of books on the shelves!</p>
                    <p>Fast forward a few months and it's now looking much healthier with 70+ books on the shelf currently with a couple more books still due to arrive.</p>
                    <p>I finished reading my current book 'The Parasitic Mind:  How infectious ideas are killing common sense' by the wonderful Gad Saad this morning and I have to say I think this book should be required reading in every high school and college/university.  I cannot praise this book highly enough and thoroughly recommend you grab a copy today.  Society depends on it!  It really is that good.</p>
                    <p>A number of new books were delivered which I'm looking forward to reading but as I sat at my desk looking over them all I found myself automatically reading the complete overture section of 'Beyond Order' by the equally fantastic Jordan B. Peterson and with that subconsciously I decided my next read.</p>
                    <p>I'm quite happy that it worked out this way to be honest. My recent reading order has been as follows:</p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <span><strong>Jordan B. Peterson</strong> - 12 Rules for Life. An antidote to Chaos.</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <span><strong>Dr Gad Saad</strong> - The Consuming Instinct.</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <span><strong>Dr Gad Saad</strong> - The Parasitic Mind. How infectious ideas are killing common sense.</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <span><strong>Jordan B. Peterson</strong> - Beyond Order.</span>
                        </li>
                    </ul>
                    <p>Quite a nice symmetry, a natural order from Chaos even :)</p>
                </Post>
                <Post
                    month={"May"}
                    day={"28"}
                    year={"2021"}
                    title={"Update"}
                    anchor={"ParasiticMind"}
                    link={{ post_text: "You can learn more about Dr Gad Saad ", url: "https://www.gadsaad.com/", url_text: "here", external: true }}
                >
                    <p>I don't often read two books in a row from the same author or even on the exact same subject, but I find Gad Saad so interesting I've done just that again this month.</p>
                    <p>You might have noticed that in January I did read both Tyson Fury books back to back, and whilst you can't tell from the website I did also read 2x MMA books to back last year.  (Michael Bisping: Quitters Never Win and Dan Hardy:  Part Reptile). But this isn't my modus operandi.</p>
                    <p>'The Parasitic Mind: How Infectious Ideas Are Killing Common Sense' arrived a couple of days before I finished reading 'The Consuming Instinct' and I couldn't wait to jump into the new book so that's what I did, the very next day!</p>
                    <p>If you're a bit fed up of woke nonsense seemingly destroying every facet of modern society and wonder how/why things are the way they are right now I thoroughly recommend you check out the book. It's brilliant!</p>
                </Post>
                <Post
                    month={"May"}
                    day={"13"}
                    year={"2021"}
                    title={"New Book Day!"}
                    anchor={"ConsumingInstinct"}
                    link={{ post_text: "You can learn more about Dr Gad Saad ", url: "https://www.gadsaad.com/", url_text: "here", external: true }}
                >
                    <p>One of my most favourite personal moments these days is picking a new book to read from my ever growing bookshelf.</p>
                    <p>Today is that day!</p>
                    <p>I've bought many books this year, far more than I will probably even have time to read this year. I've bought around 10-15 books this week covering a large variety of topics including psychology, branding, business strategy, computing books and more.</p>
                    <p>I am addicted to reading now and I have a thirst for knowledge to help me grow as a human being first and foremost, but also to add some new skills to enable me to make my business a success.</p>
                    <p>I have received a book delivery most days this week and they will continue long into next week, today is one of those days.  I ordered two books by Dr Gad Saad. The Parasitic Mind is not yet with me but an earlier book of his arrived today so I think I've got my next book picked out.</p>
                    <p>The Consuming Instinct - Dr Gad Saad"</p>
                </Post>
                <Post
                    month={"May"}
                    day={"03"}
                    year={"2021"}
                    title={"Google... FLoC off!"}
                    anchor={"FloC"}
                    link={{ post_text: "You can learn more about FLoC ", url: "https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea", url_text: "here", external: true }}
                >
                    <p> Just a quick update.  I added the headers to the site which opt out of Google's invasive Federated Learning of Cohorts (FLoC).</p>
                </Post>
                <Post
                    month={"May"}
                    day={"02"}
                    year={"2021"}
                    title={"Books!"}
                    anchor={"Books"}
                    link={{ post_text: ""}}
                >
                    <p>I've been reading a lot this year. I like to start each day reading a chapter or two of a book rather than doom scroll social media. I find myself to be much happier and productive when I do this!</p>
                    <p>Because I'm reading so many books now I wanted a way to keep track so I figured why not use this website to keep track. So today I've added a new books page, with a simple timeline showing the books I've read so far in 2021.</p>
                    <p>It's very simple for now but I plan to expand it and make it a bit more useful in the future.</p>
                    <p>Please take a look and get in touch if you have any recommendations or want to talk about something I've read.</p>
                </Post>
                <Post
                    month={"Jan"}
                    day={"27"}
                    year={"2021"}
                    title={"New Website!"}
                    anchor={"NewWebsite"}
                    link={{ post_text: "CHECK OUT ", url: "http://www.alchemistlabs.tech/", url_text: "ALCHEMIST LABS" }}
                >
                    <p>After years of neglect I decided to completely rebuild and slightly re-design this website.</p>
                    <p>The website has now been re-built using the very latest versions of NextJS & React.</p>
                    <p>I intend to use this website a lot more going forward as I reduce my big tech/social media and bring more content to the web on a platform I build myself.</p>
                    <p>Micro blogging and images will be amongst the first of the new features to arrive sometime this year (hopefully).</p>
                    <p>But this is depending largely how much free time I can find when I'm not building products/websites for my business Alchemist Labs.</p>
                    <p>Stay tuned!</p>
                </Post>
                <Post
                    month={"Aug"}
                    day={"27"}
                    year={"2020"}
                    title={"Update"}
                    anchor={"AlchemistLabs"}
                    link={{ post_text: "You can find ALCHEMIST LABS ", url: "http://www.alchemistlabs.tech/", url_text: "here" }}
                >
                    <p>It's been a long time since I gave an update on here but things have been going from strength to strength.</p>
                    <p>Around 18 months ago I launched my own company Alchemist Labs which has been my day job ever since.</p>
                    <p>We have a super top-secret new product in the works, and a new website to launch soon.</p>
                    <p>More details to follow...</p>
                </Post>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Index;