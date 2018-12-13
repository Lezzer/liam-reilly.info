import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
// import { Helmet } from "react-helmet";
import css from './post.css';


export default class Post extends Component
{
    render() {
        const { match: { params } } = this.props;

        const content = require('../../../../public/blog/posts/' + params.post);
        
        // const img = 'https://liam-reilly.info/public/liam-reilly-info.png';
        // const url = 'https://liam-reilly.info/public/blog/posts/' + params.post;
        
        return (
            <div className={css.post}>
                {/*<Helmet>*/}
                    {/*<meta property="og:image" content={img} />*/}
                    {/*<meta property="og:image:alt" content="Liam Reilly" />*/}
                    {/*<meta property="og:image:width" content="256" />*/}
                    {/*<meta property="og:image:height" content="256" />*/}
                    {/*<meta property="og:image:type" content="image/png" />*/}
                    {/*<meta property="og:description" content="Liam Reilly" />*/}
                    {/*<meta property="og:url" content={url} />*/}
                {/*</Helmet>*/}
                <ReactMarkdown source={content}/>
            </div>
        );
    }
}