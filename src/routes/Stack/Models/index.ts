import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propNavigationStack = {
    Home: undefined
    Login: {
        name?: string
    }
}

export type propStack = NativeStackNavigationProp<propNavigationStack>