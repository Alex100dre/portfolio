import React, { Component } from 'react'
import PropTypes from 'prop-types'
import animationData from '../../assets/animations/splash-screen'
import {LogoAnimation, SkipButton, SplashScreenBg} from './SplashScreen.style'
import {STATUS} from "./SplashScreen.contants";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnimStopped: false,
      isAnimPaused: false,
      isActive: props.status === STATUS.TO_DISPLAY,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isAnimStopped: false }), 1500)
  }

  closeSplashScreen = () => {
    const { setStatus } = this.props
    this.setState({ isActive: false })
    setStatus(STATUS.SEEN)
  }

  skip = () => {
    const { setStatus } = this.props
    this.setState({ isActive: false })
    setStatus(STATUS.SKIP)
  }

  render() {
    const { status } = this.props
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
        {status === STATUS.TO_DISPLAY && (
          <SplashScreenBg isActive={isActive}>
            <LogoAnimation
              options={defaultOptions}
              isStopped={isAnimStopped}
              isPaused={isAnimPaused}
              eventListeners={eventListeners}
            />
            <SkipButton onClick={this.skip}>Passer l'intro ▸</SkipButton>
          </SplashScreenBg>
        )}
      </div>
    )
  }
}

SplashScreen.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
}
