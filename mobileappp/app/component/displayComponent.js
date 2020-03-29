import React from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';


export default function DisplayComponent(props){

    const renderList = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <ScrollView style={styles.listContainer}>
                            <View key={key}>
                                <Text>{item.name}</Text>
                                <Text>hii</Text>
                            </View>
                    </ScrollView>
                )
            })
        }
    }

    return(
        <View>
            {renderList(props)}
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        width:"80%"
    },
    placeImage:{
        height:200
    },
    textval:{
        fontSize:30
    }
  });


