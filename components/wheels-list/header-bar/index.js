import React from 'react';
import {
    Button,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
  
class HeaderBar extends React.Component {
    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.labelContainer}>
                    <Text style={{fontSize: 20}}>
                        Your list of wheels
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={this.onBooking} 
                        // style={styles.btnClickContain}
                        underlayColor='#042417'>
                        <View
                            // style={styles.btnContainer}
                            >
                            <Ionicons
                            name="md-add"
                            size={25}
                            color='#042'
                            // style={styles.btnIcon}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default HeaderBar;