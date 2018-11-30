import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Select extends React.Component {
   state = {
      value: '',
      allCities: []
   }

   selectionHandler = (e) => {
      this.setState({ value: e.target.value })
   }

   clickHandler = (e) => {
      e.preventDefault();
      let newStr = this.state.value.replace(/\s/g, '%20');
      axios.get(`http://api.airvisual.com/v2/city?city=${newStr}&state=California&country=USA&key=ggeahjwHQzyZkBgnZ`)
         .then((data) => {
            console.log(data.data.data.current)
         })
   }

   componentDidMount(){
      axios.get('http://api.airvisual.com/v2/cities?state=California&country=USA&key=ggeahjwHQzyZkBgnZ')
         .then((data) => {
            this.setState({ allCities: data.data.data })
         })  
   }

   render() {
      return (
         <div>
            <Form>
               <FormGroup>
                  <Label for="exampleSelect">Select a City</Label>

                  <Input type="select" name="select" id="exampleSelect" onChange={this.selectionHandler} >
                     <option>City...</option>
                     {this.state.allCities.map((city, i) => <option key={i}> {city.city} </option> )} 
                  </Input>
                  <button onClick={this.clickHandler} > Go! </button>
               </FormGroup>
            </Form>
         </div>
      )
   }
}

export default Select;