import { Tabs } from "expo-router";

export default function tabsLayout(){
    return(
        <Tabs screenOptions={{ headerShown: true }}>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="productos" options={{ title: "Productos" }} />
            <Tabs.Screen name="about" options={{ title: "Acerca de" }} />
            <Tabs.Screen name="setting" options={{ title: "Configuraciones" }} />
            <Tabs.Screen name="categorias" options={{ title: "Categorias" }} />
        </Tabs>
    );
}