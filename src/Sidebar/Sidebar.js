import React, { Component } from 'react'
import './sidebar.css'
import Image from './adimage'

class SideBar extends Component {
  render() {
    return (
        <aside className="large-4 medium-12 columns">
            <div className="ad">
              <h3>The Last Hammer You'll Ever Need</h3>

              <Image />

              <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
              <p className="ad-text">Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p className="ad-text">Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
            </div>
        </aside>
    )
  }
}

export default SideBar