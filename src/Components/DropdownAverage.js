import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown,} from 'react-native-element-dropdown';

const data = [
    {label: '28 days', value: '1'},
    {label: '30 days', value: '2'},
    {label: '32 days', value: '3'},
];

const DropdownAverage = () => {
    const [dropdown, setDropdown] = useState(null);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
        </View>
        );
    };

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={data}
                labelField="label"
                valueField="value"
                label="Dropdown"
                placeholder="Select cycle"
                value={dropdown}
                onChange={item => {
                setDropdown(item.value);
                    console.log('selected', item);
                }}
                renderItem={item => _renderItem(item)}
                textError="Error"
            />
        </View>
    );
};

export default DropdownAverage;

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: '#D7BDE2',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 20,
        width:300,
        paddingLeft:20,
        borderRadius:10,
    },
 
    item: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        fontWeight:'600'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});