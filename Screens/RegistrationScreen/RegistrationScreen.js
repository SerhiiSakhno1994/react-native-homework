import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [user, setUser] = useState(initialState);

  const onPress = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(user);
    setUser(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.formText}>Регистрация</Text>
        </View>
        <View style={styles.form}>
          <View>
            <TextInput
              style={styles.input}
              placeholder={"Логин"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => setIsShowKeyboard(true)}
              value={user.userName}
              onChangeText={(value) =>
                setUser((prevState) => ({ ...prevState, userName: value }))
              }
            />
          </View>
          <View>
            <TextInput
              style={[styles.input, { marginTop: 16 }]}
              // textAlign={"left"}
              placeholder={"Адрес электронной почты"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => setIsShowKeyboard(true)}
              value={user.email}
              onChangeText={(value) =>
                setUser((prevState) => ({ ...prevState, email: value }))
              }
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              // textAlign={"center"}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBDed"}
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              value={user.password}
              onChangeText={(value) =>
                setUser((prevState) => ({ ...prevState, password: value }))
              }
            />
            <Switch />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={keyboardHide}
              activeOpacity={0.8}
            >
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...styles.registration,
              marginBottom: isShowKeyboard ? 20 : 132,
            }}
          >
            <Text style={styles.registrationText}>Уже есть аккаунт? Войти</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    paddingLeft: 16,
  },
  formText: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
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
    marginHorizontal: 10,
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
    // marginBottom: 132,
  },
  registrationText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
