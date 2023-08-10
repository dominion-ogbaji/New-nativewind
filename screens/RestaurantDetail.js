import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetails/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../components/RestaurantDetails/MenuItems'

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 330, marginTop:-10 }}>
      < MenuItems />
      </ScrollView>
    </View>
  )
}