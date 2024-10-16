import { Slot } from "expo-router"
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        <View style={{ padding: 50 }}>
            <Text>header</Text>
            <Slot />
            <Text>footed</Text>
        </View>
    )
}
export default RootLayout