import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardTypeOptions } from "react-native";
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
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 10
    }
})
interface Iprops {
    title?: String,
    keyboardType?: KeyboardTypeOptions
}
const ShareInput = (props: Iprops) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const { title, keyboardType } = props
    return (
        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <TextInput
                onFocus={() => setIsFocus(true)}

                onBlur={() => setIsFocus(false)}
                keyboardType={keyboardType}
                style={[styles.input,
                { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.Grey }

                ]} />
        </View>
    )
}
export default ShareInput;