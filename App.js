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

const Stack = createNativeStackNavigator();

const screens = [
    {name: 'home', component: HomeScreen, title: 'Умный Город: Живи спортом', opts: {}},
    {name: 'login', component: LoginScreen, title: 'Регистрация', opts: {}},
    {name: 'events', component: EventsScreen, title: 'Календарь мероприятий', opts: {}},
    {name: 'schedule', component: ScheduleScreen, title: 'График соревнований', opts: {}},
    {name: 'feed', component: FeedScreen, title: 'Лента новостей', opts: {}},
    {name: 'reg', component: RegisterScreen, title: 'Создать аккаунт', opts: {}},
    {name: 'notification', component: NotificationScreen, title: 'Уведомления', opts: {}},
]

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {screens.map(({name, component, title, opts}) => (
                    <Stack.Screen
                        key={name}
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
    );
}

export default App;
