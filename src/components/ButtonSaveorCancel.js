import React from 'react'
import { Button } from 'semantic-ui-react';

function ButtonSaveorCancel() {
  return (
    <div>   
        <Button.Group style={{ marginTop: '20px' }}>
          <Button type='submit' primary>ok</Button>
           <Button.Or />
          <Button type='button' color='red'>Cancel</Button>
       </Button.Group>
    </div>
  )
}

export default ButtonSaveorCancel