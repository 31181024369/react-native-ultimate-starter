import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    todo: {
        backgroundColor: "pink",
        fontSize: 30,
        marginBottom: 10,
        padding: 15
    },
})

interface ITodos {
    todoList: ITodo[],
    deleteTodo: (id: number) => void
}
const ListTodo = (props: ITodos) => {
    const { todoList, deleteTodo } = props;
    return <>
        <FlatList style={{ marginTop: 10, borderColor: "red", borderWidth: 1 }} data={todoList}
            keyExtractor={item => item.id + ""}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { deleteTodo(item.id) }}>
                        <Text style={styles.todo}>{item.title}</Text>
                    </TouchableOpacity>

                )
            }}
        >

        </FlatList>
    </>
}
export default ListTodo;