import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MenuBurger from '../components/MenuBurguer';
import PerfilButton from '../components/PerfilButton';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                <MenuBurger
                    onPress={() => { }}
                    menuColor='#000'
                    size={45}
                ></MenuBurger>
                <PerfilButton
                    onPress={() => { }}
                    position={{ top: 20, right: 20 }}
                    size={45}
                    backgroundColor='gray'
                ></PerfilButton>
            </View>
            <View style={{ paddingTop: 30 }}>
                <Text style={styles.greetingUser}>Welcome, User!</Text>
                <View style={styles.options}>
                    <TouchableOpacity>
                        <Text style={styles.optionsText}>Agendar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.optionsText}>Agendamentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.optionsText}>Pontos</Text>
                    </TouchableOpacity>
                </View>                
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    options: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 30,
    },
    optionsText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    greetingUser: {
        fontSize: 20,
        marginTop: 40,
        textAlign: 'left',
        alignSelf: 'flex-start',
        margin: 20,
    },
    bottomBar: {
        
    },
});


