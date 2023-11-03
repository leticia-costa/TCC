import React, { MutableRefObject } from 'react';
import { View, TextInput, KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';

interface InputProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  type: KeyboardTypeOptions | undefined
  onSubmitEditing?: () => void
  ref?: React.LegacyRef<TextInput> 
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, style, type, onSubmitEditing, ref }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        ref={ref}
        returnKeyType="done"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        keyboardType="numeric"
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default Input;
