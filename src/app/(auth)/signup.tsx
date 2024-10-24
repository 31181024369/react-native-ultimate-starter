import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import axios, { Axios } from "axios";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 20,
        gap: 10
    },

})
const SignUpPage = () => {
    const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const handleSignUp = async () => {

        try {
            const res = await registerAPI(email, password, name);
            if (res.data) {
                // router.navigate("/(auth)/verify");
                router.replace({
                    pathname: "/(auth)/verify",
                    params: { email: email }
                });
            } else {
                //alert(res.message)
                const m = Array.isArray(res.message)
                    ? res.message[0] : res.message;
                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                })
            }

        } catch (error) {
            console.log(">>check error ", error);
        }
    }
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await axios.get(URL_BACKEND!);
                console.log(">>>check res:", res.data);
            } catch (error) {
                console.log(">>check error ", error);
            }

        }
        fetchAPI();

    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>


            <View style={styles.container}>
                <View>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 600,
                            marginVertical: 30
                        }}
                    >Đăng kí tài khoản</Text>
                </View>
                <ShareInput
                    title="Họ và Tên"
                    value={name}
                    setValue={setName}


                ></ShareInput>
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                ></ShareInput>
                <ShareInput
                    title="Password"
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                ></ShareInput>
                <View style={{ marginVertical: 10 }}></View>

                <ShareButton
                    title=" Đăng nhập với email"
                    onPress={handleSignUp}
                    textStyle={{
                        color: "#fff",
                        textTransform: "uppercase",
                        paddingVertical: 5
                    }}
                    pressStyle={{ alignSelf: "stretch" }}
                    btnStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        backgroundColor: APP_COLOR.ORANGE,
                        marginHorizontal: 50,
                        paddingVertical: 10,

                    }}

                ></ShareButton>
                <View style={{
                    marginVertical: 15,
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center"
                }}>
                    <Text style={{

                        color: "black"
                    }}>
                        Đã có tài khoản?
                    </Text>
                    <Link href={"/(auth)/signup"}>

                        <Text style={{
                            textDecorationLine: "underline",
                            color: "black",

                        }}>
                            Đăng ký.
                        </Text>
                    </Link>
                </View>


                <SocialButton></SocialButton>

            </View>

        </SafeAreaView >
    )
}
export default SignUpPage;