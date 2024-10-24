import { Text, View } from "react-native"

interface Iprops {
    title: String,
    textColor?: "white" | "black"
}
const TextBetweenLine = (props: Iprops) => {
    const { title, textColor = "white" } = props;
    return (
        <View style={{
            flexDirection: "row",
            gap: 15,
            justifyContent: "center"
        }}>
            <View style={{
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingHorizontal: 35
            }}>

            </View>
            <Text style={{
                color: textColor,
                top: 10,
                position: "relative"

            }}>{title}</Text>
            <View style={{
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingHorizontal: 35
            }}></View>
        </View>
    )
}
export default TextBetweenLine