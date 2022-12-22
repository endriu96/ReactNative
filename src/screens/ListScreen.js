import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ListScreen = () =>{
    const friends =[
        { name: 'Friend #1', age: 20},
        { name: 'Friend #2', age: 35},
        { name: 'Friend #3', age: 23},
        { name: 'Friend #4', age: 39},
        { name: 'Friend #5', age: 55},
        { name: 'Friend #6', age: 25},
    ];

    return (
    <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({item})=>{
            return <Text style={styles.testStyle}>{item.name}-{item.age}</Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    testStyle:{
        marginVertical: 10

    }
});

export default ListScreen;