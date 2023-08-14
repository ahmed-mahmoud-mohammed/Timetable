import { StyleSheet, Text, View, TextInput,TouchableOpacity ,Image} from 'react-native';
import React ,{ useState }from 'react';
const DeleteLab=({navigation,route})=>{
  color = route.params.color
    buttontxt= route.params.buttontxt
    rank = route.params.rank
    const [id, setID] = useState("");
    const [err,setErr] = useState("")
    return(

        

        <View  style={[styles.container,{backgroundColor:color}]}>
          <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Image style={styles.logo} source={require('../../imgs/Picture1.png')}/>

            <Text style={[styles.sign,{color:buttontxt}]}>Delete Lab</Text>
           
            <TextInput style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]} placeholder='Lab ID' placeholderTextColor={"#9C9FA6"}
             onChangeText={newText => setID(newText)} underlineColorAndroid={'transparent'}
           ></TextInput>
           
           

            <TouchableOpacity style={styles.button} onPress={()=>{
    if(id===""){
      setErr("Enter Lab ID")
    }
    else{
      const response = fetch(`https://delicate-resonance-6870.fly.dev/api/labs/${id}`, {
            method: 'Delete',
            headers: {
              'Content-Type': 'application/json',
            },
           });
           navigation.navigate("Options",{"color":color,"buttontxt":buttontxt,"rank":rank})
      
    }
    
    
  }}>
              <Text style={styles.buttontxt}>Delete</Text>
            </TouchableOpacity>
            <Text style={styles.err} >{err}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:"#010328"
      
    },
    logo:{
        width: 150,
    height: 150,
    alignSelf:"center",
    marginBottom:20,
    marginVertical:-60
    },
    sign:{
        fontSize:24,
        fontWeight:"bold",
        borderBottomColor:"#000000",
        borderBottomWidth:3,
        color:"#ffffff",
        marginBottom:40
        
    },
    input:{
       color:"#ffffff",
        width:300,
        alignContent:"center",
        borderBottomWidth:3,
        borderBottomColor:"#ffffff",
        marginBottom:40
        
    },button:{
      backgroundColor:"#D1E0F1",
      borderRadius:100,
      borderWidth:1,
      height:40,
      marginTop:20
    }
    ,buttontxt:{
      color:"#000080",
      fontSize:20,
      alignSelf:"center",
      fontWeight:'bold'
    },
    err:{
      textAlign:"center",
      color:"#Ff0000",
      marginVertical:15
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
export default DeleteLab