import React, { Component } from 'react';
import {
  Divider,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoDivider extends Component {
  static navigationOptions = {
    title: 'Divider',
  };

  renderHeader() {
    return (
      <View
        style={{
          width: 300,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Divider />
      </View>
    );
  }

  renderContent() {
    return (
      <View>
        <Title>Variations</Title>
        <View>
          <Subtitle>Orientation</Subtitle>
          <View
            style={{
              height: 200,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Divider orientation="horizontal" />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Divider orientation="vertical" />
            </View>
          </View>
          <Subtitle>Label</Subtitle>
          <View
            style={{
              height: 200,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Divider orientation="horizontal" label="OR" />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Divider orientation="vertical">OR</Divider>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoDivider;
