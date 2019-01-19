import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    locationRowContainer: {
        flexDirection: 'column',
        height: 200
    },
    locationRowSepContainer: {
        height: 40,
        padding: 4,
        backgroundColor: '#C5C4C4'
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
        height: 160,
        backgroundColor: '#FCFAFA'
    }               

});

export default styles;