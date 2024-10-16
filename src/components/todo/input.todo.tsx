import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
})
interface IProps {
    addTodo: (v: string) => void;
}
const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("");
    const handAddNewTodo = () => {
        if (!name) {
            Alert.alert("Thông tin không hợp lệ", "Tiêu đề không được để trống", [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
            return;
        }
        addTodo(name);
        setName("");
    }

    return (
        <>
            <View style={{ marginBottom: 10 }}>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    autoCorrect
                    // maxLength={2}a
                    // multiline
                    style={styles.todoInput}></TextInput>

                {/* <Text style={styles.test}>{age}</Text>
        <Text style={styles.test}>{JSON.stringify(person)}</Text> */}

                <Button title='APP NEW'
                    color={"green"}
                    onPress={handAddNewTodo}

                ></Button>
                <MineButton
                    title='APP NEW'
                    onPress={handAddNewTodo}
                ></MineButton>

            </View>
        </>
    )
}
export default InputTodo;