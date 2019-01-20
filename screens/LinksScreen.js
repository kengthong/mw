import React from 'react';
import { ScrollView, StyleSheet, CheckBox, SectionList, Text, View, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import data from '../mealSelection.js';
import { Dropdown } from 'react-native-material-dropdown';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    const {navigation} = this.props;
    const wheelObj = navigation.getParam('wheelObj');
    // console.log("link wheeObj is= ", wheelObj);

    return (
      <ScrollView style={styles.container}>
      <Dropdown
        label='Canteen'
        data={this.state.meals.map(location =>{
          return {'value':location["value"]}
        })}
        onChangeText={value => {
          this.setState({locationIndex: this.state.meals.map(function(location) {return location.value;}).indexOf(value)})}
        }
      />
      {this.state.locationIndex !== -1 ?
        <View>
          <SectionList
            renderItem={({item, index, section}) =>
              <View style={{flexDirection:'row', marginLeft: 20}}>
                /*<CheckBox
                  value={item.Active}
                  onValueChange={() => {
                    let locationName = this.state.meals[this.state.locationIndex].value
                    let stallIndex = this.state.meals[this.state.locationIndex].data.map(function(stall) {return stall.title;}).indexOf(section.title);
                    //console.log(stallIndex);
                    //console.log(section.title);
                    //console.log(locationName)
                    let meals =
                      this.state.meals.map( (canteen) => {
                        if (canteen.value == locationName) {
                          return {
                            ...canteen,
                            data: canteen.data.map( (stall, i) => {
                              if(i == stallIndex) {
                                return {
                                  ...stall,
                                  data: stall.data.map( (foodItem, _i) => {
                                    if(_i == index) {
                                      console.log('foodItem =', foodItem)
                                      //console.log('active? =', item.Active)
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
                        } else {
                          return canteen
                        }
                    })

                    this.setState({
                      meals: meals
                    })

                    //console.log('canteeen = ', meals)
                  }}
                />*/
                <Text style={{marginTop: 5}}>{item.Name}</Text>
              </View>
            }
            renderSectionHeader={({section: {title}}) => (
              <View style={{flexDirection:'row', backgroundColor: 'rgba(247,247,247,1.0)'}}>
                <Text style={{marginTop: 5, marginLeft:5, fontWeight:'bold'}}>{title}</Text>
              </View>
            )}
            sections={this.state.meals[this.state.locationIndex].data}
            keyExtractor={(item, index) => item + index}
          />
          <View style={{marginVertical: 10}}>
            <Button
              title="Save"
              onPress={()=>console.log("Save")}
            />
          </View>
        </View> : null
      }
      </ScrollView>

    );
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      meals: data,
      locationIndex: -1

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
});
