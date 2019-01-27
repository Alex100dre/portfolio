import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as ReactDOM from 'react-dom'
import { YTVideoBgContainer, YTVideoBg, Overlay } from './YoutubeVideoBg.style'

export default class YoutubeVideoBg extends Component {
  static calculateRatioHeight(width) { return Math.round(width / 16 * 9) }

  static calculateRatioWidth(height) { return Math.round(height / 9 * 16) }

  static calculateRatioByHighestValue(wBoundaries, hBoundaries) {
    // By default,  calculate 16/9 ratio by width boundaries
    const ratio = { width: wBoundaries, height: this.calculateRatioHeight(wBoundaries) }

    // If height boundaries are higher than width ones then calculate ratio by height boundaries
    if (hBoundaries > wBoundaries) {
      ratio.width = this.calculateRatioWidth(hBoundaries)
      ratio.height = hBoundaries
    }

    return ratio
  }


  constructor() {
    super()
    this.state = {
      node: null,
      parentNode: null,
      width: 1640,
      height: 922,
      loading: true,
      player: null,
      centerDelta: {
        horizontal: 0,
        vertical: 0,
      },
    }

    this.onVideoReady = this.onVideoReady.bind(this)
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    const { parentNode } = node
    const wBoundaries = window.innerWidth
    const hBoundaries = parentNode.clientHeight

    const ratio = YoutubeVideoBg.calculateRatioByHighestValue(wBoundaries, hBoundaries)

    this.setState(
      {
        node,
        parentNode,
        width: ratio.width,
        height: ratio.height,
        loading: false,
      },
      () => this.centerVideo(),
    )


    // window.onblur = this.onBlur
    // window.onfocus = this.onFocus
    // window.addEventListener("focus", this.onFocus())
    // window.addEventListener("blur", this.onBlur())
  }

  centerVideo() {
    const { parentNode, width, height } = this.state
    const parentWidth = parentNode.clientWidth
    const parentHeight = parentNode.clientHeight
    let parentChildWidthDelta = 0
    let horizontalCenterDelta = 0
    const verticalCenterDelta = 0

    if (width > parentWidth) {
      parentChildWidthDelta = width - parentWidth
      horizontalCenterDelta = -parentChildWidthDelta * 0.25
    }
    // if (height > parentHeight) {
    //   verticalCenterDelta = -height * 0.25
    // }
    this.setState({
      centerDelta: {
        horizontal: horizontalCenterDelta,
        vertical: verticalCenterDelta,
      },
    })
  }

  onBlur() {
    console.log('page blur -------')
    this.videoPlayPause(false)
  }

  onFocus() {
    console.log('page focus +++++++')
    this.videoPlayPause(true)
  }

  onVideoReady(event) {
    event.target.mute()
    this.setState({
      player: event.target,
    })
  }

  videoPlayPause(shouldPlay) {
    console.log('shouldplay')
    const { player } = this.state
    if (player && shouldPlay) {
      player.playVideo()
    } else if (player && !shouldPlay) {
      player.pauseVideo()
    }
  }


  render() {
    const {
      videoId, playlist, overlay, start,
    } = this.props
    const {
      height, width, centerDelta, loading,
    } = this.state
    const opts = {
      height,
      width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        loop: 1,
        playlist,
        showinfo: 0,
        controls: 0,
        start,
      },
    }

    // Hack to force video auto play on iOS
    this.videoPlayPause(true)

    if (loading) return (<p>Loading</p>)

    return (
      <YTVideoBgContainer>
        <YTVideoBg
          videoId={videoId}
          opts={opts}
          onReady={this.onVideoReady}
          centerDelta={centerDelta}
        />
        {overlay && (<Overlay />)}
      </YTVideoBgContainer>
    )
  }
}

YoutubeVideoBg.propTypes = {
  videoId: PropTypes.string.isRequired,
  playlist: PropTypes.arrayOf(PropTypes.string),
  start: PropTypes.number,
  overlay: PropTypes.bool,
}

YoutubeVideoBg.defaultProps = {
  playlist: null,
  start: 0,
  overlay: true,
}
