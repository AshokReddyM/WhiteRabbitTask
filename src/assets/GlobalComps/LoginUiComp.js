import React from 'react'
import { View, StatusBar,StyleSheet, ScrollView, Image } from 'react-native'


export const SocialLoginParent = ({children}) => {
    return(
        <View style={{flex:1}}>
            <StatusBar translucent={true} hidden={false} backgroundColor="transparent" barStyle="dark-content"/>

            <Image
                style={[styles.fixed, styles.Imagecontainter]}
                source={require('../Images/homebg.png')}
            />

            <Image
                    style={[styles.fixed, styles.ImageLogocontainter]}
                    source={require('../Images/AuthLogo.png')}
            />

            <ScrollView>
                {children}
            </ScrollView>
       </View>
       
    )
}

const styles = StyleSheet.create({
    Imagecontainter: {
        height: 630,
        width:"100%",
        position: 'absolute',
        // width: 528,
        // border: 5,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        // borderRadius: 50,
        // borderBottomWidth: 50
        // margin: -20,   
    },
    ImageLogocontainter: {
        width: 108,
        height: 90,
        margin: 130,
      },
  });