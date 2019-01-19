import React from 'react';
import {
    SectionList,
    ListView,
    View,
    Text
} from 'react-native';
import HeaderBar from './header-bar';
import data from './data';

import styles from './styles';

class WheelsListComponent extends React.Component {
    render() {
        return (
            <View>
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
                                        <Text>
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
                                                        <Text>
                                                            {wheelObj.name}
                                                        </Text>
                                                    </View>
                                                )
                                            }}
                                        />
                                    </View>
                                </View>
                            )
                        }}
                    />
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