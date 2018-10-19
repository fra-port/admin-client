import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { Container, Header, Content, Icon, DatePicker, Text } from 'native-base'
import CardReport from '../components/reportCard'
import { connect } from 'react-redux'
import { getAllReports } from '../store/reports/reports.action'

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
    resizeMode: 'contain'
  }
});

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = { chosenDate: new Date() }
    this.setDate = this.setDate.bind(this)
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Report',
    headerStyle: {
      backgroundColor: '#58B9FE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      width: '90%',
    },
    headerLeft: (
      <Image
        source={require('../assets/omzet-logo.png')}
        style={styles.image}
      />
    ),
    headerRight: (
      <Icon style={{ color: "white", marginRight: 20 }} name='more' />
    )
  });

  render() {
    return (
      <Container>
        <Content padder>

          <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#0f0505" }}
            onDateChange={this.setDate}
          />
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>

          <CardReport navigation={this.props.navigation} date={this.state.chosenDate.toLocaleDateString()}></CardReport>
        </Content>
      </Container>
    )
  }
}


export default (Report)