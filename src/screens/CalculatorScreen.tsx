import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const {
    number,
    backNumber,
    clean,
    calculate, 
    btnPositiveNegative, 
    btnDelete, 
    buildNumber,
    btnMultiplication, 
    btnDivision,
    btnAddition, 
    btnSubstraction
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {(backNumber !== '0') && (
        <Text style={styles.resultTextMin}>{backNumber}</Text>
      )}
      <Text 
        style={styles.resultText}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{number}
      </Text>

      
      <View style={styles.rowButtoon}>
        <ButtonCalculator 
          text={(number === '0' ? 'AC' : 'C')} 
          bgColor='#9B9B9B' 
          action={clean}
        />
        <ButtonCalculator text="+/-" bgColor='#9B9B9B' action={btnPositiveNegative}/>
        <ButtonCalculator text="DEL" bgColor='#9B9B9B' action={btnDelete} />
        <ButtonCalculator text="÷"
          action={btnDivision}  
          bgColor="#FF9427"
          textColor='#FFFFFF' />
      </View>

      <View style={styles.rowButtoon}>
        <ButtonCalculator text="7" textColor='#FFFFFF'
          action={buildNumber}
        />
        <ButtonCalculator text="8" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="9" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="X" 
          action={btnMultiplication}
          bgColor="#FF9427"
          textColor='#FFFFFF' />
      </View>

      <View style={styles.rowButtoon}>
        <ButtonCalculator text="4" textColor='#FFFFFF'
          action={buildNumber}
        />
        <ButtonCalculator text="5" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="6" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="-" 
          action={btnSubstraction}
          bgColor="#FF9427"
          textColor='#FFFFFF' />
      </View>

      <View style={styles.rowButtoon}>
        <ButtonCalculator text="1" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="2" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="3" textColor='#FFFFFF'
          action={buildNumber} 
        />
        <ButtonCalculator text="+" 
          action={btnAddition}
          bgColor="#FF9427"
          textColor='#FFFFFF' />
      </View>

      <View style={styles.rowButtoon}>
        <ButtonCalculator text="0" textColor='#FFFFFF' 
          width 
          align
          margin
          action={buildNumber}
        />
        <ButtonCalculator text="." textColor='#FFFFFF' 
          action={buildNumber}
        />
        <ButtonCalculator text="=" 
          action={calculate}
          bgColor="#FF9427"
          textColor='#FFFFFF' />
      </View>
    </View>
  )
}

