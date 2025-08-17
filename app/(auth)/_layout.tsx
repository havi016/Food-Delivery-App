import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {Slot} from "expo-router";

export default function _Layout() {
    return (
        <SafeAreaView>
            <Text>Auth_Layout</Text>
            <Slot />
        </SafeAreaView>
    )
}
