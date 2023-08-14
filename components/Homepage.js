import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native';
import { Switch } from 'react-native-paper';
import React from 'react';

var color="#010328"
var buttontxt="#D1E0F1"
const Homepage=({navigation})=>{
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  
  const onToggleSwitch = () => {setIsSwitchOn(!isSwitchOn)
  if(isSwitchOn){
    color="#010328"
    buttontxt="#D1E0F1"
  }
  else{
    color="#ffffff"
    buttontxt="#000080"
  }
  };
    return(
    <View  style={[styles.container,{backgroundColor:color}]}>
      <View style={{flexDirection: "row",
        justifyContent:"flex-end",alignItems:"center"}}>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#008000'/>
      <Text style={{color:buttontxt,fontWeight:"bold"}}>White Theme</Text>
      </View>
        <Image style={styles.logo} source={require('../imgs/Picture1.png')}/>
        <Image style={styles.welcome} source={require('../imgs/welcome2.png')}/>
        
        <TouchableOpacity style={styles.button} onPress={()=> navigation.push('Login',{"color":color,"buttontxt":buttontxt})}>

        <Text style={styles.buttontxt}>Login</Text>
        
        </TouchableOpacity>
       <View style={styles.container2}>
        <TouchableOpacity style={[styles.about,{backgroundColor:color}]} onPress={()=>navigation.navigate("About",{"color":color,"buttontxt":buttontxt})}>
          <Text style={[styles.abouttxt,{color:buttontxt,borderBottomColor:buttontxt}]}>About Us</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.contact,{backgroundColor:color}]} onPress={()=>navigation.navigate("Contact",{"color":color,"buttontxt":buttontxt})}>
        <Text style={[styles.abouttxt,{color:buttontxt,borderBottomColor:buttontxt}]}>Contact Us</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:color,
    },
    container2:{
      flexDirection: "row",
     justifyContent: "space-between",
    },
    logo:{
        width: 150,
    height: 150,
    alignSelf:"center",
    marginBottom:20,
    marginVertical:20
    },
    welcome:{
        width:200,
        alignSelf:"center",
        marginTop:30,
        
    },
    
    button:{
        width:300,
        backgroundColor:"#D1E0F1",
        borderRadius:100,
        borderWidth:1,
        height:40,
        marginTop:70
        
      }
      ,buttontxt:{
        color:"#000080",
        fontSize:20,
        alignSelf:"center",
        fontWeight:'bold'
      },
      about:{
        fontWeight:"bold",
        backgroundColor:"#010328",
        width:63,
        alignSelf:"center",
        marginTop:30,
        marginLeft:60
      },
      abouttxt:{
        color:"#D1E0F1",
        borderBottomColor:"#D1E0F1",
        borderBottomWidth:1,
        fontSize:15
        
      },contact:{
        fontWeight:"bold",
        backgroundColor:"#010328",
        width:74,
        alignSelf:"center",
        marginTop:30,
        marginRight:60
      },
      
    
})

export default Homepage