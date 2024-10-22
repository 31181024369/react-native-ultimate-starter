import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardTypeOptions } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    inputGroup: {

        padding: 5,
        gap: 10
    },
    text: {
        fontSize: 18,

    },
    input: {
        borderColor: APP_COLOR.Grey,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    eye: {
        position: "absolute",
        right: 10,
        top: 13

    }
})
interface Iprops {
    title?: String,
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry?: boolean,
    value: any,
    setValue: (v: any) => void
}
const ShareInput = (props: Iprops) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const { title, keyboardType, secureTextEntry = false,
        value, setValue
    } = props
    return (
        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <View>
                <TextInput
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    onFocus={() => setIsFocus(true)}

                    onBlur={() => setIsFocus(false)}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !isShowPassword}
                    style={[styles.input,
                    { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.Grey }

                    ]} />
                {secureTextEntry &&
                    <FontAwesome5 name={isShowPassword ? "eye" : "eye-slash"}
                        style={styles.eye}
                        size={24}
                        color="black"
                        onPress={() => { setIsShowPassword(!isShowPassword) }}
                    />
                }

            </View>
        </View>
    )
}
export default ShareInput;