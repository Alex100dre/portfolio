import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Container } from 'react-grid-system'
import { Header, Title, LSDText, LSDShadow, LSDTextContainer } from './MainHeader.style'
import YoutubeVideoBg from '../commons/YoutubeVideoBg'


export default class MainHeader extends Component {
  render() {
    return (
      <Header>
        <YoutubeVideoBg videoId="PFt5f_RrUOM" playlist={['b1HgWo6TZNI', 'PFt5f_RrUOM']} />
        <Container>
          <Title>
            <span>
              <span className="lowOpacity">Alexandre</span>
              {' '}
              <span className="small">Hachim</span>
            </span>
            <LSDTextContainer textShadow="JS Developer" className="lowOpacity">
              <LSDShadow>JS Developer</LSDShadow>
              <LSDText>JS Developer</LSDText>
            </LSDTextContainer>
          </Title>
        </Container>
      </Header>
    )
  }
}

// MainHeader.propTypes = {
//   types: PropTypes.arrayOf(PropTypes.string),
//   onClick: PropTypes.func,
// };
//
// MainHeader.defaultProps = {
//   types: ['primary'],
//   onClick: () => {console.warn('You need to provide an onClick function to this button')},
// };
