import React from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveorCancel from './ButtonSaveorCancel';
function NewEntryForm() {
  return (
    <div>
         <Form unstackable>
        <Form.Group>
          <Form.Input
          icon='tags'
          width={12}
          placeholder='New Jeans Pant'
          label="Description"/>
          <Form.Input width={4} label='Value' placeholder='0' icon='dollar sign' iconPosition='left' />
        </Form.Group>

     <ButtonSaveorCancel />
      </Form>
    </div>
  )
}

export default NewEntryForm