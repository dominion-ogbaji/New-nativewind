import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';



const foods = [
    {
        title: "lasngnia",
        description: "Junk food and your health '\n'With your Kitchen  ",
        price: "$13.34",
        image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },

    {
        title: "suya",
        description: "Junk food and your health '\n'With your Kitchen",
        price: "$13.34",
        image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },

    {
        title: "lasngnia",
        description: "Junk food and your health'\n'With your Kitchen",
        price: "$13.34",
        image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    
    {
        title: "lasngnia",
        description: "Junk food and your health '\n'With your Kitchen",
        price: "$13.34",
        image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },

    {
        title: "lasngnia",
        description: "Junk food and your health '\n'With your Kitchen ",
        price: "$13.34",
        image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
];


const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});


export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
           
            {foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItemStyle}>
                <FoodInfo food={foods[0]} />
                <FoodImage food={foods[0]}  />
                </View>
                <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
            </View>
            
        ))}
    </ScrollView>
   );
}


const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props ) => (
    <View>
      <Image
        source={{ uri: props.food.image_url }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: -20,
        }}
      />
    </View>
  );