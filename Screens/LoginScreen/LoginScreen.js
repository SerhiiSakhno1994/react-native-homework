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
      <View style={styles.containerText}>
        <Text style={styles.formText}>Войти</Text>
      </View>
      <View style={styles.form}>
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
        <View style={styles.registration}>
          <Text style={styles.registrationText}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  form: {
    alignContent: "center",
    marginHorizontal: 16,
    marginTop: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
    height: 50,
    borderWidth: 1,
  },
  formText: {
    color: "#212121",
    fontSize: 30,
  },
  containerText: {
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "flex-start",
    marginTop: 35,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 25,
    marginTop: 43,
    justifyContent: "center",
    alignContent: "center",
    // alignSelf: "center",
    // paddingLeft: 160,
    marginHorizontal: 10,
    // width: 343,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "center",
  },
  registration: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 132,
  },
  registrationText: {
    fontSize: 16,
    color: "#1B4371",
  },
});
