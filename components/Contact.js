import { View, TouchableOpacity,Text, StyleSheet ,TextInput,Image, ScrollView,Linking} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot,faEnvelope,faMobile} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faYoutube,faInstagram } from "@fortawesome/free-brands-svg-icons";
const Contact=({navigation,route})=>{
    color = route.params.color
    buttontxt= route.params.buttontxt
    return(
        <ScrollView style={[styles.container,{backgroundColor:color}]}>
            <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Image style={styles.logo} source={require('../imgs/Picture1.png')}/>
            <View style={styles.container2}>

                <TextInput placeholder="Your Name" style={styles.txtinput} placeholderTextColor={"#9C9FA6"}></TextInput>
                <TextInput placeholder="Your Email" style={styles.txtinput} placeholderTextColor={"#9C9FA6"}></TextInput>
            </View>
            <TextInput placeholder="Subject" style={styles.txtinput2} placeholderTextColor={"#9C9FA6"}></TextInput>
            <TextInput placeholder="Message" style={styles.txtinput3} placeholderTextColor={"#9C9FA6"}></TextInput>
            <TouchableOpacity style={styles.button}>

        <Text style={styles.buttontxt}>Send</Text>
        
        </TouchableOpacity>
        <View style={[styles.brder,{borderBottomColor:buttontxt,borderTopColor:buttontxt}]}>
            <View style={styles.info}>
            <FontAwesomeIcon icon={faLocationDot} style={{color: buttontxt}} size={23}/>
            <Text style={[styles.txt,{color:buttontxt}]}>Location: العنوان : كلية الهندسة بشبرا 108 ش شبرا - القاهرة</Text>
            </View>
            <View style={styles.info}>
            <FontAwesomeIcon icon={faEnvelope} style={{color: buttontxt}} size={23}/>
                <Text style={[styles.txt,{color:buttontxt}]}>Email: info@feng.bu.edu.eg</Text>
            </View>
            <View style={styles.info}>
            <FontAwesomeIcon icon={faMobile} style={{color: buttontxt}} size={23}/>
                <Text style={[styles.txt,{color:buttontxt}]}>Call: 022022310</Text>
            </View>
        </View>
        <View style={styles.container3}>
            <TouchableOpacity style={styles.social} onPress={()=>{
                Linking.openURL("https://twitter.com/sfe_itunit")
            }}>
            <FontAwesomeIcon icon={faTwitter} style={{color: "#26a7de"}} size={30}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.social}onPress={()=>{
                Linking.openURL("https://www.facebook.com/feng.bu.eg/")
            }}>
            <FontAwesomeIcon icon={faFacebook} style={{color: "#3b5998"}} size={30}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.social} onPress={()=>{
                Linking.openURL("https://www.instagram.com/feng.official/")
            }}>
            <FontAwesomeIcon icon={faInstagram} style={{color: "#962fbf"}} size={30}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.social} onPress={()=>{
                Linking.openURL("https://www.youtube.com/channel/UCV0Kz9SJ3G4k4p0or_N_j-g")
            }}>
            <FontAwesomeIcon icon={faYoutube} style={{color: "#c4302b"}} size={30}/>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:"#010328",
      paddingBottom:40
      
    },
    container2:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:30,
    },container3:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:40,
    },
    
    button:{
        width:100,
        backgroundColor:"#D1E0F1",
        borderRadius:100,
        borderWidth:1,
        height:40,
        marginTop:30,
        marginBottom:30,
        alignSelf:"center"
        
      }
      ,buttontxt:{
        color:"#000080",
        fontSize:20,
        alignSelf:"center",
        fontWeight:'bold'
      },
    txtinput:{
        width:150,
        backgroundColor:"#F2F3F5",
        height:40,
    },txtinput2:{
        marginVertical:30,
        width:310,
        backgroundColor:"#F2F3F5",
        height:40,
        alignSelf:"center"
    },txtinput3:{
        width:310,
        backgroundColor:"#F2F3F5",
        height:40,
        alignSelf:"center",
        height:200,
        textAlignVertical:"top",
    },logo:{
        width: 150,
    height: 150,
    alignSelf:"center",
    marginBottom:20,
    marginTop:-60
    
    },
    txt:{
        color:"#ffffff"
    },
    info:{
        marginVertical:10
    },brder:{
        borderTopColor:"#ffffff",
        borderBottomColor:"#ffffff",
        borderBottomWidth:1,
        borderTopWidth:1,
        marginBottom:20
    },
    social:{
        width:30,
        height:30,
        alignItems:"center"
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
export default Contact