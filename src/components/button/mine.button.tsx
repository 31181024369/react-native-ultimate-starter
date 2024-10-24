import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        alignSelf: "flex-start"


    },
    text: {
        textTransform: "uppercase",

    }
})
interface IProps {
    title: string,
    onPress: any
}
const MineButton = (props: IProps) => {
    const { title, onPress } = props;
    return (
        <Pressable
            style={({ pressed }) => ({ opacity: pressed === true ? 0.5 : 1 })}
            onPress={onPress}
        >
            <View style={styles.btnContainer}>
                <AntDesign name="pluscircle" size={30} color="orange" />
                <Text style={styles.text}>{title}</Text>
            </View>

        </Pressable>


    )
}
export default MineButton;