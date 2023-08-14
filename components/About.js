import { StyleSheet, Text,Image, ScrollView, TouchableOpacity,View} from 'react-native';
const About=({navigation,route})=>{
    color = route.params.color
    buttontxt= route.params.buttontxt
    return(
        <ScrollView style={[styles.container,{backgroundColor:color}]}>
            <TouchableOpacity style={styles.back}><Text style={[styles.backtxt,{color:buttontxt}]}
            onPress={()=>navigation.pop()}>←</Text></TouchableOpacity>
            <Image style={styles.logo} source={require('../imgs/Picture1.png')}/>

            <Text style={[styles.title,{color:buttontxt}]}>Shoubra Faculty Of Engineering</Text>
            <Image style={styles.logo2} source={require('../imgs/2019-12-29.jpg')}/>

            <Text style={[styles.txt,{color:buttontxt}]}>يرجع أساس الكلية إلى الشعبة الهندسية بالمعهد العالى الفنى بالقاهرة
                 والذي تأسس في أكتوبر عام 1961 وكان تابعاً لوزارة التعليم العالى ويضم ثلاث شعب هي الشعبة الهندسية والشعبة الزراعية والشعبة
                  التجارية وتمنح الشعبة 
                  الهندسية درجة البكالوريوس في الهندسة بعد دراسة خمس سنوات باللغة الإنجليزية.</Text>
            <Text style={[styles.txt,{color:buttontxt}]}>في أكتوبر عام 1975 تم دمج الشعبة الهندسية 
                بالمعهد العالى الفنى بالقاهرة إلى كلية التكنولوجيا بالمطرية - جامعة حلوان.</Text>
            <Text style={[styles.txt,{color:buttontxt}]}>في 7/4/1976 تم صدور القرار الجمهوري رقم (367) لسنة 1976 بضم المعهد العالى الفنى بشبرا إلى جامعة عين شمس 
                تحت اسم كلية الهندسة بشبرا.</Text>
            <Text style={[styles.txt,{color:buttontxt}]}>في 30/10/1976 تم صدور القرار الجمهوري رقم (1069) لسنة 1976 بضم كلية الهندسة بشبرا إلى جامعة الزقازيق - فرع بنها.</Text>
            <Text style={[styles.txt,{color:buttontxt}]}>وصدر القرار الجمهوري رقم (84) لسنة 2005 بإنشاء جامعة بنها واعتبار كلية الهندسة بشبرا إحدى كلياتها.</Text>
        
        <View style={{borderTopColor:buttontxt,borderTopWidth:1,borderBottomColor:buttontxt,borderBottomWidth:1}}>
            <Text style={[styles.txt,{color:buttontxt}]}>Supervised By:</Text>
    
        <Text style={[styles.txt,{color:buttontxt,alignSelf:"center",fontSize:10}]}>Assoc. Prof. Sahar Abdelrahman</Text>
        <Text style={[styles.txt,{color:buttontxt,alignSelf:"center",fontSize:10}]}>Assoc. Prof. Shady Y. Elmashad</Text>
        
        <Text style={[styles.txt,{color:buttontxt,alignSelf:"center",fontSize:10}]}>TA. Ahmed Mehrez</Text>
        
            <Text style={[styles.txt,{color:buttontxt}]}>Made By:</Text>
        <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Aya Hossam Ali</Text>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Mohamed Hosny Hegazy</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Aya Osama Sayed</Text>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Nermen Ahmed Fouad</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Toqa Sameh Salah</Text>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Kareem Taha Abdelfatah</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Ahmed Mahmoud Mohammed</Text>
            <Text style={[styles.txt,{color:buttontxt,fontSize:10}]}>Mariam Reda Ibrahim</Text>
        </View>
                <Text style={[styles.txt,{color:buttontxt,fontSize:10,alignSelf:"center"}]}>Rawan Mohammed Fathy</Text>

        </View>
        <View style={{marginBottom:30}}>
            <Text style={[styles.txt,{color:buttontxt,alignSelf:"center"}]}>© 2023 Shoubra Faculty Of Engineering. All rights reserved</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor:"#010328",
      
    },
    logo:{
        width: 150,
    height: 150,
    alignSelf:"center",
    marginBottom:20,
    marginTop:-60
    },logo2:{
        width: 150,
    height: 150,
    alignSelf:"center",
    marginBottom:20,
    marginTop:20
    },title:{
        color:"#D1E0F1",
        fontSize:40,
        alignSelf:"center",
        fontWeight:'bold',
        textAlign:"center"
    },
    txt:{
        color:"#D1E0F1",
        marginVertical:10
    },txt2:{
        color:"#D1E0F1",
        marginBottom:40,
        marginTop:10
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
export default About