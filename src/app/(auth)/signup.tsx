import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, TextInput, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 20,
        gap: 10
    },
    inputGroup: {

        padding: 5,
        gap: 10
    },
    text: {
        fontSize: 18,

    },
    input: {
        borderColor: "#d0d0d0",
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 5
    }
})
const SignUpPage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Đăng kí tài khoản</Text>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Họ và Tên</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} />
            </View>
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

        </View>
    )
}
export default SignUpPage;