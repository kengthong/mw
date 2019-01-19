import React from 'react';
import {
    ListView,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
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
                                                    <TouchableHighlight 
                                                        onPress={(wheelObj) => this.toggleModal(wheelObj)}
                                                    >
                                                        <Text>
                                                            {wheelObj.name}
                                                        </Text>
                                                    </TouchableHighlight>
                                                )
                                            }}
                                        />
                                    </View>
                                </View>
                            )
                        }}
                    />
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
                            <TouchableWithoutFeedback >
                                <View style={{borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#e8e8e8'}, styles.modalChoiceContainer}>
                                    <Text style={{fontSize: 22}}>
                                        Action
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('load', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Load</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('load', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Edit</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor="rgba(0,0,0,0.3)"
                                style={styles.modalChoiceContainer}
                                onPress={() => this.handleSelectChoice('load', selectedWheel)}>
                                <Text style={styles.modalChoiceText}>Delete</Text>
                            </TouchableHighlight>
                        </View>
                    </TouchableOpacity>
                </Modal>
            )
        }
    }

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data),
          modalActive: false,
          selectedWheel: {}
        };
    }

    handlePickerChange = () =>{
        
    }

    toggleModal = (wheelObj) => {
        this.setState({
            modalActive: !this.state.modalActive,
            selectedWheel: wheelObj
        })
    }

    // LocationList = () => {
    //     return (
            
    //     )
    // }
}
export default WheelsListComponent;