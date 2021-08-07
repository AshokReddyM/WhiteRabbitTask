import React from 'react'
import { Dimensions, StatusBar, StyleSheet,Image , Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile(props) {
    const {navigation,route} = props
    const {item} = route.params
    return (
    <View>
    <ScrollView>
        <StatusBar translucent={true} hidden={false} backgroundColor="transparent" barStyle="dark-content"/>
            <View style={{ flexDirection: 'row', backgroundColor: '#E9EEF0', height: 86, }} >
                <Icon onPress={() => navigation.goBack()} name="chevron-left" size={30} color="#000" style={{ margin: 20, marginTop: 35, }} />
                <Text style={{ margin: 20, marginLeft: 80, marginTop: 35, fontSize: 18, }} >
                    Profile
                </Text>
            </View>
            {/* <Text style={{margin:2}}>{JSON.stringify(item)} </Text> */}

            <EmpDetails item={item} />

    </ScrollView>
    </View>
    )
}

export const EmpDetails = ({children,item}) => {
    const {address,company} = item
    const sourceImg = item?.profile_image ? {uri:item?.profile_image} : require('../assets/Images/search.png')
  
    return(
      <Neomorph
        // inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        style={styles.container}
        >
            <View style={{margin: 20, alignItems: 'center'}}>
                <Image
                    source={sourceImg}
                    style={{ height: 120, width: 120, borderRadius: 20,}}
                />
               
            </View>
               {/* {item ? 
                Object.keys()
                :
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>No Data For This Profile</Text>
                </View>
               } */}
                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>ID</Text>
                    <Text style={{fontSize: 14}}>{item?.id}</Text>
                </View>
                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>Name</Text>
                    <Text style={{fontSize: 14}}>{item?.name}</Text>
                </View>
                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>Username</Text>
                    <Text style={{fontSize: 14}}>{item?.username}</Text>
                </View>
                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>Email</Text>
                    <Text style={{fontSize: 14}}>{item?.email}</Text>
                </View>
                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>Phone Number</Text>
                    <Text style={{fontSize: 14}}>{item?.phone || ''}</Text>
                </View>
              
                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>Website</Text>
                    <Text style={{fontSize: 14}}>{item?.website || 'N/A'}</Text>
                </View>

                <Text style={{letterSpacing:1,margin:10,fontSize:12}}>
                    {address?.street + ' ' +address?.suit + ' ' + address?.city + ' ' +address?.zipcode}
                </Text>

                <Text style={{fontWeight:'bold',letterSpacing:1,margin:10,fontSize:12}}>
                    {(company?.name || '' )+ ' ' +(company?.catchphrase || '' )+ ' ' + company?.bs }
                </Text>
                    

          
      </Neomorph>
  
    )
  }


const styles = StyleSheet.create({
    container : {
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 10,
        borderRadius: 50,
        backgroundColor: '#E9EEF0',
        shadowColor: '#00000029',
        width: Dimensions.get("window").width,
        height: 600,
        marginTop: 25,
        paddingHorizontal:22,
     }
})