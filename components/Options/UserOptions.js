import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus,faUserMinus} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
const UserOptions = ({navigation,route})=>{
    color = route.params.color
    buttontxt= route.params.buttontxt
    rank = route.params.rank
    return(
    <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Text style={[styles.title,{color:buttontxt}]}>User Services</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Signup",{"rank":rank,"color":color,"buttontxt":buttontxt})}>
       
        <Text style={styles.buttontxt}>
            <FontAwesomeIcon icon={faUserPlus} style={{color: "#000080"}} size={23}/> Add Users</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("DeleteUser",{"color":color,"buttontxt":buttontxt,"rank":rank})
        }}
        >
        <Text style={styles.buttontxt}>
        <FontAwesomeIcon icon={faUserMinus} style={{color: "#000080"}} size={23}/> Delete Users</Text>
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
export default UserOptions