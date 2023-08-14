import { Text,View,ScrollView,TextInput,TouchableOpacity,StyleSheet,Modal,Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {React,useState} from "react";

const EditHall=({route,navigation})=>{
  color = route.params.color
  buttontxt= route.params.buttontxt
  hallid = route.params.selectedhall
    const [modalVisible, setModalVisible] = useState(false);
    const [day, setDay] = useState('');
    const [name,setName] = useState('')
    const [from,setFrom] = useState("")
    const [to,setTo] = useState("")
    const [subject,setSubject]= useState("")
    const hallname = route.params.selectedhallname;

    return(
        
    <View style={[styles.container,{backgroundColor:color}]}>
        <Modal
      animationType="slide"
      transparent={true} visible={modalVisible}
      onDismiss={() => {
        setName('');
        setFrom('');
        setTo('');
        setSubject('');
      }}
    >
      <View style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>setModalVisible(false)}>←</Text></TouchableOpacity>
        <Text style={{color:buttontxt,fontWeight:"bold",fontSize:20,alignSelf:"center"}}>Name</Text>
        <TextInput
          style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
          onChangeText={setName}
          value={name}
          placeholder="Enter Doctor Name" placeholderTextColor={"#9C9FA6"}
        />
        <Text style={{color:buttontxt,fontWeight:"bold",fontSize:20,alignSelf:"center"}}>From</Text>
        <TextInput
          style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
          onChangeText={setFrom}
          value={from}
          placeholder="Enter Start Time" placeholderTextColor={"#9C9FA6"}
        />
        <Text style={{color:buttontxt,fontWeight:"bold",fontSize:20,alignSelf:"center"}}>To</Text>
        <TextInput
          style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
          onChangeText={setTo}
          value={to}
          placeholder="Enter End Time" placeholderTextColor={"#9C9FA6"}
        />
        <Text style={{color:buttontxt,fontWeight:"bold",fontSize:20,alignSelf:"center"}}>Subject</Text>
        <TextInput
          style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]}
          onChangeText={setSubject}
          value={subject}
          placeholder="Enter Subject" placeholderTextColor={"#9C9FA6"}
        />
        <Button title="Submit" onPress={()=>{
            halls[hallname][day].push({"name":name,"start":from,"end":to,"subject":subject})
            
            setModalVisible(false);

        }}/>
      </View>
    </Modal>
        <TouchableOpacity style={styles.back}><Text style={styles.backtxt}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>


            <Text style={[styles.sign,{color:buttontxt}]}>Edit Hall {hallname}</Text>

            <TextInput style={[styles.input,{color:buttontxt,borderBottomColor:buttontxt}]} defaultValue={hallname} placeholder='Enter Hall Name' placeholderTextColor={"#9C9FA6"}
             onChangeText={newText => setName(newText)} underlineColorAndroid={'transparent'}
           ></TextInput>
      <Picker
        selectedValue={day}
        onValueChange={newText => setDay(newText)}
        style={styles.button}
      >
        <Picker.Item label='Please Select a Day' value="" color='#aaa' />
        <Picker.Item label='Saturday' value="Saturday" style={styles.options} />
        <Picker.Item label='Sunday' value="Sunday" style={styles.options} />
        <Picker.Item label='Monday' value="Monday" style={styles.options} />
        <Picker.Item label='Tuesday' value="Tuesday" style={styles.options} />
        <Picker.Item label='Wednesday' value="Wednesday" style={styles.options} />
        <Picker.Item label='Thursday' value="Thursday" style={styles.options} />
      </Picker>
      <ScrollView style={styles.container2}>
      <Text style={[styles.buttontxt,{color:buttontxt}]} >
              Name          Start        End              Subject
            </Text>
      {day !== '' &&
        (halls[hallname][day].length==0 ? (
            
          <Text style={[styles.buttontxt,{color:buttontxt}]}>No Halls today</Text>
          
        ) : (
          halls[hallname][day].map((data) => (
            <View style={styles.container4}>
            <Text style={[styles.buttontxt,{color:buttontxt}]} key={data.name}>{data.name}</Text>    
            <Text style={[styles.buttontxt,{color:buttontxt}]} key={data.start}>{data.start}</Text>
            <Text style={[styles.buttontxt,{color:buttontxt}]} key={data.end}>{data.end}</Text>        
            <Text style={[styles.buttontxt,{color:buttontxt}]} key={data.subject}>{data.subject}</Text>       
            </View>
          ))
        ))
        }
      </ScrollView>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.optionbuttons} onPress={()=>Halls[hallname][day].pop()}><Text style={styles.optionstxt}>Remove</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionbuttons} onPress={()=>setModalVisible(true)}><Text style={styles.optionstxt}>Add</Text></TouchableOpacity>
      </View>
      <TouchableOpacity  style={styles.submit} onPress={()=>{
        const response = fetch(`https://delicate-resonance-6870.fly.dev/api/lecturehalls/${hallid}`, {
          method: 'Put',
          headers: {
            'Content-Type': 'application/json',
          },body: JSON.stringify({"HallName":hallname})
         });
      }}><Text style={styles.optionstxt}>Submit</Text></TouchableOpacity>
      </View>
      )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:"#010328"
      
    },container2:{
        height:20
    },container3:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:10,
    },container4:{
        borderBottomColor:"#ffffff",
        borderBottomWidth:1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:10,
    },
    back:{
        width:30,
        marginTop:10
    },
    backtxt:{
        color:"#D1E0F1",
        alignSelf:"center",
        fontSize:50
    },
    input:{
       color:"#ffffff",
        width:300,
        alignContent:"center",
        borderBottomWidth:3,
        borderBottomColor:"#ffffff",
        marginBottom:40
        
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
    button: {
      backgroundColor: '#D1E0F1',
      height: 60,
      borderRadius: 100,
      borderWidth: 1,
      color: '#000080',
    },
    buttontxt: {
      color: '#ffffff',
      marginVertical:15,
      fontSize: 15,
      alignSelf: 'center',
      fontWeight: 'bold',
      
      justifyContent:"space-around"
        
    },
    optionbuttons:{
        width:100,
        height:40,
        backgroundColor:"#D1E0F1",
        alignItems:"center",
        borderRadius:100,
      borderWidth:1,
    },
    optionstxt:{
        fontWeight:"bold",
        color:"#000080",
        fontSize:20,
        
    },submit:{
        width:310,
        height:40,
        backgroundColor:"#D1E0F1",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:100,
      borderWidth:1,
      marginBottom:10,
      marginTop:20
    }
})

export default EditHall