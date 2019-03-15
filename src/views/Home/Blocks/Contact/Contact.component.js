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
  Form, Input, Textarea, Fieldset, Validator
} from '../../../../components/commons/Form'

export default class Contact extends Component {
  validator = new Validator()

  state = {
    form: {
      // Validator: new Validator(),
      fields: {
        lastname: {
          name:'lastname',
          type:'text',
          placeholder:'Wayne',
          value: '',
          isRequired: true,
          label: 'Nom',
          validation:null,
        },
        firstname: {
          name:'firstname',
          type:'text',
          placeholder:'John',
          value: '',
          isRequired: true,
          label: 'Prénom',
          validation:null,
        },
        email: {
          name:'email',
          type:'email',
          placeholder:'john.wayne@gotham-city.com',
          value: '',
          isRequired: true,
          label: 'Email',
          validation:null,
        },
        message: {
          name:'message',
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

  componentDidMount() {

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

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  validateForm = () => {
    // const {form, Validator} = this.state.form



    // for(let i in errors) {
    //   const input = i;
    //   const hasError = errors[i];
    //
    //
    // }
  }

  render() {
    const { fields } = this.state.form
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
                        <Input
                          field={fields.lastname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <Input
                          field={fields.firstname}
                          value={fields.firstname.value}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Grid>
                    <Input
                      field={fields.email}
                      onChange={this.handleChange}
                    />
                    {/* TODO: FIX Button component by using props conditionnal styles instead of class */}
                    <SubmitBtn type="primary" className="primary" onClick={this.handleSubmit}>Envoyer</SubmitBtn>
                  </Fieldset>
                  <Fieldset>
                    <label htmlFor="message">Message</label>
                    <Textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="I'm Batman!"
                      required
                      field={fields.message}
                      value={fields.message.value}
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
