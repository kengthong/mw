import React from 'react';
import { ScrollView, StyleSheet, CheckBox, SectionList, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import data from '../mealSelection.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <SectionList
        renderItem={({item, index, section}) =>
          <View style={{flexDirection:'row', marginLeft: 20}}>
            <CheckBox
              value={item.Active}
              onValueChange={() => {
                let stallIndex = this.state.canteen.data.map(function(stall) {return stall.title;}).indexOf(section.title);
                console.log(stallIndex);
                console.log(section.title);
                let canteen = {
                  ...this.state.canteen,
                  data: this.state.canteen.data.map( (stall, i) => {
                    if(i == stallIndex) {
                      return {
                        ...stall,
                        data: stall.data.map( (foodItem, _i) => {
                          if(_i == index) {
                            console.log('foodItem =', foodItem)
                            console.log('active? =', item.Active)
                            return {
                              ...foodItem,
                              Active: !item.Active
                            }
                          } else {
                            return  foodItem
                          }
                        })
                      }
                    } else {
                      return stall
                    }
                  })
                }

                this.setState({
                  canteen: canteen
                })

                console.log('canteeen = ', canteen)
              }}
            />
            <Text style={{marginTop: 5}}>{item.Name}</Text>
          </View>
        }
        renderSectionHeader={({section: {title}}) => (
          <View style={{flexDirection:'row', backgroundColor: 'rgba(247,247,247,1.0)'}}>
            <CheckBox/>
            <Text style={{marginTop: 5, fontWeight:'bold'}}>{title}</Text>
          </View>
          /*<View style={{flexDirection:'row', backgroundColor: 'rgba(247,247,247,1.0)'}}>
            <CheckBox
              value={
                item.Active
              }
              onValueChange={() => {
                let stallIndex = this.state.canteen.data.map(function(stall) {return stall.title;}).indexOf(section.title);
                console.log(stallIndex);
                console.log(section.title);
                let canteen = {
                  ...this.state.canteen,
                  data: this.state.canteen.data.map( (stall, i) => {
                    if(i == stallIndex) {
                      return {
                        ...stall,
                        data: stall.data.map( (foodItem, _i) => {
                          if(_i == index) {
                            console.log('foodItem =', foodItem)
                            console.log('active? =', item.Active)
                            return {
                              ...foodItem,
                              Active: !item.Active
                            }
                          } else {
                            return  foodItem
                          }
                        })
                      }
                    } else {
                      return stall
                    }
                  })
                }

                this.setState({
                  canteen: canteen
                })

                console.log('canteeen = ', canteen)
              }}
            />
            <Text style={{marginTop: 5, fontWeight:'bold'}}>{title}</Text>
          </View>*/
        )}
        sections={this.state.canteen.data}
        keyExtractor={(item, index) => item + index}
      />
      </ScrollView>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      canteen: data[0]
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
});
