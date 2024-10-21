import { Link, Redirect, router } from "expo-router";
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import ShareButton from "../components/button/share.button";
import { APP_COLOR } from "../utils/constant";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import bg from '@/assets/auth/welcome-background.png';
import faLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';
import { LinearGradient } from "expo-linear-gradient";
import TextBetweenLine from "@/components/button/text.between.line";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15


    },
    welcomeText: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20


    },
    welcomeBtn: {
        flex: 0.4,

        gap: 20
    },
    header: {
        fontSize: 40,
        fontWeight: "600"
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10
    },
    footed: {

    },
    btnContainer: {

    },
    btnContent: {
        backgroundColor: "green",
        padding: 20,
        borderRadius: 10,
        alignSelf: "flex-start"

    },
    btnText: {
        textTransform: "uppercase"

    }

})
const WelcomePage = () => {

    if (true) {
        return (
            <Redirect href={"/(auth)/signup"}></Redirect>
        )
    }
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={bg}
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.8]}
            >



                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.header}>
                            Welcome to
                        </Text>
                        <Text style={styles.body}>
                            @hoidanit-Food
                        </Text>
                        <Text style={styles.footed}>
                            Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam
                        </Text>
                    </View>
                    <View style={styles.welcomeBtn}>
                        <TextBetweenLine title="Đăng nhập với"></TextBetweenLine>
                        {/* <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "red",
                            marginHorizontal: 50

                        }}>
                            <Text style={{
                                padding: 10,
                                textAlign: "center",
                                backgroundColor: "white",
                                alignSelf: "center",
                                position: "relative",
                                top: 20

                            }}>
                                Đăng nhập với
                            </Text>
                        </View> */}
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 30

                        }}>
                            <ShareButton
                                title="facebook"
                                onPress={() => { alert("me") }}
                                textStyle={{ textTransform: "uppercase" }}
                                pressStyle={{ alignSelf: "stretch" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 50,
                                    backgroundColor: "#fff"
                                }}
                                icons={<Image source={faLogo}></Image>}
                            ></ShareButton>
                            <ShareButton
                                title="google"
                                onPress={() => { alert("me") }}
                                textStyle={{ textTransform: "uppercase" }}
                                pressStyle={{ alignSelf: "stretch" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 50,
                                    backgroundColor: "#fff"
                                }}
                                icons={<Image source={ggLogo}></Image>}
                            ></ShareButton>
                        </View>


                        {/* <View style={styles.btnContainer}>
                    <View style={styles.btnContent}>
                        <Text style={styles.btnText}>Facebook</Text>
                    </View>

                </View> */}

                        <View>

                            <ShareButton
                                title=" Đăng nhập với email"
                                onPress={() => { alert("me") }}
                                textStyle={{ color: "#fff", paddingVertical: 5 }}
                                pressStyle={{ alignSelf: "stretch" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    backgroundColor: "#2c2c2c",
                                    marginHorizontal: 50,
                                    paddingVertical: 10,
                                    borderColor: "white",
                                    borderWidth: 1
                                }}

                            ></ShareButton>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{

                                color: "#fff"
                            }}>
                                Chưa có tài khoản ?
                            </Text>
                            <Link href={"/(auth)/signup"}>

                                <Text style={{
                                    textDecorationLine: "underline",
                                    color: "#fff",

                                }}>
                                    Đăng ký.
                                </Text>
                            </Link>
                        </View>

                    </View>
                    {/* <Text>welcome to HomePage</Text> */}
                    {/* <Link href={"/product"}>go to product</Link>
            <Link href={"/login"}>go to login</Link> */}
                </View>
            </LinearGradient>

        </ImageBackground>
    )
}
export default WelcomePage;