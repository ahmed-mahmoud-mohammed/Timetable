import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComputer,faPersonChalkboard ,faCalendarDay,faUser} from '@fortawesome/free-solid-svg-icons';
const Options = ({navigation,route})=>{
    color = route.params.color
    buttontxt = route.params.buttontxt
    rank = route.params.rank
    if(route.params.rank==="1"){
    return(
    <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Services</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("LabOptions",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            <FontAwesomeIcon icon={faComputer} style={{color: "#000080"}} size={23}/> Labs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("HallOptions",{"color":color,"buttontxt":buttontxt,"rank":rank})}>

        <Text style={styles.buttontxt}>
            <FontAwesomeIcon icon={faPersonChalkboard} style={{color: "#000080"}}  size={24}/> Lecture Halls</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ScheduleOptions",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
        <Text style={styles.buttontxt}>
        <FontAwesomeIcon icon={faCalendarDay} style={{color: "#000080"}} size={23} /> Study Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("UserOptions",{"rank":rank,"color":color,"buttontxt":buttontxt})
        }}
        >
        <Text style={styles.buttontxt}>
        <FontAwesomeIcon icon={faUser} style={{color: "#000080"}} size={23}/> Users</Text>
        </TouchableOpacity>

    </View>
    )
    }
    else if(route.params.rank==="4"){
        return(
            <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Labs",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            <FontAwesomeIcon icon={faComputer} style={{color: "#000080"}} size={23}/> View Labs</Text>
        </TouchableOpacity>
        </View>
        )
    }
    else if(route.params.rank==="5"){
        return(
            <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Halls",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            <FontAwesomeIcon icon={faPersonChalkboard} style={{color: "#000080"}} size={23}/> View Halls</Text>
        </TouchableOpacity>
        </View>
        )
    }
    else if(route.params.rank==="6"){
        return(
            <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Schedule",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            <FontAwesomeIcon icon={faCalendarDay} style={{color: "#000080"}} size={23}/> View Schedules</Text>
        </TouchableOpacity>
        </View>
        )
    }
    else if(route.params.rank==="2"){
        return(
            <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Services</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("AddHall",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            Add Hall</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("Halls",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         View Hall</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("EditHall",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         Edit Hall</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("DeleteHall",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         Delete Hall</Text>
        </TouchableOpacity>
    </View>
        )
    }
    else if(route.params.rank==="3"){
        return(
        <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Services</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("AddSchedule",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            Add Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("Schedule",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         View Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("EditSchedule",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         Edit Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("DeleteSchedule",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         Delete Schedule</Text>
        </TouchableOpacity>
    </View>
    )
    }
    else if(route.params.rank==="0"){
        return(
            <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Services</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("AddLab",{"color":color,"buttontxt":buttontxt,"rank":rank})}>
       
        <Text style={styles.buttontxt}>
            Add Lab</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("Labs",{"selectedoption":"1","color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         View Lab</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("Labs",{"selectedoption":"2","color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         Edit Lab</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("DeleteLab",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
         Delete Lab</Text>
        </TouchableOpacity>
    </View>
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
        marginTop:50,
        marginBottom:46,
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
      }
})
export default Options