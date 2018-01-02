/**
 * Created by richie on 31/12/17.
 */

import React, {Component}from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import styles from '../../../resources/styles/Nav1StyleSheet';

export default class GenericComponent extends Component{

    render (){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.title}>{this.props.titleName}</Text>
                {this.props.content}
                </View>
            </View>
        );
    }
}

