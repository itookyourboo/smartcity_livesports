import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    HomeScreen,
    LoginScreen,
    EventsScreen,
    FeedScreen,
    ScheduleScreen,
    RegisterScreen,
    EventApplyScreen,
    NotificationScreen,
    EventDescriptionScreen
} from "./src/Screens";
import {store, setStore} from "./src/store";
import TokenManager from "./src/services/TokenManager";
import {createTheme, ThemeProvider} from "@rneui/themed";

const Stack = createNativeStackNavigator();

const screens = [
    {name: 'home', component: HomeScreen, title: 'Умный Город: Живи спортом', opts: {}},
    {name: 'events', component: EventsScreen, title: 'Календарь мероприятий', opts: {}},
    {name: 'schedule', component: ScheduleScreen, title: 'Мои соревнования', opts: {}},
    {name: 'feed', component: FeedScreen, title: 'Лента новостей', opts: {}},
    {name: 'reg', component: RegisterScreen, title: 'Создать аккаунт', opts: {}},
    {name: 'notification', component: NotificationScreen, title: 'Уведомления', opts: {}},
]

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    {TokenManager.getToken() == null && (
                        <Stack.Screen name="login" component={LoginScreen}
                                      options={{
                                          title: 'Авторизация',
                                          animationTypeForReplace: 'pop'
                                      }}/>
                    )}
                    {screens.map(({name, component, title, opts}, index) => (
                        <Stack.Screen
                            key={index}
                            name={name}
                            component={component}
                            options={{
                                title: title,
                                ...opts
                            }}
                        />
                    ))}
                    <Stack.Screen
                        name="event_description"
                        component={EventDescriptionScreen}
                        options={({route}) => ({title: route.params.eventParams.sport})}
                    />
                    <Stack.Screen
                        name="event_apply"
                        component={EventApplyScreen}
                        options={{title: 'Подать заявку'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

const theme = createTheme({
    lightColors: {
        primary: '#9400D3',
        secondary: '#87CEFA',
    }
})

export default App;
