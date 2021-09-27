import { StyleSheet } from "react-native";


//Global styles
export const styles = StyleSheet.create({
    calculatorContainer: {
      //backgroundColor: 'blue',
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'flex-end',
    },
    resultText: {
      //backgroundColor: 'red',
      color: '#FFFFFF',
      fontSize: 60,
      textAlign: 'right',
    },
    resultTextMin: {
      //backgroundColor: 'skyblue',
      color: 'rgba(255,255,255, 0.5)',
      fontSize: 40,
      textAlign: 'right',
    },
    rowButtoon: {
      //backgroundColor: 'pink',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 10,
    },
    background : {
      flex: 1,
      backgroundColor: 'black',
    },
});