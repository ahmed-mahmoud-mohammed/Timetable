import { StyleSheet, Text, View, TextInput,TouchableOpacity ,Image} from 'react-native';
import React ,{ useState }from 'react';


const users = "https://delicate-resonance-6870.fly.dev/api/users"

const Login =({navigation,route}) =>{
  color = route.params.color
    buttontxt= route.params.buttontxt
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [data,setData] = useState([])
    fetch(users).then((response)=>response.json()).then((json)=>setData(json))
  return(

        <View  style={[styles.container,{backgroundColor:color}]}>
          <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Image style={styles.logo} source={require('../imgs/Picture1.png')}/>

            <Text style={[styles.sign,{color:buttontxt}]}>Login</Text>
           
            <TextInput style={[styles.input,{borderBottomColor:buttontxt,color:buttontxt}]} placeholder='E-Mail' placeholderTextColor={"#9C9FA6"}
             onChangeText={newText => setEmail(newText)} underlineColorAndroid={'transparent'}
           ></TextInput>
           
            <TextInput style={[styles.input,{borderBottomColor:buttontxt,color:buttontxt}]} placeholder='Password' placeholderTextColor={"#9C9FA6"}
            underlineColorAndroid={'transparent'} secureTextEntry={true} 
            onChangeText={newText => setPassword(newText)}></TextInput>

            <TouchableOpacity style={styles.button} onPress={()=>{
    if(email==="" || password===""){
      setErr("Enter E-mail/Password")
    }
    else{
      for(let i = 0; i < data.length; i++){
        if(data[i]["Email"]==email && data[i]["Password"]==password){
          setErr("")
          
          navigation.navigate("Options",{"rank":data[i]["Rank"],"color":color,"buttontxt":buttontxt})
          break
        }
        else{
          setErr("Email/Password Is Incorrect")
        }
      }
      
    }
    
    
  }}>
              <Text style={styles.buttontxt}>Login</Text>
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
      marginTop:-60
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

export default Login