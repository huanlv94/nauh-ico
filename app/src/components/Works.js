import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/worksStyle.css'

const Works = () => {
  return (
    <CSSTransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className='works'>
        Works
        </div>
    </CSSTransitionGroup>
  )
}

export default Works
