import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Like = () => {
    const navigation: any = useNavigation();

    return (
        <View>
            <Text>like component</Text>
            <Button
                title="go to likeDetail"
                onPress={() => navigation.navigate("LikeDetail")}
            ></Button>
        </View>
    )
}
export default Like;