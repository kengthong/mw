import React from 'react';
import { ScrollView, StyleSheet, SectionList, Text, View } from 'react-native';

const data =[
    {
        title: '19 Jan 2019',
        data: [
            {
                title: 'The Terrace',
                data: ['Spicy Marinated Chicken', 
                        'Teriyaki Chicken Rice',
                        'Grilled Fish and Pasta']
            },
            {
                title: 'The Deck',
                data:['Hainanese Chicken Rice', 
                'Lemon Chicken Rice Set']
            }                    
        ]
    },
    {
        title: '18 Jan 2019',
        data:[
            {
                title: 'The Terrace',
                data: ['Kimchi Fried Rice', 
                'Teriyaki Salmon Rice']
            }
        ]
    }
]

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionList
            renderItem={({item, index, section}) => {
                console.log("item =", item)
                return (
                    <View>
                        <View>
                            <Text style={{fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold'}}>
                                {item.title}
                            </Text>
                        </View>
                        {item.data.map( (food, i) => {
                            return (
                                <View key={i}> 
                                    <Text style ={{lineHeight: 40, marginLeft: 10}}>
                                        {food}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                )
            }}
            renderSectionHeader={({section: {title}}) => 
                <View style= {{flexDirection:'row', backgroundColor: '#add6f7', height: 30, alignItems: 'center'}}> 
                    <Text style={{fontWeight: '300', lineHeight: 30, fontSize: 20, height: 40}}>{title}</Text>
                </View>
            }
            sections={data}
            keyExtractor={(item, index) => item + index}
        />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
});
