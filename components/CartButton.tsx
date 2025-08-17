import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {images} from "@/constants";

const CartButton = () => {
    const totalItems = 10;
    return (
        <TouchableOpacity className={"cart-button"} onPress={() => {}}>
            <Image source= {require("../assets/icons/bag.png")} className="size-10 " resizeMode = "contain" />
            {totalItems > 0 && (
                <View className="cart-badge">
                    <Text className={"small-bold text-white"}> {totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}
export default CartButton

