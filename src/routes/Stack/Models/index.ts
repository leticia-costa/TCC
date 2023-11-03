import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propNavigationStack = {
    Home: undefined
    Login: {
        name?: string
    }
    Reminders: undefined
}

export type propStack = NativeStackNavigationProp<propNavigationStack>