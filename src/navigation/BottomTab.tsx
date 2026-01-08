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
                tabBarStyle: {
                    backgroundColor: Colors.primary,
                    borderTopColor: Colors.highlight
                },
                tabBarActiveTintColor: Colors.highlight,
                tabBarInactiveTintColor: Colors.secondary
            }}>
                <Tab.Screen 
                    name='Character'
                    component={CharSheet}
                    options={{tabBarIcon: ({color, size}) => {
                        const Icon = Icons.Char
                        return <Icon color={color} size={size} />
                    }}} />
                <Tab.Screen
                    name='Inventory'
                    component={Inventory}
                    options={{tabBarIcon: ({color, size}) => {
                        const Icon = Icons.Inventory
                        return <Icon color={color} size={size} />
                    }}} />
                <Tab.Screen
                    name='Roll'
                    component={Roll}
                    options={{tabBarIcon: ({color, size}) => {
                        const Icon = Icons.d20
                        return <Icon stroke={color} width={size} height={size} />
                    }}} />
                <Tab.Screen
                    name='Talents'
                    component={Talents}
                    options={{tabBarIcon: ({color, size}) => {
                        const Icon = Icons.ST
                        return <Icon color={color} size={size} />
                    }}} />
                <Tab.Screen
                    name='Diary'
                    component={Journal}
                    options={{tabBarIcon: ({color, size}) => {
                        const Icon = Icons.Diary
                        return <Icon color={color} size={size} />
                    }}} />

            </Tab.Navigator>
    )
}