import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import Button from '../components/commons/Button'
import Divider from '../components/commons/Divider/Divider.component'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('With default props', () => <Button>Le default button</Button>)
  .add('With primary style', () => <Button types={['primary', 'shadow']}>Le primary button</Button>)

storiesOf('Divider', module)
  .add('Default', () => <Divider />)
