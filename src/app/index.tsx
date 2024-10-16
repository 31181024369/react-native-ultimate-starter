import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native"

const AppRoot = () => {
    const handleLogin = () => {
        alert('login nhe')
        router.navigate("/user")
    }
    return (
        <View>
            <Text>
                2-Hello world with expo router

            </Text>
            <Link href={"/hoidanit"}>Go to hoidanit</Link>
            <Link href={"/like"}>go to like</Link>
            <Link href={"/like/like.detail"} asChild>
                <Button title="go to detail"></Button>
            </Link>
            <View style={{ margin: 20 }} >
                <Button title="login" onPress={handleLogin}></Button>
            </View>

        </View>
    )
}
export default AppRoot;