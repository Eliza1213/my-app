<<<<<<< HEAD:app_old/screens/Weather.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

//definimos la estructura de datos a emplear por cada item
type Pronostico = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        daily_chance_of_rain: number;
        condition: {
            text: string;
            icon: string;
        };
    };
};

const Weather = () => {
       //definicion de estados en la app Pronostico, cargando
    const [pronosticoDatos, setPronosticoDatos] = useState<Pronostico[]>([]);
    const [Cargando, setCargando] = useState<boolean>(true);

     //definimos la peticion web con el hook useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                //vamos a realizar la peticion fetch
                const posicion = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const latitud = posicion.coords.latitude;
                const longitud = posicion.coords.longitude;
                
                const apiKey = 'f325cbc525f14897ac3175922252502';
                const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitud},${longitud}&days=5&aqi=no&alerts=no`;

                const respuesta = await axios.get(apiURL);
                setPronosticoDatos(respuesta.data.forecast.forecastday);
                setCargando(false);
            } catch (error) {
                console.log('Error al obtener datos del clima:', error);
            }
        };

        fetchData();
    }, []);

    // Pantalla de carga
    const LoadingScreen = () => (
        <View style={styles.loadingContainer}>
            <Text>Cargando Pronóstico...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );

    // Pantalla con datos cargados
    const ForecastScreen = () => (
        <FlatList
            data={pronosticoDatos}
            renderItem={({ item }) => <PronosticoItem forecast={item} />}
            keyExtractor={(item) => item.date}
            horizontal
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
        />
    );

    // Componente para cada item del pronóstico
    const PronosticoItem = ({ forecast }: { forecast: Pronostico }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.date}>{formatDate(forecast.date)}</Text>
            <Image source={{ uri: `https:${forecast.day.condition.icon}` }} style={styles.icon} />
            <Text style={styles.condition}>{forecast.day.condition.text}</Text>
            <Text style={styles.temp}>Máx: {forecast.day.maxtemp_c}°C | Mín: {forecast.day.mintemp_c}°C</Text>
            <Text style={styles.rain}>Precipitación: {forecast.day.daily_chance_of_rain} mm</Text>
        </View>
    );

    const formatDate = (dateString: string): string => {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
        const date = new Date(dateString);
        return `${diasSemana[date.getDay()]}, ${date.toLocaleDateString()}`;
    };

    return <View style={styles.container}>{Cargando ? <LoadingScreen /> : <ForecastScreen />}</View>;
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        paddingVertical: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    itemContainer: {
        backgroundColor: '#FFD700', 
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
    condition: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginVertical: 5,
    },
    temp: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    rain: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginTop: 5,
    },
});
=======
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

//definimos la estructura de datos a emplear por cada item
type Pronostico = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        daily_chance_of_rain: number;
        condition: {
            text: string;
            icon: string;
        };
    };
};

const Weather = () => {
       //definicion de estados en la app Pronostico, cargando
    const [pronosticoDatos, setPronosticoDatos] = useState<Pronostico[]>([]);
    const [Cargando, setCargando] = useState<boolean>(true);

     //definimos la peticion web con el hook useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                //vamos a realizar la peticion fetch
                const posicion = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const latitud = posicion.coords.latitude;
                const longitud = posicion.coords.longitude;
                
                const apiKey = 'f325cbc525f14897ac3175922252502';
                const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitud},${longitud}&days=5&aqi=no&alerts=no`;

                const respuesta = await axios.get(apiURL);
                setPronosticoDatos(respuesta.data.forecast.forecastday);
                setCargando(false);
            } catch (error) {
                console.log('Error al obtener datos del clima:', error);
            }
        };

        fetchData();
    }, []);

    // Pantalla de carga
    const LoadingScreen = () => (
        <View style={styles.loadingContainer}>
            <Text>Cargando Pronóstico...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );

    // Pantalla con datos cargados
    const ForecastScreen = () => (
        <FlatList
            data={pronosticoDatos}
            renderItem={({ item }) => <PronosticoItem forecast={item} />}
            keyExtractor={(item) => item.date}
            horizontal
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
        />
    );

    // Componente para cada item del pronóstico
    const PronosticoItem = ({ forecast }: { forecast: Pronostico }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.date}>{formatDate(forecast.date)}</Text>
            <Image source={{ uri: `https:${forecast.day.condition.icon}` }} style={styles.icon} />
            <Text style={styles.condition}>{forecast.day.condition.text}</Text>
            <Text style={styles.temp}>Máx: {forecast.day.maxtemp_c}°C | Mín: {forecast.day.mintemp_c}°C</Text>
            <Text style={styles.rain}>Precipitación: {forecast.day.daily_chance_of_rain} mm</Text>
        </View>
    );

    const formatDate = (dateString: string): string => {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
        const date = new Date(dateString);
        return `${diasSemana[date.getDay()]}, ${date.toLocaleDateString()}`;
    };

    return <View style={styles.container}>{Cargando ? <LoadingScreen /> : <ForecastScreen />}</View>;
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        paddingVertical: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    itemContainer: {
        backgroundColor: '#FFD700', 
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
    condition: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginVertical: 5,
    },
    temp: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    rain: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginTop: 5,
    },
});
>>>>>>> ec3798ff61f5a9ee148905e298a448c489e6a22c:app/screens/Weather.tsx
