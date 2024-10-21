import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        // <View style={{ padding: 50 }}>
        //     <Text>header</Text>
        //     <Slot />
        //     <Text>footed</Text>
        // </View>
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}

        >
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(auth)/signup"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(tabs)"
                options={{ headerTitle: "Trang chủ" }}
            />

            <Stack.Screen
                name="product/index"
                options={{ headerTitle: "sản phẩm" }}
            />
            <Stack.Screen
                name="(auth)/login"
                options={{ headerTitle: "đăng nhập" }}
            />
        </Stack>
    )
}
//https://sexlauxanh.us/
//https://themphotv.com/
export default RootLayout