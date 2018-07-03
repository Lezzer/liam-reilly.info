import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './post.css';

export default class Post extends Component
{
    render() {
        return (
            <div className={css.post}>
                <div className={css.header}>
                    <div className={css.calendar}>
                        <span>{this.props.day}</span>
                        <span>{this.props.month}</span>
                    </div>
                    <h4>{this.props.title}</h4>
                </div>
                <hr/>
                <div>
                    {
                        this.props.content.map((x, i) => <p key={i}>{x}</p>)
                    }
                </div>
                <hr/> 
                {
                    this.renderLinkIfSupplied()
                }
            </div>
        );
    }
    
    renderLinkIfSupplied() {
        if (!this.props.link) return "";
        
        return <span className={css.post_link}>{this.props.link.post_text} 
                <a href={this.props.link.url}>{this.props.link.url_text}</a>
            </span>
    }
}

Post.propTypes = {
    month: PropTypes.string.isRequired,  
    day: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.shape({
        show: PropTypes.bool,
        post_text: PropTypes.string,
        url: PropTypes.string,
        url_text: PropTypes.string
    })
};