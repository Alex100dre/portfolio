import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-grid-system'
import Fade from 'react-reveal/Fade'
import Paper from '../../../../components/commons/Paper'
import { Content, PortraitImage } from './About.style'
import portaitImg from '../../../../assets/images/avatar.jpg'
import Section, { SectionTitle } from '../../../../components/commons/Section'

export default class About extends Component {
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     projects: null,
  //     loading: true,
  //   }
  // }
  //
  // componentWillMount() {
  //   const ref = firebase.database().ref('projects')
  //
  //   ref.on('value', (snapshot) => {
  //     this.setState({
  //       projects: snapshot.val(),
  //       loading: false,
  //     })
  //   }, (error) => {
  //     console.log(`Error while getting data from firebase database:\n  ${error}`)
  //   })
  // }

  render() {
    // const { projects, loading } = this.state

    // if (loading) return <h1>CHARGEMENT EN COURS...</h1>

    return (
      <Fade bottom distance="100px">
        <Section>
          <Paper overlapTop>
            <SectionTitle>À propos</SectionTitle>
            <Content>
              <PortraitImage src={portaitImg} alt="Alexandre Hachim" />
              <p>
                Qui suis-je ? Que fais-je ? Où vais-je ?
                C'est pour tenter de répondre à ces questions, assez redondantes, en fait, que j'écris ce magnifique pavé.
              </p>

              <p>
                Ayant grandit dans la fabuleuse époque des 90's et ayant connu les vestes fluo, le club Dorothée,
                les jojos, les pogs, les walkmans, la game boy et jen passe.
                Mais ayant surtout connu la vie
                {' '}
                <abbr title="avant internet">ante-internet</abbr>
, c'est après quelques années
                d'études superieur que je me suis lancé dans le
                {' '}
                <strong>développement web</strong>
.
              </p>

              <p>
                En effet, je m'y découvre rapidement une vocation et en ai fait aujourd'hui mon metier.
              </p>
              <p>
                Ayant appréhendé plusieurs langages (php, C# unity VR, etc...), je me concentre à présent sur
                le
                {' '}
                <strong>javascript</strong>
                {' '}
via la stack
                {' '}
                <strong>react/redux/node</strong>
...
              </p>

              <p>
                Fort de
                {' '}
                <strong>4 années d'experience</strong>
                {' '}
en tant que
                {' '}
                <strong>développeur web</strong>
, je suis
                actuellement en mission à la Société Générale pour le compte de BeNext en tant
                qu'
                <strong>ingénieur d'études</strong>
                {' '}
alias
                {' '}
                <strong>développeur web fullstack JS</strong>
.
              </p>

              <p>
                Vie professionelle mise à part, je suis un grand amateur de jeux vidéo, science-fiction, voyage, dessin, sport,
                actualité tech et spatiale, livre audio (#audible), culture nippone, mais aussi de drone et plus globalement de vidéo.
                <br />
                J'ai d'ailleurs, bien qu'étant novice dans le domaine, créé une chaine youtube dédié à cette dernière
                passion que vous pouvez consulter en
                {' '}
                <a href="https://www.youtube.com/channel/UCD2nU6-sTxDiacobzEtwyZw">cliquant ici</a>
              </p>

              <p>
                Je visionne d'ailleurs pas mal de vidéos sur youtube et des chaînes telles que celles d'e-penser, dirty-biology,
                science étonnante ou encore pause process me divertissent ennormemment.
              </p>

              <p>
                Conernant le futur, c'est un exercice assez périlleux que d'essayer de se projeter dans l'avenir et il
                n'est pas non plus des plus plaisant de s'imaginer vieillir.
              </p>
              <p>
                En effet, je pourrais tout aussi bien rester à paris que partir vivre à l'autre bout du monde. Qui sait ?
              </p>
              <p>
                Une chose est sûre cependant, n'aimant pas spécialement le changement, il y a peu de chance que je me lance dans
                une reconversion profesionnelle du jour au landemain.
              </p>
            </Content>
          </Paper>
        </Section>
      </Fade>
    )
  }
}
