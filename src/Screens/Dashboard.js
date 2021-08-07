import React,{useEffect, useState} from 'react'
import { Dimensions, StatusBar, StyleSheet,Image , Text, View, TouchableOpacity } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { getEmployees } from '../assets/Services/apiServices';

export default function Dashboard(props) {
    let {navigation} = props
    const [res,setRes] = useState(null)
    const [list,setList] = useState([])
    const [fetched,setFetched] = useState(false)
    useEffect(() => {
        getEmp();
    }, [])


    const getEmp = async() => {
        let response =  await getEmployees()
        if(response.success){
            
            setRes(response?.resData)
            setList(response?.resData)
        }
        setFetched(true)
    }

    const search = (text) => {
        let items = res?.filter(item =>{
            return (item.name.toLowerCase().indexOf(text.toLowerCase()) > -1 || 
            item.email.toLowerCase().indexOf(text.toLowerCase()) > -1)
        })
        setList(items)
    }
    return (
    <View>
    <ScrollView>
        <StatusBar translucent={true} hidden={false} backgroundColor="transparent" barStyle="dark-content"/>
            <View style={{ flexDirection: 'row', backgroundColor: '#E9EEF0', height: 86, }} >
                <Text style={{ margin: 20, marginTop: 40, fontSize: 18, }} >
                    Machine Test
                </Text>
            </View>
            <View style={{ width: Dimensions.get("window").width, flex: 1, alignItems: 'center', }}>

                <Search search={search} />

                {
                    fetched ? 
                    // list has been fetched . check for it
                    res?.length ?
                    // Show the employees list
                    list.map((item,id) => <ListItem navigation={navigation} item={item} key={id}/> )
                    //  <Text style={{margin:5}}> {JSON.stringify(res[0])} </Text> 
                    :
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',letterSpacing:1}}>NO EMPLOYEES</Text>
                    </View>

                    :
                    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',letterSpacing:1,textAlign:'center'}}>Loading ..... </Text>
                    </View>
                }
               
            </View>

    </ScrollView>
    </View>
    )
}

export const Search =({children,search}) => {
    const handleChange = text => {
        search(text)
    }
    return(
        <Neomorph
            swapShadows
            style={styles.searchcontainer}
        >
            <Image source={require('../assets/Images/search.png')} style={{height: 18,width: 18}}/>
            <TextInput onChangeText={handleChange} maxLength={10} style={{flex:1, marginLeft: 20}}  placeholder={'Search Employees/Email'}/>
            {children}
        </Neomorph>
    )
}


export const ListItem = ({children,item,navigation}) => {
    let {name,email,profile_image,} = item
    const sourceImg = profile_image ? {uri:profile_image} : require('../assets/Images/search.png')
    return(
      <Neomorph
        // inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        style={styles.ListContainer}
        >
            <TouchableOpacity style={0.8} onPress={() => navigation.navigate('Profile',{item})} style={[styles.ListContainer,{marginTop:0,paddingHorizontal:0}]}>

                    <Image
                        source={sourceImg}
                        style={{ height: 90, width: 90, borderRadius: 20,}}
                        />

                        <View style={{ marginLeft: 10, }}>
                            <Text style={{ fontSize: 14,fontWeight:'bold',letterSpacing:1 }}>
                                {name}
                            </Text>

                            <Text style={{ letterSpacing:1,fontSize:10 }}>
                                {email}
                            </Text>
                        </View>
                {children}
                </TouchableOpacity>
      </Neomorph>
  
    )
  }

const styles = StyleSheet.create({
    searchcontainer: {
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
    },
    ListContainer : {
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 10,
        borderRadius: 50,
        backgroundColor: '#E9EEF0',
        shadowColor: '#00000029',
        width: 320,
        height: 130,
        marginTop: 25,
        paddingHorizontal:22,
        flexDirection:'row',
        alignItems:'center',
     }
})