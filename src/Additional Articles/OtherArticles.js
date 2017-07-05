import React, { Component } from 'react'
import './OtherArticles.css'
import SingleOrcs from './singleorcs'
import Mountain from './mountain'
import MoreGold from './moregold'
import IndianaHobbitts from './indianahobbits'

class OtherArticles extends Component {
  render() {
    return (
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <SingleOrcs />
            
            <Mountain />

            <MoreGold />

            <IndianaHobbitts />
        </div>
    )
  }
}

export default OtherArticles