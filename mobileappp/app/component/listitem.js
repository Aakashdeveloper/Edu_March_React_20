import React, {Component} from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';
import DisplayComponent from './displayComponent';

const url="http://localhost:8900/shopping";

export default class ListItem extends Component {
    constructor(props){
        super(props)

        this.state={
            shopping:''
        }
    }

    componentDidMount(){
        fetch(url, {
            method:'GET'
        })
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({shopping:data})
        })
    }
    render(){
        return(
            <View>
                <DisplayComponent datalist={this.state.shopping}></DisplayComponent>
            </View>
        )
    }
}
