import { useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const categorias = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
];

const Categoria = () => {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorías</Text>
            <FlatList
                data={categorias}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push(`categoria/${item}`)}
                    >
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />

            
        </View>
    );
}

export default Categoria;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4B2E1E',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        width: 250,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});