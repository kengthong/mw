import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    List,
    ListItem
} from 'native-base';
import HeaderBar from './header-bar';

class WheelsListComponent extends React.Component {
    render() {
        return (
            <View>
                <HeaderBar />

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
}
export default WheelsListComponent;