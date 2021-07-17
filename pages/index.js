import React from "react";
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import Post from "../components/post"
import SiteContainer from "../components/site-container";
import Page from "../components/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid"
import Blog from "../components/blog";

const Index = () => (
    <React.Fragment>
        <Head>
            <title>liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Blog
                    year="2021"
                    month="none"
                />
                <Post
                    day={ "14" }
                    month={ "July" }
                    year={ "2021" }
                    title={ "Hustle... Smarter" }
                    anchor={ "hustle" }
                    link={ {
                        post_text: "See what others are saying on ",
                        url: "https://www.goodreads.com/book/show/43801262-hustle-harder-hustle-smarter",
                        url_text: "Goodreads",
                        external: true
                    } }
                >
                    <p>Anybody that knows me knows that I've always been a huge fan of 50 Cent. I can still
                        remember where I was sat that Friday night back in 2003 whilst listening to Tim Westwood when he
                        played practically every track off of his album <strong>Get Rich or Die Tryin</strong>. A few
                        months later I
                        was watching him perform the album live on the tour of the same name, here in England. I still
                        listen to that album today and enjoy it just as much as I did all those years ago.</p>
                    <p>Since then 50 has continued to evolve and has seemed to print money with one successful business
                        after another and there is probably a generation of kids now that only know him for making hit
                        TV shows.</p>
                    <p>So following on from reading the autobiographies of Phil Knight (NIKE) and Ray Kroc (McDonalds)
                        what better book could there be for me to read other than:</p>
                    <img
                        alt="picture of the cover art for the book Hustle Harder, Hustle Smarter by Curtis '50 Cent' Jackson"
                        src="https://images.isbndb.com/covers/38/27/9780062953827.jpg"/>
                    <p>I've actually read 5 chapters already and it's incredible, but I knew it would be because I'd
                        already had a glimpse into the way Curtis Jackson operates from when I read <strong>The 50th
                            Law</strong> earlier in the year.
                        That book was written collaboratively by the legendary Robert Greene (The 48 Laws of Power) and
                        50 Cent.</p>
                    <p>This book really does show you behind the curtain, breaks down previous business deals and shares
                        many of his secrets and explains the way his mind works and how yours should to if you want to
                        succeed in life.</p>
                    <p>I can't wait to read the 2nd half of the book!</p>
                </Post>
                <Post
                    day={ "5" }
                    month={ "July" }
                    year={ "2021" }
                    title={ "Swoosh!" }
                    anchor={ "swoosh" }
                    link={ {
                        post_text: "Netflix might be making this into a ",
                        url: "https://variety.com/2018/film/news/netflix-phil-knight-biopic-shoe-dog-1202887364/#!",
                        url_text: "movie",
                        external: true
                    } }
                >
                    <p>As you might know from my previous <a href="#mcdonalds">post</a> I recently read the
                        autobiography of Ray Kroc and how he built the McDonalds corporation. I enjoyed this book a lot!
                        I told my girlfriend Fleur that I enjoyed this book more than any other book I'd read in my
                        life.</p>
                    <p>It's hard to imagine a world without McDonalds now, they are literally everywhere all over the
                        world but you just don't really think about how that happened or the extraordinary hard work,
                        persistence, risk taking, deal making etc that it took for this to come to be. Ray Kroc
                        explained all of this in so much detail and it's absolutely inspiring and motivating and it's
                        true what they say "hard work pays off".</p>
                    <p>So I went back to my bookshelf to choose my next book and it suddenly seemed obvious that my next
                        read should be <strong>Shoe Dog: A Memoir by the Creator of NIKE</strong>.</p>
                    <img alt="picture of the cover art for the book Shoe Dog by Phil Knight"
                         src="https://images.isbndb.com/covers/67/01/9781471146701.jpg"/>

                    <p>I've read a couple of chapters so far and whilst the backgrounds of the two men (Ray Kroc and
                        Phil Knight) are very different, the lessons and stories in the book are the same. They both
                        have the same self belief, the same wish to build something big for themselves and the same
                        dogged determination to succeed. They both started with nothing and took chances and risked it
                        all until eventually they became two of the most successful entrepreneurs in history! </p>
                    <p>So I read these stories everytime self doubt starts to creep in and I wonder if I'm wasting my
                        time or making a mistake in my business. I remind myself that mistakes are fine, as long as you
                        keep going. </p>
                    <p>Every business starts with an idea (or in my case with one man and hundreds of ideas) but if you
                        keep going, moving forward everyday who knows where it will end up?</p>
                </Post>
                <Post
                    day={ "29" }
                    month={ "June" }
                    year={ "2021" }
                    title={ "Apple AirPods No :(" }
                    anchor={ "airpods" }
                    link={ {
                        post_text: "I found other people reporting similar ",
                        url: "https://discussions.apple.com/thread/250896003",
                        url_text: "here",
                        external: true
                    } }
                >
                    <h1>My Apple AirPods Pro just went from hero to zero in no time...</h1>
                    <p>Let me start by saying I've been a massive fan of my Apple AirPods for years now. I had a pair of
                        the originals which I used daily for a year or so and I upgraded to the AirPods Pro in September
                        of 2020.</p>
                    <p>I absolutely loved my original AirPods and recommended them to people all the time. I had mixed
                        feelings when I upgraded to the AirPods Pro, as I wasn't a huge fan of the Silicon tips. Seemed
                        like a step backwards to me and I found the originals sat in my ear much more comfortably. But I
                        soon got used to them and appreciated the new noise cancellation features.</p>
                    <p>Recently however I noticed my ears were extremely sore. They were sore to the touch, I noticed
                        this when cleaning them. I also noticed that my ears seemed very waxy later on in the day which
                        is very unusual and something that isn't normally a problem. Finally I noticed my ears started
                        to become flaky as well as sore.</p>
                    <p>I stopped using my AirPods Pro immediately at this point and went back to the wired headphones
                        that came with my iPhone. My ears quickly healed and returned to normal. So I tried the AirPods
                        Pro again. I listened to music for an hour or so and took a couple of phone calls. I then
                        removed them and waited to see if the ear problems would return over the next day or
                        so...<strong>they did!</strong></p>
                    <p>I have now repeated this same test on three separate occasions, weeks apart. Each time my ears
                        were perfectly normal and I'd only used wired earphones. Each time a day or two after using the
                        AirPods Pro my ears would develop sores, flakes and all that good stuff.</p>
                    <img alt="picture damage caused to my ear by airpods pro"
                         src="/static/images/blog/29-06-2021-airpods/ear.jpg"/>
                    <p>I've searched online and I've seen people reporting the same issue. Many are suggesting that the
                        problem is an allergic reaction to the Silicon tips but I do not think this is the true cause. I
                        wore these for months without a problem. This is a problem that has developed very recently.</p>
                    <p>I have theories as to what is causing this but I don't want to talk openly about these yet. I
                        will try some alternative tips and see if that helps</p>
                    <p>I hope this isn't caused by what I think it is though as it's getting next to impossible to find
                        wired alternatives these days and I expect pretty soon there will be no wired alternatives in
                        production at all.</p>
                </Post>
                <Post
                    day={ "23" }
                    month={ "June" }
                    year={ "2021" }
                    title={ "The Founder!" }
                    anchor={ "mcdonalds" }
                    link={ {
                        post_text: "If you've not seen The Founder check it out on ",
                        url: "https://www.imdb.com/title/tt4276820/",
                        url_text: "IMDB",
                        external: true
                    } }
                >
                    <p>I recently watched a movie that I randomly found on Amazon Prime called 'The Founder'. I knew
                        nothing about it going in and ended up enjoying it immensely. The movie tells the true story of
                        the earliest days of Mcdonald's and how it came to be the multi national juggernaut that it is
                        today. If you've not seen it I definitely recommend it, and I will try to avoid spoilers in this
                        post.</p>
                    <p>As an ambitious business owner myself I was particularly intrigued by a character in the movie
                        called Ray Kroc who was played brilliantly by Michael Keaton.</p>
                    <p>A few weeks after watching the movie I was searching online for various entrepreneurial books,
                        particularly autobiographies when I came across <strong>Grinding It Out</strong> by the man
                        himself Ray Kroc.</p>
                    <img alt="picture of the book Grinding It Out by Ray Kroc"
                         src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1379150499l/498886.jpg"/>
                    <p>So this is my current read. I'm very excited to read the story in more detail and to pick up some
                        hints/tips and motivation to keep me focussed on my goals.</p>
                </Post>
                <Post
                    day={ "18" }
                    month={ "June" }
                    year={ "2021" }
                    title={ "Subscribe!" }
                    anchor={ "subscribe" }
                    link={ {
                        post_text: "You can also subscribe using this link to the RSS feed ",
                        url: "https://www.liam-reilly.info/static/feed.xml",
                        url_text: "here",
                        external: true
                    } }
                >
                    <p>I was thinking as I am now posting to this website more often it might be a good idea to add a
                        feed.</p>
                    <p>I've added a simple RSS 2.0 feed to the website now. The permanent link can be found in the
                        footer of the page.</p>
                </Post>
                <Post
                    day={ "12" }
                    month={ "June" }
                    year={ "2021" }
                    title={ "Troubling Times" }
                    anchor={ "TroublingTimes" }
                    link={ {
                        post_text: "Find out more about the book ",
                        url: "https://www.lauradodsworth.com/a-state-of-fear/",
                        url_text: "here",
                        external: true
                    } }
                >
                    <blockquote>Dare to think for yourself - Voltaire</blockquote>
                    <p>We are truly living through troubling times right now. Life has been pretty good in my lifetime.
                        No world wars or even civil wars in England at least. It's my belief that this changed in
                        2019.</p>
                    <p>When you think of wars you probably think of tanks, bombs and fighting. This is how wars are
                        fought right? This is how traditional wars <strong>were</strong> fought!</p>
                    <p>It's my honest belief we are currently living through World War 3 but because the style has
                        changed most people just don't realise it's begun.</p>
                    <p>Wars are waged in secret. Corruption, propaganda and never ending marketing of fear are all
                        that's required to defeat the enemy. That enemy is you and me!</p>
                    <p>Over the last year I've spent far too much time closely observing the never ending propaganda in
                        this country (England) and abroad including the US, Canada, France and more. I've seen world
                        leaders tell lie after lie, move goal post after goal post whilst peoples lives have been
                        becoming increasingly worse. </p>
                    <p>At first glance it may appear like every country is acting independently and making its own rules
                        but this simply isn't true at all. It's the same playbook everywhere with only minor
                        differences.</p>
                    <p>It's quite overwhelming trying to work out what's happening and where we are heading next with
                        big tech routinely censoring information but finally I've found a good book that helps us
                        understand what's going on, certainly in England.</p>
                    <h1>Enter Laura Dodsworth - A State Of Fear</h1>
                    <img alt="front cover of book A State Of Fear"
                         src="https://images.squarespace-cdn.com/content/v1/5bae19878155122241cabd0b/1616511915987-J1JGDPRRA6EJ01GY8U3R/ke17ZwdGBToddI8pDm48kNQa-yP5tU6UpWN-P-Q7dtJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmK-rtDVyS8lrwwDyo1SUQ5r0bHfK6lxahlhcDVEA_2l0xemIWRhl9A0JHzq0-bDiS/9781780667201.jpg?format=250w"/>
                    <p>As soon as I saw this book I knew I had to read it! Today I've read the first four chapters and
                        right from the introduction Laura provides data and facts which have been completely and
                        deliberately missing from the media and Government updates.</p>
                    <p>I will be flying through this book over the next few days and then I will be sending copies out
                        to friends/family. It's truly a book I think everybody <strong>needs</strong> to read!</p>
                    <p>Whether you want to admit it or not, things are far from normal right now and if you ever want
                        your old normal to return you need to learn how you're being manipulated and learn how to fight
                        back! You need to learn to think for yourself!</p>
                    <p>I urge you to pick up a copy and give it a read!</p>
                </Post>
                <Post
                    month={ "June" }
                    day={ "01" }
                    year={ "2021" }
                    title={ "Update" }
                    anchor={ "BeyondOrder" }
                    link={ {
                        post_text: "You can learn more about Jordan B. Peterson ",
                        url: "https://www.jordanbpeterson.com/",
                        url_text: "here",
                        external: true
                    } }
                >
                    <p>Another new month, another book delivery. I swear I will not purchase any more books for the rest
                        of the year now!</p>
                    <p>I started the year with a handful of physical books scattered around my house but when I decided
                        to improve my home office, a bookshelf was top of the list of things I needed to buy. I grossly
                        overestimated the number of books I owned and built a bookshelf floor to ceiling which looked
                        embarrassingly bare when I put my handful of books on the shelves!</p>
                    <p>Fast forward a few months and it's now looking much healthier with 70+ books on the shelf
                        currently with a couple more books still due to arrive.</p>
                    <p>I finished reading my current book 'The Parasitic Mind: How infectious ideas are killing common
                        sense' by the wonderful Gad Saad this morning and I have to say I think this book should be
                        required reading in every high school and college/university. I cannot praise this book highly
                        enough and thoroughly recommend you grab a copy today. Society depends on it! It really is that
                        good.</p>
                    <p>A number of new books were delivered which I'm looking forward to reading but as I sat at my desk
                        looking over them all I found myself automatically reading the complete overture section of
                        'Beyond Order' by the equally fantastic Jordan B. Peterson and with that subconsciously I
                        decided my next read.</p>
                    <p>I'm quite happy that it worked out this way to be honest. My recent reading order has been as
                        follows:</p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={ faChevronRight }/>
                            <span><strong>Jordan B. Peterson</strong> - 12 Rules for Life. An antidote to Chaos.</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faChevronRight }/>
                            <span><strong>Dr Gad Saad</strong> - The Consuming Instinct.</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faChevronRight }/>
                            <span><strong>Dr Gad Saad</strong> - The Parasitic Mind. How infectious ideas are killing common sense.</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faChevronRight }/>
                            <span><strong>Jordan B. Peterson</strong> - Beyond Order.</span>
                        </li>
                    </ul>
                    <p>Quite a nice symmetry, a natural order from Chaos even :)</p>
                </Post>
                <Post
                    month={ "May" }
                    day={ "28" }
                    year={ "2021" }
                    title={ "Update" }
                    anchor={ "ParasiticMind" }
                    link={ {
                        post_text: "You can learn more about Dr Gad Saad ",
                        url: "https://www.gadsaad.com/",
                        url_text: "here",
                        external: true
                    } }
                >
                    <p>I don't often read two books in a row from the same author or even on the exact same subject, but
                        I find Gad Saad so interesting I've done just that again this month.</p>
                    <p>You might have noticed that in January I did read both Tyson Fury books back to back, and whilst
                        you can't tell from the website I did also read 2x MMA books to back last year. (Michael
                        Bisping: Quitters Never Win and Dan Hardy: Part Reptile). But this isn't my modus operandi.</p>
                    <p>'The Parasitic Mind: How Infectious Ideas Are Killing Common Sense' arrived a couple of days
                        before I finished reading 'The Consuming Instinct' and I couldn't wait to jump into the new book
                        so that's what I did, the very next day!</p>
                    <p>If you're a bit fed up of woke nonsense seemingly destroying every facet of modern society and
                        wonder how/why things are the way they are right now I thoroughly recommend you check out the
                        book. It's brilliant!</p>
                </Post>
                <Post
                    month={ "May" }
                    day={ "13" }
                    year={ "2021" }
                    title={ "New Book Day!" }
                    anchor={ "ConsumingInstinct" }
                    link={ {
                        post_text: "You can learn more about Dr Gad Saad ",
                        url: "https://www.gadsaad.com/",
                        url_text: "here",
                        external: true
                    } }
                >
                    <p>One of my most favourite personal moments these days is picking a new book to read from my ever
                        growing bookshelf.</p>
                    <p>Today is that day!</p>
                    <p>I've bought many books this year, far more than I will probably even have time to read this year.
                        I've bought around 10-15 books this week covering a large variety of topics including
                        psychology, branding, business strategy, computing books and more.</p>
                    <p>I am addicted to reading now and I have a thirst for knowledge to help me grow as a human being
                        first and foremost, but also to add some new skills to enable me to make my business a
                        success.</p>
                    <p>I have received a book delivery most days this week and they will continue long into next week,
                        today is one of those days. I ordered two books by Dr Gad Saad. The Parasitic Mind is not yet
                        with me but an earlier book of his arrived today so I think I've got my next book picked
                        out.</p>
                    <p>The Consuming Instinct - Dr Gad Saad"</p>
                </Post>
                <Post
                    month={ "May" }
                    day={ "03" }
                    year={ "2021" }
                    title={ "Google... FLoC off!" }
                    anchor={ "FloC" }
                    link={ {
                        post_text: "You can learn more about FLoC ",
                        url: "https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea",
                        url_text: "here",
                        external: true
                    } }
                >
                    <p> Just a quick update. I added the headers to the site which opt out of Google's invasive
                        Federated Learning of Cohorts (FLoC).</p>
                </Post>
                <Post
                    month={ "May" }
                    day={ "02" }
                    year={ "2021" }
                    title={ "Books!" }
                    anchor={ "Books" }
                    link={ { post_text: "" } }
                >
                    <p>I've been reading a lot this year. I like to start each day reading a chapter or two of a book
                        rather than doom scroll social media. I find myself to be much happier and productive when I do
                        this!</p>
                    <p>Because I'm reading so many books now I wanted a way to keep track so I figured why not use this
                        website to keep track. So today I've added a new books page, with a simple timeline showing the
                        books I've read so far in 2021.</p>
                    <p>It's very simple for now but I plan to expand it and make it a bit more useful in the future.</p>
                    <p>Please take a look and get in touch if you have any recommendations or want to talk about
                        something I've read.</p>
                </Post>
                <Post
                    month={ "Jan" }
                    day={ "27" }
                    year={ "2021" }
                    title={ "New Website!" }
                    anchor={ "NewWebsite" }
                    link={ {
                        post_text: "CHECK OUT ",
                        url: "https://www.alchemistlabs.tech/",
                        url_text: "ALCHEMIST LABS"
                    } }
                >
                    <p>After years of neglect I decided to completely rebuild and slightly re-design this website.</p>
                    <p>The website has now been re-built using the very latest versions of NextJS & React.</p>
                    <p>I intend to use this website a lot more going forward as I reduce my big tech/social media and
                        bring more content to the web on a platform I build myself.</p>
                    <p>Micro blogging and images will be amongst the first of the new features to arrive sometime this
                        year (hopefully).</p>
                    <p>But this is depending largely how much free time I can find when I'm not building
                        products/websites for my business Alchemist Labs.</p>
                    <p>Stay tuned!</p>
                </Post>
                <Post
                    month={ "Aug" }
                    day={ "27" }
                    year={ "2020" }
                    title={ "Update" }
                    anchor={ "AlchemistLabs" }
                    link={ {
                        post_text: "You can find ALCHEMIST LABS ",
                        url: "https://www.alchemistlabs.tech/",
                        url_text: "here"
                    } }
                >
                    <p>It's been a long time since I gave an update on here but things have been going from strength to
                        strength.</p>
                    <p>Around 18 months ago I launched my own company Alchemist Labs which has been my day job ever
                        since.</p>
                    <p>We have a super top-secret new product in the works, and a new website to launch soon.</p>
                    <p>More details to follow...</p>
                </Post>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Index;