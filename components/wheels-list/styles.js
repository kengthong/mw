import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    locationRowContainer: {
        flexDirection: 'column',
        height: 80
    },
    locationRowSepContainer: {
        height: 40,
        padding: 4,
        backgroundColor: '#e8e8e8'
    },
    modalChoiceContainer:{
        height: 60,
        width: 240,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalChoiceText:{
        fontSize: 20,
        opacity: 0.85
    }, 
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 4
    },  
    modalWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    wheelsRowContainer: {
        height: 40,
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
});

export default styles;