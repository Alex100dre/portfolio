import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Row, Col } from 'react-grid-system'
// import Fade from 'react-reveal/Fade'
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin'
import { Overlay, Bash } from './EasterEgg.style'

export default class EasterEgg extends Component {
  nasaHack(args, print, runCommand) {
    console.log(args.color)
    runCommand('clear')
    // const text = '...............................'
    print('Initializing the hack')
    // print('Hack in progress')
    // for (let i = 0; i < text.length; i++) {
    //   setTimeout(() => {
    //     runCommand(`edit-line -l 2 ${text.slice(0, i + 1)}`)
    //   }, 100 * i)
    // }
  }

  render() {
    const { active, disable } = this.props
    const FileSystemPlugin = pseudoFileSystemPlugin()
    console.log(this.props)
    return (
      <div>
        {active
        && (
          <div>
            <Overlay>
              <Bash
                actionHandlers={{
                  handleClose: () => {
                    disable()
                  },
                }}
                plugins={[
                  FileSystemPlugin,
                ]}
                color="green"
                backgroundColor="black"
                barColor="black"
                style={{ fontWeight: 'bold', fontSize: '1em' }}
                commands={{
                  'type-text': (args, print, runCommand) => {
                    const text = args.slice(1).join(' ')
                    print('')
                    for (let i = 0; i < text.length; i += 1) {
                      setTimeout(() => {
                        runCommand(`edit-line ${text.slice(0, i + 1)}`)
                      }, 100 * i)
                    }
                  },
                  'nasa-hack': (args, print, runCommand) => {
                    this.nasaHack(args, print, runCommand)
                  },
                }}
                descriptions={{
                  'nasa-hack': 'Hacking program for Nasa\'s servers',

                }}
                msg={'\n'
                + '.           .                         \n'
                + '|           |                         \n'
                + '| ,-. --- ,-| ,-. . ,   ,-. ,-. ;-.-. \n'
                + "| |-'     | | |-' |/    |   | | | | | \n"
                + "' `-'     `-' `-' '   o `-' `-' ' ' ' \n"
                + '                                      \n'}
                promptSymbol="hacker@le-dev >"
              />
            </Overlay>
          </div>
        )
        }
      </div>
    )
  }
}
EasterEgg.propTypes = {
  active: PropTypes.bool,
  disable: PropTypes.func.isRequired,
}
EasterEgg.defaultProps = {
  active: false,
}
