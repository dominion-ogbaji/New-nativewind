import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantItems, { localRestaurants } from "../components/Home/RestaurantItems";
import { useState } from "react";
import { Divider } from 'react-native-elements';
import BottomTabs from "../components/Home/BottomTabs";



export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);




  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 0, paddingBottom:244 }} >
      <View style={{ backgroundColor: "white", padding: 15, marginTop:40, paddingBottom: 15 }}>
        <HeaderTabs/>
        <SearchBar />
      </View>
      <ScrollView  showsVerticalScrollIndicator>
        <Categories/>
        <RestaurantItems RestaurantData = {stores} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}