import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Fade from 'react-reveal/Fade'
import { Container } from 'react-grid-system'
import Paper from '../../../../components/commons/Paper'
import { Content } from './Contact.style'
import Section, { SectionTitle } from '../../../../components/commons/Section'
import Background from '../../../../assets/images/home/bg_contact.png'
import Grid from '../../../../components/commons/Grid'
import { Form, Input, Textarea } from '../../../../components/commons/Form'
import Button from '../../../../components/commons/Button/Button.component'

export default class Contact extends Component {
  render() {
    return (
      <Section bgImage={Background}>
        <Container>
          <Paper>
            <SectionTitle>
              Contact
            </SectionTitle>
            <Content>
              <Form>
                <Grid cols={{
                  xs: 1, sm: 1, md: 2, lg: 2,
                }}
                >
                  <div>
                    <Input type="text" name="lastname" id="lastname" placeholder="Wayne" label="Nom" required />
                    <Input type="text" name="firstname" id="firstname" placeholder="Bruce" label="Prénom" required />
                    <Button>Envoyer</Button>
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <Textarea name="message" id="message" cols="30" rows="10" placeholder="I'm Batman!" required />
                  </div>
                </Grid>
              </Form>
            </Content>
          </Paper>
        </Container>
      </Section>
    )
  }
}
