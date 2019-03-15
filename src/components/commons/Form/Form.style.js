import styled from 'styled-components'

export const FormStyled = styled.form`
`

export const FieldsetStyled = styled.fieldset`
  border: none;
  padding: 0;
  position: relative;
`

export const InputStyled = styled.input`
  background-color: #111111;
  border: 1px solid #0c0c0c;
  border-radius: 2px;
  padding: 6px 12px;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 15px;
  border-color: ${({ validation }) => {
    let borderColor = '#0c0c0c'
    if (validation && validation.isValid) {
      borderColor = 'green'
    } if (validation && !validation.isValid) {
      borderColor = 'red'
    }
    console.log('style Validation ======>')
    console.log(validation)
    console.log(borderColor)
    return borderColor
  }};
`

export const TextareaStyled = styled.textarea`
  background-color: #111111;
  border: 1px solid #0c0c0c;
  border-radius: 2px;
  padding: 6px 12px;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 5px;
`
