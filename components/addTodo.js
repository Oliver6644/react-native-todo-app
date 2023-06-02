import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="nova uloha..."
        onChangeText={changeHandler}
      />
      <View style={{ marginRight: 20 }}>
        <Button
          onPress={() => submitHandler(text)}
          title="pridat ulohu"
          color="coral"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
