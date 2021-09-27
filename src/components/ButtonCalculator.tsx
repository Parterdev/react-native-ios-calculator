import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  text: string,
  bgColor?: string,
  textColor?: string,
  width?: boolean,
  align?: boolean,
  margin?: boolean,
  action: (textAction: string) =>void,
}


export const ButtonCalculator = (
  { 
    action,
    text, 
    bgColor='#333333', 
    textColor, 
    width=false,
    align=false,
    margin=false,
  }:Props) => 
  {
  //console.log("Here my props:", text);
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{
        ...styles.button, backgroundColor: bgColor,
        width: (width) ? 180 : 80
      }}>
        <Text style={[styles.buttonText, 
            { color: textColor, 
              textAlign: (align) ? 'left' : 'center',
              marginLeft: (margin) ? 20 : 0,
            }
          ]}>{text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
      borderRadius: 100,
      justifyContent: 'center',
      height: 80,
      marginHorizontal: 5,
    },
    buttonText: {
      padding: 10,
      fontSize: 30,
      color: 'black',
    },
});

