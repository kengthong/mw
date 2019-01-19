import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

import styles from './styles';

class HeaderBar extends React.Component {
    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.labelContainer}>
                    <Text>
                        HeaderBar
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="add"
                    />
                </View>
            </View>
        )
    }
}

export default HeaderBar;