import React, { Component } from 'react'

class Setting extends Component {
  render() {
    return (
      <div className="demo">
        <ul className="list_none">
          <li><a href="#" className="dm" title="See All Demo"><i className="ion-android-apps" /></a></li>
          <li><a href="#" className="bg-green" title="Buy Now"><i className="ion-android-cart" /></a></li>
          <li><a href="#" className="txt" title="PSD">PSD</a></li>
          <li><a href="javascript:void(0)" className="icon"><i className="fa fa-gear" /></a>
            <div className="color-switch">
              <p>Color Switcher</p>
              <div className="color_box">
                <button value="theme" className="default active" />
                <button value="theme-green" className="green" />
                <button value="theme-orange" className="orange" />
                <button value="theme-lightgreen" className="lightgreen" />
                <button value="theme-redpink" className="redpink" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Setting