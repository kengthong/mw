import React from 'react';
import {
    ListView,
    Image,
    Dimensions,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import {Card} from 'react-native-elements';
import HeaderBar from './header-bar';
import data from './data';

import styles from './styles';

class WheelsListComponent extends React.Component {
    render() {
        console.log("this.props =" , this.props)

        let data = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.state.data)
        return (
            <View style={{height: '100%'}}>
                <HeaderBar />
                
                <View>
                    <ListView
                        // style={{height: '100%'}}
                        dataSource={data}
                        renderRow={(rowData) => {
                            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(rowData.data)
                            return (
                                <View style={styles.locationRowContainer}>
                                    <View style={styles.locationRowSepContainer}>
                                        <Text style={{fontWeight: '300', fontSize: 15, lineHeight: 30}}>
                                            {rowData.title}
                                        </Text>
                                    </View>
                                    <View style={styles.wheelsRowContainer}>

                                        {rowData.data.map( (wheelObj, index) => {
                                            return (
                                                <TouchableHighlight 
                                                    key={index}
                                                    onPress={(wheelObj) => this.toggleModal(wheelObj)}
                                                    underlayColor="rgba(183,211,247,0.3)"
                                                >
                                                    <Card>
                                                        <View style={{width: 70 , height: 70, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow:'hidden' }}>
                                                            <Image source={require('../../assets/images/wheel.png')} style={{height: 50, width: 50}}/>
                                                            <View style={{height: 20}}>
                                                                <Text style={{fontSize: 15, justifyContent:"center", textAlign: 'center'}}>
                                                                    {wheelObj.name}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </Card>
                                                </TouchableHighlight>
                                            )
                                        })}
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

                {this.renderModal()}
            </View>
        )
    }

    renderModal = () => {
        let selectedWheel = this.state.selectedWheel;
        if(this.state.modalActive) { 
            return (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalActive}
                    onRequestClose={() => this.toggleModal()}>
                    <TouchableOpacity 
                        style={styles.modalWrapper}
                        onPress={() => this.toggleModal()}>
                        <View style={styles.modalContainer}>
                            {/* <TouchableWithoutFeedback >
                                <View style={{borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#e8e8e8'}, styles.modalChoiceContainer}>
                                    <Text style={{fontSize: 22}}>
                                        Action
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback> */}
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('load', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Load</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('edit', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Edit</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('delete', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Delete</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('share', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Share</Text>
                            </TouchableHighlight>
                        </View>
                    </TouchableOpacity>
                </Modal>
            )
        }
    }

    constructor() {
        super();
        this.state = {
          data,
          modalActive: false,
          selectedWheel: {}
        };
    }

    handlePickerChange = () =>{
        
    }

    handleSelectChoice = (action, wheelObj) => {
        console.log('wheelobj=', action)
        switch(action) {
            case 'load':
                this.toggleModal()
                this.props.navigate('WheelHome', wheelObj)
            case 'edit':
                this.toggleModal()
                this.props.push('Links', wheelObj)
            default:
                console.log('nothing =', action)
        }
    }

    toggleModal = (wheelObj) => {
        this.setState({
            modalActive: !this.state.modalActive,
            selectedWheel: wheelObj
        })

        return
    }

    // LocationList = () => {
    //     return (
            
    //     )
    // }
}
export default connect(
    state => ({
        roulette: state.roulette
    })
)(WheelsListComponent);