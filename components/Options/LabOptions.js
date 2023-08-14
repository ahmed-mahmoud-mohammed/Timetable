import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
const LabOptions = ({navigation,route})=>{
    color = route.params.color
    buttontxt= route.params.buttontxt
    return(
    <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>Lab Services</Text>
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
export default LabOptions