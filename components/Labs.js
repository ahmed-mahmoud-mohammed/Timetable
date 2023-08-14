import { StyleSheet, Text,TouchableOpacity,ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComputer} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const labs = "https://delicate-resonance-6870.fly.dev/api/labs"
const Labs =({navigation,route})=>{
  const [data,setData]=useState([])
  color = route.params.color
    buttontxt= route.params.buttontxt
    fetch(labs).then((response)=>response.json()).then((json)=>setData(json))
  if(route.params.selectedoption==="1"){
    return(
        <ScrollView style={[styles.container,{backgroundColor:color}]}>
          <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Labs</Text>
        {data.map((data) => (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Timetable",{"selectedlab":data["LabID"],"color":color,"buttontxt":buttontxt})} key={data}>
          <Text style={styles.buttontxt}>
          <FontAwesomeIcon icon={faComputer} style={{color: "#000080"}} size={23}/>{data["LabName"]}</Text>
        </TouchableOpacity>
      ))}
        </ScrollView>
    )
        }
    else{
      return(
        <ScrollView style={[styles.container,{backgroundColor:color}]}>
          <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={styles.title}>Labs</Text>
        {data.map((data) => (
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("EditLab",{"selectedlab":data,"color":color,"buttontxt":buttontxt})} key={data}>
          <Text style={styles.buttontxt}>
          <FontAwesomeIcon icon={faComputer} style={{color: "#000080"}} size={23}/>{data["LabName"]}</Text>
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
export default Labs
