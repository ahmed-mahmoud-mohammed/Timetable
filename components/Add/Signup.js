import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Signup = ({ navigation ,route}) => {

  color = route.params.color
    buttontxt= route.params.buttontxt
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname,setFname]=useState("");
  const [lastname,setLname]=useState("")
  const [username,setUsername] = useState("");
  const [rank,setRank] = useState("")
  const [password2, setPassword2] = useState('');
  const [err, setErr] = useState('');

  return (
    <ScrollView style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
      <Image style={styles.logo} source={require('../../imgs/Picture1.png')} />
      <Text style={[styles.sign,{color:buttontxt}]}>Add User</Text>
      <TextInput
        style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
        placeholder='First Name'
        placeholderTextColor='#9C9FA6'
        onChangeText={newText => setFname(newText)}
        underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
        placeholder='Last Name'
        placeholderTextColor='#9C9FA6'
        onChangeText={newText => setLname(newText)}
        underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
        placeholder='Username'
        placeholderTextColor='#9C9FA6'
        onChangeText={newText => setUsername(newText)}
        underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
        placeholder='E-Mail'
        placeholderTextColor='#9C9FA6'
        onChangeText={newText => setEmail(newText)}
        underlineColorAndroid={'transparent'}
      />
      <TextInput
        style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
        placeholder='Password'
        placeholderTextColor='#9C9FA6'
        secureTextEntry={true}
        onChangeText={newText => setPassword(newText)}
      />
      <TextInput
        style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
        placeholder='Confirm Password'
        placeholderTextColor='#9C9FA6'
        secureTextEntry={true}
        onChangeText={newText => setPassword2(newText)}
      />
     <Picker
        selectedValue={rank}
        onValueChange={newText => setRank(newText)}
        style={styles.button}
      >
        <Picker.Item label='Please Select a Rank' value="" color='#aaa' />
        <Picker.Item label='Admin' value="0" style={styles.options} />
        <Picker.Item label='Lab Admin' value="1" style={styles.options} />
        <Picker.Item label='Hall Admin' value="2" style={styles.options} />
        <Picker.Item label='Schedule Admin' value="3" style={styles.options} />
        <Picker.Item label='Lab User' value="4" style={styles.options} />
        <Picker.Item label='Hall User' value="5" style={styles.options} />
        <Picker.Item label='Schedule User' value="6" style={styles.options} />
      </Picker>
      
      <TouchableOpacity style={styles.button} onPress={()=>{
        if (email==="" ||password===""||firstname===""||lastname===""||username===""||rank===""){
          setErr("Please Enter All Data")
        }
        else if(password!==password2){
          setErr("Password/Confirm Password are different")
        }
        
        else{
          setErr("")
          const response = fetch('https://delicate-resonance-6870.fly.dev/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "FirstName":firstname,
            "SecondName":lastname,
            "Email":email,
            "UserName":username,
            "Rank":rank,
            "Password":password}),});
          
          navigation.navigate("Options",{"rank":route.params.rank,"color":color,"buttontxt":buttontxt})
        }
      }}>
        <Text style={styles.buttontxt}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.err}>{err}</Text>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:"#010328"
      
    },container2:{
      flexDirection: "row",
        justifyContent:"space-around",
        marginBottom:10,
    },
    logo:{
        width: 150,
    height: 150,
    alignSelf:"center",
    
    marginTop:-60
    },
    txt:{
      color:"#ffffff",
      fontSize:20,
      fontWeight:"bold",
    },
    sign:{
        fontSize:24,
        fontWeight:"bold",
        borderBottomColor:"#000000",
        borderBottomWidth:3,
        color:"#ffffff",
        marginBottom:20
        
    },
    input:{
       color:"#ffffff",
        width:300,
        alignContent:"center",
        borderBottomWidth:3,
        borderBottomColor:"#ffffff",
        marginBottom:30
        
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
      marginVertical:15,
      marginBottom:80
    },options: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000080',
    },back:{
      width:30,
      marginTop:10
  },
  backtxt:{
      color:"#D1E0F1",
      alignSelf:"center",
      fontSize:50
  },radiotxt:{
    color:"#ffffff",
    fontWeight:"bold",
    fontSize:25
  }
    
  });

export default Signup