import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationData from '../../assets/animations/splash-screen'
import { LogoAnimation, SplashScreenBg } from './SplashScreen.style'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnimStopped: false,
      isAnimPaused: false,
      isActive: true,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isAnimStopped: false }), 1500)
  }

  closeSplashScreen = () => {
    const { setSplashScreenSeen } = this.props
    this.setState({ isActive: false })
    setSplashScreenSeen()
  }

  render() {
    const { alreadySeen } = this.props
    const { isAnimStopped, isAnimPaused, isActive } = this.state
    const { closeSplashScreen } = this
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }
    const eventListeners = [
      {
        eventName: 'complete',
        callback: () => closeSplashScreen(),
      },
    ]

    return (
      <div>
        {!alreadySeen && (
          <SplashScreenBg isActive={isActive}>
            <LogoAnimation
              options={defaultOptions}
              isStopped={isAnimStopped}
              isPaused={isAnimPaused}
              eventListeners={eventListeners}
            />
          </SplashScreenBg>
        )}
      </div>
    )
  }
}

SplashScreen.propTypes = {
  alreadySeen: PropTypes.bool.isRequired,
  setSplashScreenSeen: PropTypes.func.isRequired,
}
