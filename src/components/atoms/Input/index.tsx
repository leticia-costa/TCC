import React from 'react';
import { View, TextInput, KeyboardTypeOptions, StyleProp, TextStyle, ReturnKeyTypeOptions } from 'react-native';
import { styles } from './styles';

interface InputProps {
  id?: string
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  type: KeyboardTypeOptions | undefined
  onSubmitEditing?: () => void
  ref?: React.LegacyRef<TextInput> 
  returnKeyType?: ReturnKeyTypeOptions
}

const Input: React.FC<InputProps> = ({ placeholder, returnKeyType, value, id, onChangeText, style, type, onSubmitEditing, ref }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        id={id}
        ref={ref}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        keyboardType={type}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default Input;
