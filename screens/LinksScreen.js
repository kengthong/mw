import React from 'react';
import { ScrollView, StyleSheet, CheckBox, SectionList, Text, View, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import data from '../mealSelection.js';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import { saveWheel } from '../redux/action'

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  componentDidMount() {
    const {navigation} = this.props;
    const wheel = navigation.getParam('wheelObj', null);
    if (wheel) {
      // console.log("link wheeObj is= ", wheelObj);
      const location = wheel.location;
      console.log("HELLLLO", wheel.wheelObj);
      let tempMeals = this.state.meals;
      let locationIndex = tempMeals.map(function(l) {return l.value;}).indexOf(location);
      wheel.wheelObj.data.forEach(stallObj => {
        stallObj.items.forEach(foodItem => {
          let stallIndex = tempMeals[locationIndex].data.map(function(stall) {return stall.title;}).indexOf(stallObj.stall);
          console.log("...............................................")
          //console.log(tempMeals[locationIndex].data[stallIndex])
          let foodItemIndex = tempMeals[locationIndex].data[stallIndex].data.map(function(item) {return item.Name;}).indexOf(foodItem.name);
          //let boolean = tempMeals[locationIndex].data[stallIndex].data[foodItemIndex].Active;
          console.log(tempMeals[locationIndex].data[stallIndex].data)
          console.log(foodItem)
          tempMeals[locationIndex].data[stallIndex].data[foodItemIndex].Active = true;
          /*console.log("stallIndex=",stallIndex);
          console.log("foodItemIndex=", foodItemIndex);
          console.log("boolean=", boolean);*/
        })
      })
      console.log('---------------------------------------')
      console.log(tempMeals);
      this.setState({meals: tempMeals, wheelName: wheel.wheelObj.name});
      this.setState({locationIndex:locationIndex});
    }
  }

  /*componentWillUnmount() {
    console.log("______________________________unmount")
    this.setState({meals: data});
  }*/
  render() {
    console.log(this.state.meals[this.state.locationIndex].value)
    return (
      <ScrollView style={styles.container}>
      <Dropdown
        label='Canteen'
        value = {this.state.meals[this.state.locationIndex].value}
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
                <CheckBox
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
                />
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
              onPress={()=>this.handleSave()}
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
      locationIndex: 0,
      wheelName: ''

    }
  }

  handleSave = () => {
    console.log('locationIndex=', this.state.locationIndex)
    let { meals, locationIndex } = this.state;
    let selectedLocation = meals[locationIndex];

    let selectedFood = selectedLocation.data.map( stall => {
      return {
        stall: stall.title,
        items: stall.data.map( food => {
          return {
            name: food.Name,
            pic: food.Image
          }
        })
      }
    })
    let selectedWheel = {
      title: selectedLocation.value,
      wheelObj: {
        name: this.state.wheelName,
        data: selectedFood
      }
    }
    
    // this.props.saveWheel(selectedWheel)
    this.props.navigation.pop()
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    saveWheel: (wheel) => dispatch(saveWheel(wheel))
  })
)(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
});
