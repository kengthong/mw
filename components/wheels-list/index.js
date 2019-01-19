import React from 'react';
import {
    SectionList,
    ListView,
    Image,
    View,
    Text
} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderBar from './header-bar';
import data from './data';

import styles from './styles';

class WheelsListComponent extends React.Component {
    render() {
        return (
            <View style={{height: '100%'}}>
                <HeaderBar />
                {console.log('data =', data)}
                
                <View style={{height: '80%'}}>
                    <ListView
                        style={{height: '100%'}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => {
                            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(rowData.data)
                            return (
                                <View style={styles.locationRowContainer}>
                                    <View style={styles.locationRowSepContainer}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15, lineHeight: 30}}>
                                            {rowData.title}
                                        </Text>
                                    </View>
                                    <View style={styles.wheelsRowContainer}>
                                        <ListView
                                            dataSource={ds}
                                            horizontal={true}
                                            renderRow={(wheelObj) => {
                                                return (
                                                    <View>
                                                        <Card>
                                                            <View style={{width: 70 , height: 70, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Image source={require('../../assets/images/wheel.png')} style={{height: 60, width: 60}}/>
                                                                <View style={{height: 15}}>
                                                                    <Text style={{fontSize: 15, justifyContent:"center", textAlign: 'center'}}>
                                                                        {wheelObj.name}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                        </Card>
                                                    </View>
                                                )
                                            }}
                                        />
                                    </View>
                                </View>
                            )
                        }}
                    />

                    <View>
                    
                        {/* <Card
                            cardStyle={{width: 50, height: 50, backgroundColor: 'powderblue'}} 
                            title='HELLO WORLD'
                            // image={{uri: '../../assets/images/roulette (2).png'}}
                            imageStyle={{height: 40, width: 40}}>
                            <Image source={require('../../assets/images/roulette.png')}
                            style={{width: 100, height: 100}} />
                            <Text style={{marginBottom: 10, justifyContent:"center"}}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        </Card> */}
                    </View>
                    
                </View>
                {/* <SectionList
                    renderItem={({item, index, section}) => 
                        <View index={index}>
                            <Text>{item.name}</Text>
                        </View>
                    }
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                /> */}

                {/* <List>
                    <ListItem itemDivider>
                        <Text>A</Text>
                    </ListItem>                    
                    <ListItem>
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ali Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                </List> */}
            </View>
        )
    }

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data),
        };
      }

    // LocationList = () => {
    //     return (
            
    //     )
    // }
}
export default WheelsListComponent;