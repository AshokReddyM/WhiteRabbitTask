import React from 'react'
import { View, Text, ImageBackground, StatusBar,StyleSheet,Dimensions,ScrollView,Alert,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Neomorph } from 'react-native-neomorph-shadows'
import Icon from 'react-native-vector-icons/FontAwesome';


export const DashHeader = ({headertitle,subtitle,style,children}) => {

    return(
      <View>

                <View 
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'red',
                            height: 86,
                        }}        
                    >
                        
                </View>

            {children}
      </View>
    )
  }


const styles = StyleSheet.create({

})