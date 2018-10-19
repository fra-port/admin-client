import React, { Component } from 'react';
import { Container } from 'native-base';
import {Image, StyleSheet, View, ProgressBarAndroid, Text, FlatList} from 'react-native'
import AgentHeaderRight from '../components/AgentHeaderRight'
import AgentThumbnail from '../components/AgentThumbnail'
import {getAllAgent} from '../store/fetchAgent/action'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return{
    agent: state.agentReducer
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    getAllAgent: () => {
      dispatch(getAllAgent())
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
    resizeMode: 'contain'
  }
});

class Agent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Agent',
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
      <AgentHeaderRight navigation={navigation}/>
    )
  });

  componentDidMount = () => {
    this.props.getAllAgent()
  }

  render() {
    return (
      <Container>
        {this.props.agent.isLoading && <ProgressBarAndroid color="#58B9FE" />}
        <View style={{padding: 3}}>
          {this.props.agent.allAgent.length > 0 && 
            <FlatList
              data={this.props.agent.allAgent}
              renderItem= {({item, index}) => <AgentThumbnail agent={item} navigation={this.props.navigation}/>}
              keyExtractor= {(item) => item._id}
            />
          }
        </View>
      </Container>
    );
  }
}



export default connect(mapStateToProps, mapDistpatchToProps) (Agent)