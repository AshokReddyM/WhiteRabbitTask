import React from 'react'
import { View, Text, ImageBackground, StatusBar,StyleSheet,Dimensions,ScrollView,Alert,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Neomorph } from 'react-native-neomorph-shadows'


export const AuthParent = ({children}) => {
    return(
        <View style={{flex:1}}>
        <StatusBar translucent={true} hidden={false} backgroundColor="transparent" barStyle="dark-content"/> 
       
       <ImageBackground
           style={[styles.fixed, styles.Imagecontainter]}
           source={require('../Images/homebg.png')}
       />
       <ImageBackground
           style={[styles.fixed, styles.ImageLogocontainter]}
           source={require('../Images/AuthLogo.png')}
       />
       <ScrollView>
           {children}
       </ScrollView>
       </View>
       
    )
}

export const AuthChildContainer = ({title,subtitle,style,children}) => {
  return(
    <View
          style={[styles.chlidcontainer,style]}>
          <Text style={styles.headerText}>
             {title || 'Nothing Here' }
          </Text>

          <Text  style={styles.headersubText}>
             {subtitle || 'Nothing Here'}
          </Text>
          {children}
    </View>
  )
}

export const AuthButton = ({title,onPress})=>{
  return(
    
    <LinearGradient colors={['#FC892A', '#EC462C' ]} style={styles.buttongradient}>
      <TouchableOpacity style={{flex:1,justifyContent: 'center'}}  onPress={() => onPress ? onPress() : Alert.alert('Simple Button pressed')} activeOpacity={0.7}>
        <Text  style={{ fontSize: 20,color: '#FFFFFF',}}>
            {title || 'BLANK'}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export const AuthInputContainer = ({children}) => {
  return(
    <Neomorph
      // inner // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      style={styles.authinputcontainer}
      >
        {children}
    </Neomorph>

  )
}

const styles = StyleSheet.create({
    Imagecontainter: {
      width: Dimensions.get("window").width, //for full screen
      height: Dimensions.get("window").height + 100 //for full screen
    },
    ImageLogocontainter: {
      // width: Dimensions.get("window").width, //for full screen
      // height: Dimensions.get("window").height//for full screen
      width: 108,
      height: 90,
      margin: 130,
      marginTop: 220,
    },
    fixed: {
      position: "absolute",
      top: -40,
      left: 0,
      right: 0,
      bottom: 0
    },
   scrollview: {
     backgroundColor: 'transparent'
   },
  chlidcontainer:{
    shadowRadius: 50,
    // borderRadius: 50,
    // border: 3,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 30,
    padding: 25,
    shadowColor: '#00000029',
    backgroundColor: '#E9EEF0',
    height: 503,
    marginTop: 400,
    marginBottom: 0,
  },
  headerText : {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 20,
    marginBottom: 0,
    margin: -5,
    color: '#171717',
    },
   headersubText : {
    fontSize: 14,
    padding: 5,
    },
   buttongradient :
   {
      width: 320,
      height: 47,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 25,
  },
   authinputcontainer : {
      shadowOffset: {width: 5, height: 5},
      shadowRadius: 10,
      borderRadius: 50,
      backgroundColor: '#E9EEF0',
      shadowColor: '#00000029',
      width: 320,
      height: 47,
      marginTop: 25,
      paddingHorizontal:22,
      flexDirection:'row',
      alignItems:'center'
   }
  });