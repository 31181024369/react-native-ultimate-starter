import { Text, View } from "react-native"

interface Iprops {
    title: String
}
const TextBetweenLine = (props: Iprops) => {
    const { title } = props;
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
                color: "white",
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