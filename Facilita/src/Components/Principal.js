/**
* @author: Roger Henrique <rogerhenrique.souza@hotmail.com>
* @description Pagina inicial app Facilita
*/
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

const { maxWidth, maxHeigth } = Dimensions.get('window')

import TopoPrincipal from './TopoPrincipal'

class Principal extends Component {

    render() {
        return (
            <View style={style.container}>
            <AppNavigator>s</AppNavigator>
                <TopoPrincipal></TopoPrincipal>
                <ScrollView scrollEventThrottle={16} style={{ height: maxHeigth }}>
                    <View style={style.barraBusca}>
                        <TextInput style={style.caixaBusca} placeholder={"pesquise Aqui"}>
                        </TextInput>
                    </View>
                    <View style={style.servicosMove}>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Mecânica</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Costura</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.servicosMove}>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Fotografia</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Informática</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.servicosMove}>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Pintura</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Elétrica</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.servicosMove}>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Construção</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.servicosBox}>
                                <Image source={require('../../imgs/imgPadrao.png')} style={style.Image}></Image>
                                <Text style={style.txtBox}>Domesticos</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>



        )
    }

}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: maxHeigth,
        flex: 3,
    },
    servicosMove: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    Image: {
        width: 150,
        height: 150,
    },
    servicosBox: {
        flexDirection: 'column',
        margin: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ff5733',
    },
    txtBox: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 8,
    },
    barraBusca: {
        backgroundColor: '#FFF',
        width: maxWidth,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaBusca: {
        height: 35,
        width: 330,
        borderWidth: 0.8,
        borderColor: '#ff5733',
        borderRadius: 25,
        justifyContent: 'center',
        padding: 10,
    },
    Bottom: {
        height: 200,
    }
})

export default Principal