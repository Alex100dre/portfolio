import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Fade from 'react-reveal/Fade'
import { Container } from 'react-grid-system'
import Paper from '../../../../components/commons/Paper'
import { SectionStyled, Content, SubmitBtn } from './Contact.style'
import { SectionTitle } from '../../../../components/commons/Section'
import Background from '../../../../assets/images/home/bg_contact.png'
import Grid from '../../../../components/commons/Grid'
import {
  Form, Input, Textarea, Fieldset,
} from '../../../../components/commons/Form'

export default class Contact extends Component {
  render() {
    return (
      <SectionStyled bgImage={Background}>
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
                  <Fieldset>
                    <Input type="text" name="lastname" id="lastname" placeholder="Wayne" label="Nom" required />
                    <Input type="text" name="firstname" id="firstname" placeholder="Bruce" label="Prénom" required />
                    {/* TODO: FIX Button component by using props conditionnal styles instead of class */}
                    <SubmitBtn type="primary" className="primary">Envoyer</SubmitBtn>
                  </Fieldset>
                  <Fieldset>
                    <label htmlFor="message">Message</label>
                    <Textarea name="message" id="message" cols="30" rows="10" placeholder="I'm Batman!" required />
                  </Fieldset>
                </Grid>
              </Form>
            </Content>
          </Paper>
        </Container>
      </SectionStyled>
    )
  }
}
