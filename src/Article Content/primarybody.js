import React, { Component } from 'react'
import Avatar from './Avatar'
import ArticleText from './articlebody'
import Links from './links'

class Body extends Component {
  render() {
    return (
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
           
            <Avatar />
            
            <ArticleText />

            <Links />  
        </div>
    )
  }
}

export default Body