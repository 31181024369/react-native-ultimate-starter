import { Image, StyleSheet, View } from "react-native"
import TextBetweenLine from "./text.between.line"
import ShareButton from "./share.button"
import faLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';

const styles = StyleSheet.create({
    welcomeBtn: {
        flex: 1,
        gap: 30
    }
})
const SocialButton = () => {
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine
                title="Đăng nhập với"
                textColor="black"
            ></TextBetweenLine>
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
        </View>
    )
}
export default SocialButton