/**
* @author: Roger Henrique <rogerhenrique.souza@hotmail.com>
* @description Topo da Pagina Principal
*/
import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,

} from 'react-native';

import { Icon } from 'react-native-elements'

const { maxWidth, maxHeigth } = Dimensions.get('window')

class TopoPrincipal extends Component {

    render() {
        return (
            <View>

                <View style={styles.Topo}>
                    <View style={styles.IconMenu}>
                        <Icon name={'dehaze'} color={'#FFF'} width={50} height={60} size={50} onPress={() => { alert('press icon') }}></Icon>
                    </View>
                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    Topo: {
        width: maxWidth,
        height: 100,
        backgroundColor: '#f5620a',
        justifyContent: 'flex-start',
    },
    IconMenu: {
        marginRight: 350,
        marginTop: 20,
    }

})

export default TopoPrincipal

