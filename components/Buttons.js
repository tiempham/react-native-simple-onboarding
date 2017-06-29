import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const SymbolButton = ({ isLight, size, onPress, style, textStyle, children }) => (
  <View style={{ height: size, width: size, justifyContent: 'center', ...style, borderColor:'#ff6619', borderWidth: 1 }}>
    <TouchableOpacity style={{ flex: 0 }} onPress={onPress}>
      <Text style={{ textAlign: 'center', fontSize: size / 1.7, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  </View>
);

const TextButton = ({ isLight, size, onPress, textStyle, children }) => (
  <View style={{ flex: 0, paddingRight: 10 }}>
    <TouchableOpacity style={{ flex: 0 }} onPress={onPress}>
      <Text style={{ fontSize: size / 2.5, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  </View>
);

export { SymbolButton, TextButton };
