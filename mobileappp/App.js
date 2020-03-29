import React,{useState} from 'react';
import { StyleSheet, Text, View , Button, DatePickerIOS} from 'react-native';
import ListItem from './app/component/listitem';

export default function App() {
  const[counter,setCounter] = useState(0);
  const [chosenDate, setChosenDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <Text>Edureka Mobile app</Text>
      <ListItem/>
      <Text>{counter}</Text>
      <Button title="Counter State" onPress={() => setCounter(counter+1)}/>
      <DatePickerIOS
        date={chosenDate}
        onDateChange={setChosenDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
