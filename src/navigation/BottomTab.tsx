import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CharSheet from '../screens/CharSheet';
import Inventory from '../screens/Inventory';
import Roll from '../screens/Roll';
import Talents from '../screens/Talents';
import Journal from '../screens/Journal';
import { Icons } from '../icons';
import { Colors } from '../theme/Colors';

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    elevation: 0,
                    position: 'absolute'
                },
                tabBarActiveTintColor: Colors.highlight,
                tabBarInactiveTintColor: Colors.secondary
            }}>
                <Tab.Screen 
                    name='Character'
                    component={CharSheet}
                    options={{tabBarIcon: ({focused}) => {
                        const Icon = Icons.Char
                        return <Icon color={focused? Colors.highlight : Colors.secondary} size={focused ? 48 : 36} style={focused ? {borderTopColor: Colors.highlight, borderTopWidth: 1} : {borderTopColor: 'transparent', borderTopWidth: 0}} />
                    }}} />
                <Tab.Screen
                    name='Inventory'
                    component={Inventory}
                    options={{tabBarIcon: ({focused}) => {
                        const Icon = Icons.Inventory
                        return <Icon color={focused ? Colors.highlight : Colors.secondary} size={focused ? 48 : 36} />
                    }}} />
                <Tab.Screen
                    name='Roll'
                    component={Roll}
                    options={{tabBarIcon: ({focused}) => {
                        const Icon = Icons.d20
                        return <Icon color={focused ? Colors.highlight : Colors.secondary} width={focused ? 48 : 36} height={focused ? 48 : 36} />
                    }}} />
                <Tab.Screen
                    name='Talents'
                    component={Talents}
                    options={{tabBarIcon: ({focused}) => {
                        const Icon = Icons.ST
                        return <Icon color={focused ? Colors.highlight : Colors.secondary} size={focused ? 48 : 36} />
                    }}} />
                <Tab.Screen
                    name='Diary'
                    component={Journal}
                    options={{tabBarIcon: ({focused}) => {
                        const Icon = Icons.Diary
                        return <Icon color={focused ? Colors.highlight : Colors.secondary} size={focused ? 48 : 36} />
                    }}} />

            </Tab.Navigator>
    )
}