import React from 'react'
import { Dimensions, StatusBar, StyleSheet,Image , Text, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile(props) {
    const {navigation,route} = props
    const {item} = route.params
    return (
    <View style={{width:'100%',height:'100%',backgroundColor:"#E9EEF0"}}>
    <ScrollView>
    <StatusBar translucent={true} hidden={false}  backgroundColor="#2196f3" barStyle="light-content" />
            <View style={{ flexDirection: 'row', backgroundColor: '#00b0ff', height: 86, }} >
                <Icon onPress={() => navigation.goBack()} name="chevron-left" size={25} color="#fff" style={{ width:55,height:45,margin: 10, marginTop: 35,padding:10}} />
                <Text style={{ margin: 0, marginTop: 45, fontSize: 18, color:"#ffffff"}} >
                    Profile
                </Text>
            </View>
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

                <View style={{margin: 7, padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold',}}>City</Text>
                    <Text style={{fontSize: 14}}>{item?.city || 'N/A'}</Text>
                </View>

              
                    

          
      </Neomorph>
  
    )
  }


const styles = StyleSheet.create({
    container : {
        borderRadius: 5,
        backgroundColor: '#E9EEF0',
        width: Dimensions.get("window").width,
        height: 600,
        paddingHorizontal:22,
     }
})