import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        borderColor: "red",
        borderWidth: 1,
        // flexDirection: "row",
        justifyContent: "center"
    },
    item1: {
        backgroundColor: "violet",
        padding: 20

    },
    item2: {
        backgroundColor: "green",
        padding: 20
    },
    item3: {
        backgroundColor: "red",
        padding: 20
    },
    item4: {
        backgroundColor: "orange",
        padding: 20
    }
})
const FlexBox = () => {
    return (
        <View style={styles.container}>

            <View style={styles.item1}>
                <Text>flexbox 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>flexbox 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>flexbox 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>flexbox 4</Text>
            </View>
        </View>
    )
}
export default FlexBox