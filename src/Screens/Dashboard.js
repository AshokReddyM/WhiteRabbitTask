import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Dimensions, StatusBar, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { getEmployees } from '../assets/Services/apiServices';
import SQLite from "react-native-sqlite-2";



import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

let db = SQLite.openDatabase({ name: 'EmployeeDatabase.db', createFromLocation: "~db.sqlite" });


export default function Dashboard(props) {
    let { navigation } = props
    const [res, setRes] = useState([])
    const [list, setList] = useState([])
    const [fetched, setFetched] = useState(false)



    useEffect(() => {getEmp();}, [])

    const getEmp = async () => {
        let response = await getEmployees()
        getDataFromDb();
        if (response.success) {
            addDataToDb(response)
        }
        setFetched(true)
    }



    const getDataFromDb = () => {
        db.transaction(function (txn) {
            txn.executeSql("SELECT * FROM employees", [], function (tx, res) {
                console.log('item:', res.rows.length);
                var len = res.rows.length;
                for (let i = 0; i < len; i++) {
                    console.log('item 3:', res.rows.item(i));
                    list.push(res.rows.item(i));

                }
                
                console.log('item 4:', { list });
                setRes(list);
                setList(list);
            }
            );
        });

    };


    const addDataToDb = (response) => {

        db.transaction(function (txn) {
            txn.executeSql("DROP TABLE IF EXISTS employees", []);
            txn.executeSql(
                "CREATE TABLE IF NOT EXISTS employees(id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30),phone VARCHAR(30),username VARCHAR(30),profile_image VARCHAR(30),website VARCHAR(30),email VARCHAR(30),city VARCHAR(30))",
                []
            );


            for (let i = 0; i < response?.resData.length; i++) {
                const username = response?.resData[i].username;
                const name = response?.resData[i].name;
                const phone = response?.resData[i].phone;
                const profile_image = response?.resData[i].profile_image;
                const website = response?.resData[i].website;
                const email = response?.resData[i].email;
                const id = response?.resData[i].id;
                const city = response?.resData[i].address.city;
                const result = "'" + name + "','" + phone + "','" + username + "','" + profile_image + "','" + website + "','" + email + "','" + city + "'";
                txn.executeSql("INSERT INTO employees (name,phone,username,profile_image,website,email,city) VALUES (" + result + ")", []);
            }

            getDataFromDb();
        });

    }

    const search = (text) => {
        let items = res?.filter(item => {
            return (item.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                item.email.toLowerCase().indexOf(text.toLowerCase()) > -1)
        })
        setList(items)
    }

    return (
        <View>
            
            <ScrollView>


                
                <View style={{ width: Dimensions.get("window").width, flex: 1, alignItems: 'center', }}>

                <StatusBar translucent={true} hidden={false} backgroundColor="transparent" barStyle="dark-content" />

<View style={{ flexDirection: 'row', backgroundColor: '#964379', height: 86}} >
        <Text style={{ margin: 20, marginTop: 40, fontSize: 18,fontWeight: 'bold'}} >
            Employee List
        </Text>
</View>

                    <Search search={search} />
                    {
                        fetched ? res?.length ? list.map((item, id) =>
                            <ListItem navigation={navigation} item={item} key={id} />) :
                            <View style={{ flex: 1, marginTop: 50, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>NO EMPLOYEES</Text>
                            </View>
                            :
                            <View style={{ flex: 1, marginTop: 50, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', letterSpacing: 1, textAlign: 'center' }}>Loading ..... </Text>
                            </View>

                    }

                </View>

            </ScrollView>
        </View>
    )
}

export const Search = ({ children, search }) => {
    const handleChange = text => {
        search(text)
    }
    return (
        <Neomorph
            swapShadows
            style={styles.searchcontainer}
        >
            <Image source={require('../assets/Images/search.png')} style={{ height: 18, width: 18 }} />
            <TextInput onChangeText={handleChange} maxLength={10} style={{ flex: 1, marginLeft: 20 }} placeholder={'Search Employees/Email'} />
            {children}
        </Neomorph>
    )
}


export const ListItem = ({ children, item, navigation }) => {
    console.log('result: ', 'item');
    const username = item.username;
    const name = item.name;
    const phone = item.phone;
    const profile_image = item.profile_image;
    const website = item.website;
    const email = item.email;


    const sourceImg = profile_image ? { uri: profile_image } : require('../assets/Images/search.png')
    return (
        <Neomorph
            // inner // <- enable shadow inside of neomorph
            swapShadows // <- change zIndex of each shadow color
            style={styles.ListContainer}
        >
            <TouchableOpacity style={0.8} onPress={() => navigation.navigate('Profile', { item })} style={[styles.ListContainer, { marginTop: 0, paddingHorizontal: 0 }]}>

                <Image source={sourceImg}
                    style={{ height: 90, width: 90, borderRadius: 20}}
                />

                <View style={{ marginLeft: 10, }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: 1 }}>
                        {name}
                    </Text>

                    <Text style={{ letterSpacing: 1, fontSize: 10 }}>
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
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        borderRadius: 50,
        backgroundColor: '#E9EEF0',
        shadowColor: '#00000029',
        width: 320,
        height: 47,
        marginTop: 25,
        paddingHorizontal: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListContainer: {
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        borderRadius: 10,
        backgroundColor: '#E9EEF0',
        shadowColor: '#00000029',
        width: 320,
        height: 130,
        marginTop: 25,
        paddingHorizontal: 22,
        flexDirection: 'row',
        alignItems: 'center',
    }
})