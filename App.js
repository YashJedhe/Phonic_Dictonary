import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity } from "react-native";

export default function App() {

  const[newWord,setNewWord] = useState('');
  const[checkedWord, setCheckedWord] = useState('')

  const searchWord = (enteredWord)=>{
setNewWord(enteredWord)
  };

  getInfo = () => {
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + newWord;

    return fetch(url)
    .then((data)=>{
      return data.json();
    })
    .then((response)=>{
      var word = response[0].word
      setCheckedWord(word);
    })
  }
  return (
    <View style={styles.container}>
     <ImageBackground
     
     style={{flex:1}}
     resizeMode='cover'
     source={require('./assets/master.jpg')}
     >
      <View style={{flex:0.2}}>
        <Image
        source={require('./assets/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-c.jpg')}
        style= {styles.imageDesign}
        />
      </View>

      <View style={{flex:0.8}}>
        <View style={{justifyContent:"center", alignItems:'center'}}
        >
          <TextInput
           style= {styles.inputBox}
           placeholder="search a word"
           placeholderTextColor={"rgba(0,0,0,0.7)"}
           textAling="center"
           clearButton="always"
           onChangeText={searchWord}
           value={newWord}
          ></TextInput>      
        </View>

      <View style= {{
        flexDirection : "row",
        justifyContent : "space-between",
        width : "60%",
        marginTop : 20,
        marginBottom : 20,
      }}>
      <TouchableOpacity style={styles.buttonDesign}
      
      onPress={()=>{
        getInfo()
      }}
      >
        <Text style={styles.textDesign}>Go!</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.buttonDesign}>
        <Text style={styles.textDesign}>Clear!</Text>
      </TouchableOpacity> 

      <TouchableOpacity>
        <Image
        source={"./assets/Speaker.png"}
        style = {styles.speakerButton}
        />
      </TouchableOpacity>  
      </View>  
      <View>
        <Text style={styles.textDesign}>Entered Word :{checkedWord}</Text>
      </View>

      </View>
     </ImageBackground> 
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },

  imageDesign : {
    width:"80%",
    height:"120%",
    marginLeft : 50,
    marginTop:30
  },

  inputBox : {
    width:"80%",
    height: "30%",
    borderWidth:3,
    borderColor:"rgba(80,325,236,1)",
    marginTop:10,
    fontSize:25
  },

  buttonDesign:{
    backgroundColor: "rgba(80, 235, 236,0.3)",
    width: 80,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  
  buttonText:{
    fontSize: 25,
    alignSelf: "center",
    marginTop: 5,
  },

  speakerButton:{
    width: 50,
    height:40,
  },

  textDesign:{
    fontSize: 25,
    backgroundColor: "rgba(80, 235, 236,0.3)",
    marginTop: 10,
    alignSelf: "center",
  }
})