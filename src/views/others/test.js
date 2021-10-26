import React from "react";
import {
    View, Text, TouchableOpacity,
    Image, FlatList, Dimensions,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import sanpham1 from '../../consts/sanpham1';
import COLORS from '../../consts/colors';

const { width } = Dimensions.get('screen');

const Categories = [
    { name: 'All', details: 'Tất cả', },
    { name: 'Air Care', details: 'Máy lọc không khí', },
    { name: 'Water Care', details: 'Máy lọc nước', },
    { name: 'Body Care', details: 'Nắp bồn cầu thông minh', },
];

const Card1 = ({ sp }) => {
    return (
        <View style={styles.card1}>
            <Image
                style={styles.image}
                source={sp.image}
            />
        </View>
    );
};

const Test1 = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const [filteredList, setFilteredList] = React.useState([]);

    const sapxep = index => {
        const currentList = sanpham1.filter(
            item => item?.sp == Categories[index].name.trim()
        )[0].sps;
        setFilteredList(currentList);
    };

    React.useEffect(() => {
        sapxep(0);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight: 20, 
                backgroundColor: '#eee',
                borderRadius: 20,
            }}>
                {Categories.map((item, index) => (
                    <View key={'sp' + index} style={{ alignItems: 'center', }}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedCategoryIndex(index);
                                sapxep(index);
                            }}
                            style={styles.categoryBtn}
                        >
                            <View>
                                <Text style={{
                                    color: selectedCategoryIndex == index
                                        ? COLORS.primary
                                        : COLORS.grey,
                                    fontSize: 19,
                                    fontWeight: 'bold'
                                }}>
                                    {item.name}
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: selectedCategoryIndex == index
                                        ? COLORS.primary
                                        : COLORS.grey,
                                    marginTop: 5,
                                }}>
                                    {item.details}
                                </Text>
                            </View>

                            {selectedCategoryIndex == index && (
                                <View style={{ height: 2, width: 50, backgroundColor: COLORS.primary, }} />
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <View >
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: 20, paddingBottom: 30, paddingRight: 20 }}
                    numColumns={2}
                    data={filteredList}
                    renderItem={({ item }) => <Card1 sp={item} />
                    }
                />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    card1: {
        height: 260, width: width / 2 - 40,
        borderRadius: 5,
        marginBottom: 40,
        marginHorizontal: 10,
    },
    image: {
        height: '100%', width: '100%',
        resizeMode: 'contain',
        borderRadius: 5,
    },
    categoryBtn: {
        height: 100,
        width: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
    },
    categoryBtnName: {
        color: COLORS.grey,
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default Test1; 

















