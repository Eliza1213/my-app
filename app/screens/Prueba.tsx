import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

interface Forecast {
    date: string;
    maxTemp: number;
    minTemp: number;
    precipitation: number;
    weatherIcon: string;
    weatherDesc: string;
}

const WeatherForecast = () => {
    const [prosticoDatos, setprosticoDatos] = useState<Forecast[]>([]);
    const [loading, setCargando] = useState<boolean>(true);

    useEffect(() => {
        const CargaDatos = async () => {
            setCargando(true);
            try {
                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const apiKey = 'rFxVMwSGuId3NRDW';
                const apiURL = `https://my.meteoblue.com/packages/basic-day?apikey=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;
                const response = await axios.get(apiURL);
                console.log('Respuesta API:', response.data);

                if (response.data?.data_day?.time) {
                    const extractedData = response.data.data_day.time.slice(0, 5).map((date: string, index: number) => ({
                        date,
                        maxTemp: response.data.data_day?.temperature_max?.[index] ?? 0,
                        minTemp: response.data.data_day?.temperature_min?.[index] ?? 0,
                        precipitation: response.data.data_day?.precipitation?.[index] ?? 0,
                        weatherIcon: response.data.data_day?.pictocode?.[index] ? `https://www.meteoblue.com/images/pictocodes/${response.data.data_day.pictocode[index]}.png` : 'https://www.meteoblue.com/images/pictocodes/na.png', // Icono por defecto
                        weatherDesc: response.data.data_day?.weather?.[index] ?? 'Desconocido',
                    }));

                    setprosticoDatos(extractedData);
                } else {
                    console.error("Estructura inesperada en la respuesta de la API", response.data);
                }
            } catch (error) {
                console.error('Error al obtener datos del clima:', error);
            }
            setCargando(false);
        };
        CargaDatos();
    }, []);

    const getBackgroundColor = (temp: number) => {
        if (temp < 20) return '#ADD8E6';
        if (temp <= 30) return '#FFD700';
        return '#FFA500';
    };

    const WeatherCard = ({ forecast }: { forecast: Forecast }) => {
        const dateObj = new Date(forecast.date);
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayName = daysOfWeek[dateObj.getDay()];

        const formattedDate = `${dateObj.getDate() < 10 ? '0' : ''}${dateObj.getDate()}/${dateObj.getMonth() + 1 < 10 ? '0' : ''}${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

        return (
            <View style={[styles.card, { backgroundColor: getBackgroundColor(forecast.maxTemp) }]}>
                <Text style={styles.date}>{dayName}, {formattedDate}</Text>
                <Image source={{ uri: forecast.weatherIcon }} style={styles.icon} />
                <Text style={styles.condition}>{forecast.weatherDesc}</Text>
                <Text style={styles.temp}>Máx: {forecast.maxTemp}°C | Mín: {forecast.minTemp}°C</Text>
                <Text style={styles.rain}>Precipitación: {forecast.precipitation} mm</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <Text>Cargando Pronóstico...</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : prosticoDatos.length === 0 ? (
                <Text>No hay datos disponibles</Text>
            ) : (
                <FlatList
                    data={prosticoDatos}
                    renderItem={({ item }) => <WeatherCard forecast={item} />}
                    keyExtractor={(item) => item.date}
                    horizontal
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
};

export default WeatherForecast;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingVertical: 10,
    },
    card: {
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        elevation: 5,
        backgroundColor: '#fff',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    icon: {
        width: 80,
        height: 80,
    },
    condition: {
        fontSize: 16,
        marginVertical: 5,
    },
    temp: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rain: {
        fontSize: 14,
        fontStyle: 'italic',
    },
});

