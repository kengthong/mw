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
                        // onPress={onPressLearnMore}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        )
    }
}

export default HeaderBar;