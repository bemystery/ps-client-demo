import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { RoundedButton } from './RoundedButton'

storiesOf('RoundedButton', module)
  .add(
    'with text',
    () => (
      <RoundedButton color="hotpink" onClick={action('clicked')}>
        Hello Button
      </RoundedButton>
    ),
    { info: { inline: true } }
  )
  .add(
    'with some emoji',
    () => (
      <RoundedButton color="papayawhip" onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </RoundedButton>
    ),
    { info: { inline: true } }
  )
