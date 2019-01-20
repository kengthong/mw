import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import RouletteItem from '../components/RouletteItem';

import Roulette from 'react-native-roulette';
const MIN_SPIN_AMOUNT = 3
const MAX_SPIN_AMOUNT = 5
const FULL_CIRCLE_ANGLE = 360

const STARTING_POINTS = [
  0,
  150,
  120,
  -80,
  310,
  60,
];

function getLandingIndex(ref) {
  length = ref.state.foodList.length;
  startingPoint = STARTING_POINTS[length];
  rotation = ref.state.rotation;
  adjustedRotation = (rotation - startingPoint) % FULL_CIRCLE_ANGLE;
  temp = (FULL_CIRCLE_ANGLE - adjustedRotation);
  console.log(rotation)
  console.log(temp)
  return Math.floor(temp / (FULL_CIRCLE_ANGLE / length));
}

function rotateRoulette(ref) {
  let rotationLeft = ref.state.rotationDest - ref.state.rotation;
  let diff = rotationLeft / 50;
  console.log(diff)
  if (diff < 1) {
    clearInterval(ref.state.intervalID)
    alert("Congrats. Your meal will be " + ref.state.foodList[getLandingIndex(ref)].name)
  }
  else
    ref.setState({rotation: ref.state.rotation + diff})
}

function getRandomIndex(length) {
  return Math.floor(Math.random() *length)
}

function getRandomSpinCount() {
  return Math.floor(MIN_SPIN_AMOUNT + getRandomIndex(MAX_SPIN_AMOUNT - MIN_SPIN_AMOUNT))
}

function getAnswerAngle(ref, resultIndex) {
  return getAdjustedRotation(ref, FULL_CIRCLE_ANGLE / ref.state.foodList.length * resultIndex);
}

function getAdjustedRotation(ref, rotation) {
  return rotation - STARTING_POINTS[ref.state.foodList.length]
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    // TODO: Add props and default wheel from config
    ramen = {
      name: "Ramen",
      pic: require("../assets/images/food/noodles.png")
    }
    soba = {
      name: "Salad",
      pic: require("../assets/images/food/salad.png")
    }
    chickenRice = {
      name: "Chicken Rice",
      pic: require("../assets/images/food/rice.png")
    }
/*     sandwich = {
      name: "Sandwich",
      pic: require("../assets/images/food/sandwich.png")
    } */

    
    this.state = {
      foodList: [
        ramen, soba, chickenRice
      ],
      rotation: 0,
      rotationDest: 0,
      intervalID: null,
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.rouletteContainer}>
          <Image source={require('../assets/images/pointer.png')}></Image>
          <Roulette customStyle={{backgroundColor:"#ffffff"}} radius={400} rouletteRotate={this.state.rotation} onRotate={(props) => console.log(props)} onPress={()=>console.log("HI")}>
          {this.state.foodList.map(function(food, i){
            return <RouletteItem
              key={i}
              ref="icon"
              logo={food.pic}
              title={food.name}
              onPress={()=>console.log("Pressed")}
            />;
          })}        
          </Roulette>
        </View>
          <View style={styles.getStartedContainer}>
            <View style={styles.horizontalContainer}>
              <View style={styles.buttonContainer}>
                <Button
                  title="Create"
                  onPress={
                    () => this.props.navigation.navigate(
                      'Links', {"lala": "lala"}
                    )
                  }
                />
              </View>

              <View style={styles.buttonContainer2}>
                <Button
                  title="Spin"
                  onPress={
                    () => {
                      this.setState({rotation: 0})
                      spinCount = getRandomSpinCount();
                      resultIndex = getRandomIndex(this.state.foodList.length);
                      rotationDest = FULL_CIRCLE_ANGLE * spinCount + getAnswerAngle(this, resultIndex);
                      this.setState({rotationDest: rotationDest})
                      this.setState({intervalID: setInterval(()=>rotateRoulette(this))});
                    }
                  }                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title="Select"
                  onPress={
                    () => this.props.navigation.navigate(
                      'WheelsList', {"lala": "lala"}
                    )
                  }                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rouletteContainer: {
    flexDirection: "column",
    alignItems:'center',
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainer2: {
    flex: 2,
    marginHorizontal:15,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 40,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
