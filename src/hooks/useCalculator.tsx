import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'

enum Operators {
  addition, substraction, multiplication, division
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [backNumber, setBackNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setBackNumber('0');
  }

  //To set old number with current
  const buildNumber = (textNumber:string) => {
    //Don't repeat dot
    if(number.includes('.') && textNumber === '.') return;
    //Positive and negative evaluation
    if(number.startsWith('0') || number.startsWith('-0')) {
      //Decimal dot
      if(textNumber === '.') {
        setNumber(number + textNumber);
        //Evaluate another cero and dot
      }else if(textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
        //Evaluate is different to zero and have a dot
      }else if(textNumber !== '0' && !number.includes('.')) {
        //Replace it
        setNumber(textNumber);
        //Don't repeat: 0.00000
      }else if(textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      }
    }else {
      setNumber(number + textNumber);
    }
  }

  const btnPositiveNegative = () => {
    if(number.includes('-')) {
      setNumber(number.replace('-', ''));
    }else {
      setNumber('-' + number);
    }
  }

  const btnDelete = () => {
    let array;
    let result;

    array = Array.from(number);
    
    if(array.length > 1) {
      array.pop();
      result = array.join("");
      setNumber(result);
    }else {
      setNumber('0');
    }
  
  }

  const changeBeforeNumer = () => {
    if(number.endsWith('.')) {
      setBackNumber(number.slice(0,-1));
    }else {
      setBackNumber(number);
    }
    setNumber('0');
  }


  const btnAddition = () => {
    changeBeforeNumer();
    lastOperation.current = Operators.addition;
  }

  const btnSubstraction = () => {
    changeBeforeNumer();
    lastOperation.current = Operators.substraction;
  }

  const btnMultiplication = () => {
    changeBeforeNumer();
    lastOperation.current = Operators.multiplication;
  }

  const btnDivision = () => {
    changeBeforeNumer();
    lastOperation.current = Operators.division;
  }

  const calculate = () => {
    //Convert string to int
    const num1 = Number(number);
    const num2 = Number(backNumber);

    switch (lastOperation.current) {
      case Operators.addition:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.substraction:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiplication:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.division:
        if(num1 == 0 && num2 == 0) {
          setNumber('0');
        }else {
          setNumber(`${num2 / num1}`);
        }
        break;
  
    }

    setBackNumber('0');
  }
  
  return {
    clean,
    buildNumber,
    btnPositiveNegative,
    btnDelete,
    btnAddition,
    btnSubstraction,
    btnMultiplication,
    btnDivision,
    calculate,
    number, 
    backNumber
  }
}

