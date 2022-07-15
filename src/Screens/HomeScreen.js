import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EventsScreen from "./EventsScreen";
import ScheduleScreen from "./ScheduleScreen";
import FeedScreen from "./FeedScreen";
import NotificationScreen from "./NotificationScreen";


const btns = [
    {title: "Календарь мероприятий", screen: 'events'},
    {title: "Мои соревнования", screen: 'schedule'},
    {title: "Лента новостей", screen: 'feed'},
    {title: "Уведомления", screen: 'notification'},
]


const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#9400D3'
        }}>
            <Tab.Screen
                name="Мероприятия"
                component={EventsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen name="Мои соревнования" component={ScheduleScreen}
            options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="flag" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen name="Новости" component={FeedScreen}
            options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper" color={color} size={size}/>
                    )
                }}/>
            <Tab.Screen name="Уведомления" component={NotificationScreen}
            options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                    )
                }}/>
        </Tab.Navigator>
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     <View style={{marginTop: 10}}>
        //         {
        //             btns.map(({title, screen}) => (
        //                 <View key={screen} style={{marginTop: 5}}>
        //                     <Button
        //                         title={title}
        //                         onPress={() => navigation.push(screen)}/>
        //                 </View>
        //             ))
        //         }
        //     </View>
        // </View>
    );
}

export default HomeScreen;