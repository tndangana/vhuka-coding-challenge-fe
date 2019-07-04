import React, { Component } from 'react';
import axios from 'axios';
import { URL } from './BasicUrl';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';



export default class DisplayPage extends Component {


    constructor() {
        super();
        this.state = {
            data: {
                thumbnailUrl: "",
                title: "",
                url: ""
            }
        }
    }

    componentDidMount() {
        axios.get(URL+`${this.props.match.params.age}`).then(resutlt => {
            this.setState({ data: resutlt.data });
        });
    }


    render(){
         return(
             <div>
                 <br/>  <br/>  <br/>
            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage className="img-fluid" src={this.state.data.url} />
              <MDBCardBody>
                <MDBCardTitle>{this.state.data.title}</MDBCardTitle>
                <MDBCardText>
               
                </MDBCardText>
               
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </div>);
    }
}