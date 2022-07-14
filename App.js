import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, EventsScreen, FeedScreen, ScheduleScreen} from "./src/Screens";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        title: 'Умный Город. Живи спортом'
                    }}
                />
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{
                        title: 'Регистрация',
                    }}
                />
                <Stack.Screen
                    name="events"
                    component={EventsScreen}
                    options={{
                        title: 'Календарь мероприятий',
                    }}
                />
                <Stack.Screen
                    name="schedule"
                    component={ScheduleScreen}
                    options={{
                        title: 'График соревнований',
                    }}
                />
                <Stack.Screen
                    name="feed"
                    component={FeedScreen}
                    options={{
                        title: 'Лента новостей',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
