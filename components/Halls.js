import { StyleSheet, Text,TouchableOpacity,ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';
import {React,useState} from 'react';

const halls = "https://delicate-resonance-6870.fly.dev/api/lecturehalls"

const Halls =({navigation,route})=>{
    const [data,setData] = useState([])
    fetch(halls).then((response)=>response.json()).then((json)=>setData(json))
  color = route.params.color
    buttontxt= route.params.buttontxt
  if(route.params.selectedoption==="1"){
    
    return(
        <ScrollView style={[styles.container,{backgroundColor:color}]}>
          <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Lecture Halls</Text>
        {data.map((data) => (
        <TouchableOpacity style={styles.button} key={data.HallID} onPress={()=>navigation.navigate("HallsTimetable",{"selectedhall":data["HallID"],"selectedhallname":data["HallName"],"color":color,"buttontxt":buttontxt})}
        >
          <Text style={styles.buttontxt}>
          <FontAwesomeIcon icon={faPersonChalkboard} style={{color: "#000080"}}  size={24}/>{data.HallName}</Text>
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
            <Text style={styles.title}>Lecture Halls</Text>
            {data.map((data) => (
            <TouchableOpacity style={styles.button} key={data.HallID} onPress={()=>navigation.navigate("EditHall",{"selectedhall":data,"selectedhallname":data["HallName"],"color":color,"buttontxt":buttontxt})}
            >
              <Text style={styles.buttontxt}>
              <FontAwesomeIcon icon={faPersonChalkboard} style={{color: "#000080"}}  size={24}/>{data.HallName}</Text>
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
        
        
    },title:{
      alignSelf:"center",
      color:"#ffffff",
      fontSize:30,
      fontWeight:'bold',
      marginTop:-20
    }
    ,
    buttontxt:{
        color:"#000080",
        fontSize:30,
        alignSelf:"center",
        fontWeight:'bold',
        
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
export default Halls
