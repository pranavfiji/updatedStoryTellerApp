import React from 'react';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacityBase, TouchableOpacity,Alert,KeyboardAvoidingView } from 'react-native';
import firebase from "firebase";
import db from "../config"

export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state={
            author:''
        }
    }
    submitStory=async()=>{
       var called
        db.collection("savedContend").doc(this.state.author).get()
        .then((doc)=>{
            console.log(doc.data())
        })
        Alert.alert("You have submitted");
    }
    
    render(){
        return(
            <View>
            <Header style={stlyes.header}>Write and Share</Header>
           
            <TextInput 
                placeholder="Your Dope Story Title"
                styles={styles.input}
            > 
             <KeyboardAvoidingView style={styles.container}
            behavior="padding" 
            enabled
            >
                </KeyboardAvoidingView>
                 <TextInput 
            placeholder="Your Dope Story Title"
            styles={styles.input}
        ></TextInput>

        <TextInput
             placeholder="Author"
             styles={styles.input}
            >
                 <KeyboardAvoidingView style={styles.container}
            behavior="padding" 
            enabled
            ></KeyboardAvoidingView>
        </TextInput>
        <TextInput
            placeholder="Story Here"
            styles={styles.input}
            
            >
                 <KeyboardAvoidingView style={styles.container}
            behavior="padding" 
            enabled
            ></KeyboardAvoidingView>
        </TextInput>
            <TouchableOpacity
                onPress={async()=>{
                    this.submitStory }}
            >
                <Text>Submit</Text>
            </TouchableOpacity></TextInput>

            <TextInput
                 placeholder="Author"
                 styles={styles.input}
                >
                     <KeyboardAvoidingView style={styles.container}
            behavior="padding" 
            enabled
            ></KeyboardAvoidingView>
            </TextInput>
            <TextInput
                placeholder="Story Here"
                styles={styles.input}
                
                >
                     <TextInput 
                placeholder="Your Dope Story Title"
                styles={styles.input}
            ></TextInput>

            <TextInput
                 placeholder="Author"
                 styles={styles.input}
                >
            </TextInput>
            <TextInput
                placeholder="Story Here"
                styles={styles.input}
                
                >

            </TextInput>
                <TouchableOpacity
                    onPress={async()=>{
                        this.submitStory }}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </TextInput>
                <TouchableOpacity
                    onPress={async()=>{
                        this.submitStory }}
                >
                    <Text>Submit</Text>
                    
                </TouchableOpacity>
                
            </View>
            
        )
    }
}

const style=StyleSheet.create({
    input:{
        flexDirection:"row",
        margin:20,
        width:200,
        height:40,
        borderWidth:2,
        fontSize:20,
    },
    story:{
        flexDirection:"row",
        margin:20,
         multiline: "true",
         width:200,
         height:100,
         borderWidth:2,
         fontSize:20,
    },
    header:{
        borderWidth:2,
        backgroundColor:"grey"
    }
})
