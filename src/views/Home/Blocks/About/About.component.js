import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import Paper from '../../../../components/commons/Paper'
import {Content, PortraitImage} from './About.style'
import portaitImg from '../../../../assets/images/avatar.jpg'
import Section, {SectionTitle} from '../../../../components/commons/Section'

export default class About extends Component {
    getYearsOfWork = () => {
        const firstJobYear = 2014;
        const thisYear = new Date().getFullYear();

        return thisYear - firstJobYear;
    }

    render() {
        // const { projects, loading } = this.state

        // if (loading) return <h1>CHARGEMENT EN COURS...</h1>

        return (
            <Fade bottom distance="100px">
                <Section>
                    <Paper overlapTop>
                        <SectionTitle>À propos</SectionTitle>
                        <Content>
                            <PortraitImage src={portaitImg} alt="Alexandre Hachim"/>

                            <p>Je suis <strong>développeur web fullstack</strong> résidant en région parisienne
                                spécialisé
                                en <strong>JavaScript</strong>/<strong>TypeScript</strong> (<strong>React</strong>/<strong>Node.js</strong>).
                                Passionné par le <strong>développement
                                    web</strong> et la création d'expériences utilisateur de qualité. </p>
                            <p>Fort de <strong>{this.getYearsOfWork()} années d'expérience</strong>, j'ai acquis une
                                solide
                                expertise dans l'écosystème JavaScript.</p>

                            <p>
                                J'ai eu l'opportunité de collaborer sur des projets pour de grands comptes parmis lesquels je peux citer,
                                mk2, Mazars, le Crédit Agricole, Nexity, la Société Générale, ou encore le Ministère de
                                l'Intérieur.
                            </p>

                            <p>
                                J'ai pu explorer tous les aspects du développement web (front et back), de la conception à la mise en production,
                                en passant par la maintenance et l'optimisation de performances.
                            </p>

                            <p>J'accorde une grande importance à la <strong>collaboration</strong> et au <strong>partage
                                de
                                connaissances</strong>, que ce soit au sein d'une équipe de développement ou à travers
                                des
                                initiatives communautaires. </p>

                            <p>Toujours curieux et en quête d'amélioration continue, je m'efforce de
                                trouver un équilibre entre les besoins des clients et la qualité du code.</p>

                            <p>Ma plus grande satisfaction est de voir des utilisateurs bénéficier directement de solutions que j’ai aidé à concevoir.</p>

                            <p>Si vous cherchez un <strong>développeur passionné</strong> par les <strong>technologies
                                web</strong>, n'hésitez pas à me contacter.</p>
                        </Content>
                    </Paper>
                </Section>
            </Fade>
        )
    }
}
