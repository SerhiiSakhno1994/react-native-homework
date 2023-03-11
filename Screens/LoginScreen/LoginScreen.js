import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const [count, setCount] = useState(0);

  const onPress = () => setCount((prevCount) => prevCount + 1);
  console.log(count);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* <View>
          <Text style={styles.formText}>Войти</Text>
        </View> */}

        <View>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder={"Адрес электронной почты"}
            placeholderTextColor={"#BDBDBD"}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            style={styles.input}
            textAlign={"center"}
            placeholder={"Пароль"}
            placeholderTextColor={"#BDBDBD"}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Text style={styles.btnTitle}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 45,
    height: 400,
  },
  form: {
    alignContent: "center",
    marginHorizontal: 16,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    borderRadius: 25,
    backgroundColor: "#E8E8E8",
    height: 50,
  },
  formText: {
    color: "#212121",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 25,
    marginTop: 43,
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 160,
    marginHorizontal: 10,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
  },
});
