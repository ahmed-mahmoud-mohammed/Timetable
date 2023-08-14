import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView,TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Schedule from '../json/schedule.json';

const ScheduleTimetable = ({ route,navigation }) => {
  const year = route.params.selectedyear;
  const [day, setDay] = useState('');

  return (
    <ScrollView style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>{year}</Text>
      <Picker
        selectedValue={day}
        onValueChange={newText => setDay(newText)}
        style={styles.button}
      >
        <Picker.Item label='Please Select a Day' value="" color='#aaa' />
        <Picker.Item label='Saturday' value="Saturday" style={styles.options} />
        <Picker.Item label='Sunday' value="Sunday" style={styles.options} />
        <Picker.Item label='Monday' value="Monday" style={styles.options} />
        <Picker.Item label='Tuesday' value="Tuesday" style={styles.options} />
        <Picker.Item label='Wednesday' value="Wednesday" style={styles.options} />
        <Picker.Item label='Thursday' value="Thursday" style={styles.options} />
      </Picker>
      <Text style={[styles.buttontxt,{color:buttontxt}]} >
              Name          Start        End            Subject
            </Text>
      {day !== '' &&
        (Schedule[year][day] === 'No Lectures today for them' ? (
          <Text style={[styles.buttontxt,{color:buttontxt}]}>No Lectures today</Text>
        ) : (
          Schedule[year][day].map((data) => (
            <Text style={[styles.buttontxt,{color:buttontxt}]} key={data.subject}>
              {data.name}       {data.start}        {data.end}       {data.subject}
            </Text>
          ))
        ))
        }
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#010328',
  },
  button: {
    backgroundColor: '#D1E0F1',
    marginVertical: 40,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    color: '#000080',
  },
  buttontxt: {
    color: '#ffffff',
    marginVertical:30,
    width:310,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
    borderBottomColor:"#ffffff",
    borderBottomWidth:1
  },
  options: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000080',
  },title:{
    alignSelf:"center",
    color:"#ffffff",
    fontSize:30,
    fontWeight:'bold',
    marginTop:-20
  },back:{
    width:30,
    marginTop:10
},
backtxt:{
    color:"#D1E0F1",
    alignSelf:"center",
    fontSize:50
}
});

export default ScheduleTimetable;