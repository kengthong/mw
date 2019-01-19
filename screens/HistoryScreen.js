import React from 'react';

export default class HistoryScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <HistoryScreenComponent />
            </ScrollView>
          </View>
        );
      }
    <SectionList
    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
    renderSectionHeader={({section: {title}}) => (
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
    )}
    sections={[
        {title: 'Title1', data: ['item1', 'item2']},
        {title: 'Title2', data: ['item3', 'item4']},
        {title: 'Title3', data: ['item5', 'item6']},
    ]}
    keyExtractor={(item, index) => item + index}
    />
