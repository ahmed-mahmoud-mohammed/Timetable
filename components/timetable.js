import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView ,TouchableOpacity} from 'react-native';

devices = "https://delicate-resonance-6870.fly.dev/api/devices"

const Timetable = ({ route,navigation }) => {
  const LabID = route.params.selectedlab;
  const [data,setData] = useState([])
  const response = fetch(devices, {
            method: 'get',
            });

    setData(response.json())
  return (
    <ScrollView style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>DEVICES</Text>
          {data.map((data)=>{
            if(data["LabID"]==LabID){
              <Text style={[styles.buttontxt,{color:buttontxt}]}>{data["DeviceName"]} {data["DeviceType"]} {data["SerialNumber"]} {data["Condition"]}</Text>
            }
            else{
              <Text style={[styles.buttontxt,{color:buttontxt}]}>No Devices Found</Text>
            }
          })}
      <Text style={[styles.buttontxt,{color:buttontxt}]} ></Text>
      
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

export default Timetable;