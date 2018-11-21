import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Select extends React.Component {
   render() {
      return (
         <div>
            <Form>
               <FormGroup>
                  <Label for="exampleSelect">Select a City</Label>

                  <Input type="select" name="select" id="exampleSelect">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                  </Input>
               </FormGroup>
            </Form>
         </div>
      )
   }
}

export default Select;