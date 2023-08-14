import { StyleSheet, Text,TouchableOpacity,ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import schedule from "../json/schedule.json"
import React from 'react';
const data = Object.keys(schedule);
const Schedule =({navigation,route})=>{
  color = route.params.color
    buttontxt= route.params.buttontxt
  if(route.params.selectedoption==="1"){
    return(
        <ScrollView style={[styles.container,{backgroundColor:color}]}>
          <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Study Schedule</Text>
        {data.map((data) => (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ScheduleTimetable",{"selectedyear":data,"color":color,"buttontxt":buttontxt})} key={data}>
          <Text style={styles.buttontxt}>
          <FontAwesomeIcon icon={faCalendarDay} style={{color: "#000080"}} size={23}/>{data}</Text>
        </TouchableOpacity>
      ))}
        </ScrollView>
    )}
    else{
      return(
      <ScrollView style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={styles.title}>Study Schedule</Text>
        {data.map((data) => (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("EditSchedule",{"selectedSchedule":data,"color":color,"buttontxt":buttontxt})} key={data}>
          <Text style={styles.buttontxt}>
          <FontAwesomeIcon icon={faCalendarDay} style={{color: "#000080"}} size={23}/>{data}</Text>
        </TouchableOpacity>
      ))}
        </ScrollView>
      )
    }
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:"#010328"
    },
    button:{
        backgroundColor:"#D1E0F1",
        marginVertical:40,
        height:60,
        borderRadius:100,
      borderWidth:1,
        
        
    }
    ,
    buttontxt:{
        color:"#000080",
        fontSize:30,
        alignSelf:"center",
        fontWeight:'bold',
        
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
})
export default Schedule
