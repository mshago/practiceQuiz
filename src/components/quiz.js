import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from './button';

const data = {
  correctIndexAnswer: 3,
  question: 'What does JSON stand for?',
  answers: [
    'JavaScript Operational Navegation',
    'Juan Santiago Oscar Nava',
    'JavaScript Object Namespaced',
    'JavaScript Object Notation',
  ],
};

const Quiz = () => {
  const [selected, setSelected] = useState('');
  const [isCorrect, setIsCorrect] = useState('');

  const handlePress = (index, correctIndexAnswer) => {
    setSelected(index);
    setIsCorrect(index === correctIndexAnswer ? true : false);
  };

  const getColor = isCorrect => {
    return isCorrect ? 'green' : 'tomato';
  };

  return (
    <View style={styles.quizContainer}>
      <Text>{data.question}</Text>
      <View style={styles.buttonsContainer}>
        {data.answers.map((x, index) => {
          return (
            <Button
              key={index}
              title={x}
              onPress={() => handlePress(index, data.correctIndexAnswer)}
              backgroundColor={
                index === selected ? getColor(isCorrect) : 'dodgerblue'
              }
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  buttonsContainer: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Quiz;
