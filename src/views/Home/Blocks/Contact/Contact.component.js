import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MDSpinner from 'react-md-spinner'
// import Fade from 'react-reveal/Fade'
import { Container } from 'react-grid-system'
import { FORM_STATUS } from './'
import Paper from '../../../../components/commons/Paper'
import { SectionStyled, Content, SubmitBtn, SendingLoader, SentIcon } from './Contact.style'
import { SectionTitle } from '../../../../components/commons/Section'
import Background from '../../../../assets/images/home/bg_contact.png'
import Grid from '../../../../components/commons/Grid'
import {
  Form, Input, Textarea, Fieldset, Validator, Field,
} from '../../../../components/commons/Form'

const SendIcon = () => (
  <svg viewBox="0,0,20,20">
    <path d="M9,13 L20,0 L16,16 L9,13 Z M6,13 L0,10 L20,0 L6,13 Z M9,15 L13,16 L9,20 L9,15 Z" id="plane" fill="currentColor">
    </path>
  </svg>
);

export default class Contact extends Component {
  validator = new Validator()

  state = {
    form: {
      status: FORM_STATUS.DEFAULT,
      fields: {
        lastname: {
          name:'lastname',
          id:'contactLastname',
          type:'text',
          placeholder:'Wayne',
          value: '',
          isRequired: true,
          label: 'Nom',
          validation:null,
        },
        firstname: {
          name:'firstname',
          id:'contactFirstname',
          type:'text',
          placeholder:'Bruce',
          value: '',
          isRequired: true,
          label: 'Prénom',
          validation:null,
        },
        email: {
          name:'email',
          id:'contactEmail',
          type:'email',
          placeholder:'bruce.wayne@gotham-city.com',
          value: '',
          isRequired: true,
          label: 'Email',
          validation:null,
        },
        message: {
          name:'message',
          id:'contactMessage',
          type:'textarea',
          placeholder:'I\'m Batman!',
          value: '',
          isRequired: true,
          label: 'Message',
          validation:null,
        },
      }
    }
  }

  handleChange = (e) => {
    const validator = this.validator
    const fieldName = e.target.name
    const fieldValue = e.target.value
    let form = {...this.state.form}
    form.fields[fieldName].value = fieldValue
    this.setState({form}, () => {
      const validation = validator.validate(form.fields[fieldName])
      form.fields[fieldName].validation = validation
      this.setState({form})
      console.log(`Validation result => ${validation}`, validation)
    })
  }

  setFormStatusSending = () => {
    let form = {...this.state.form}
    form.status = FORM_STATUS.SENDING;
    this.setState({form})
  }

  setFormStatusSent = () => {
    let form = {...this.state.form}
    form.status = FORM_STATUS.SENT;
    this.setState({form})
  }

  handleSubmit = (e) => {
    const { fields } = this.state.form;
    e.preventDefault()
    window.location.href = `mailto:alexandre@le-dev.com?subject=Email portfolio le-dev.com&body=------------- Expediteur -------------%0AAdresse email : ${fields.email.value}%0ANom : ${encodeURIComponent(fields.lastname.value)}%0APrénom : ${encodeURIComponent(fields.firstname.value)}%0A%0A------------- Message -------------%0A${encodeURIComponent(fields.message.value)}`;
    this.setFormStatusSending()
    setTimeout(() => { this.setFormStatusSent() }, 3000);
  }

  render() {
    const { fields, status } = this.state.form

    let submitWording = (() => {
      switch (status) {
        case FORM_STATUS.DEFAULT:
          return `Envoyer`
        case FORM_STATUS.SENDING:
          return `Envoi en cours`
        case FORM_STATUS.SENT:
          return 'Envoyé'
      }
    })()

    return (
      <SectionStyled bgImage={Background}>
        <Container>
          <Paper>
            <SectionTitle>
              Contact
            </SectionTitle>
            <Content>
              <Form onSubmit={this.handleSubmit}>
                <Grid cols={{
                  xs: 1, sm: 1, md: 2, lg: 2,
                }}
                >
                  <Fieldset>
                    <Grid cols={{
                      xs: 1, sm: 1, md: 2, lg: 2,
                    }}
                    >
                      <div>
                        <Field
                          params={fields.lastname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <Field
                          params={fields.firstname}
                          value={fields.firstname.value}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Grid>
                    <Field
                      params={fields.email}
                      onChange={this.handleChange}
                    />
                    {/* TODO: FIX Button component by using props conditionnal styles instead of class */}
                    <SubmitBtn type="primary" className="primary" onClick={this.handleSubmit} formStatus={status}>
                      {submitWording}
                      <SendIcon/>
                      <SendingLoader active={status === FORM_STATUS.SENDING} singleColor="#fff" size={20} />
                      <SentIcon active={status === FORM_STATUS.SENT} />
                    </SubmitBtn>
                  </Fieldset>
                  <Fieldset>
                    <Field
                      cols="30"
                      rows="10"
                      params={fields.message}
                      onChange={this.handleChange}
                    />
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
