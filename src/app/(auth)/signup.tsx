import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
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
                ></ShareInput>
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                ></ShareInput>
                <ShareInput
                    title="Password"
                ></ShareInput>
                <View style={{ marginVertical: 10 }}></View>

                <ShareButton
                    title=" Đăng nhập với email"
                    onPress={() => { alert("me") }}
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

        </SafeAreaView>
    )
}
export default SignUpPage;