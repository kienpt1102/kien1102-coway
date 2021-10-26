import React from "react";
import {
    View, Text, TouchableOpacity,
    Image, FlatList, Dimensions,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import sanpham2 from "../../consts/sanpham2";
import COLORS from '../../consts/colors';

const { width } = Dimensions.get('screen');

const Categories = [
    { name: 'All', details: 'Tất cả', },
    { name: 'Air Care', details: 'Máy lọc không khí', },
    { name: 'Water Care', details: 'Máy lọc nước', },
    { name: 'Body Care', details: 'Nắp bồn cầu thông minh', },
];

const Card2 = ({ sp }) => {
    return (
        <View style={styles.card2}>
            <Image
                style={styles.image}
                source={sp.image}
            />
        </View>
    );
};

const Test2 = () => {
    const [selectedCategoryIndex2, setSelectedCategoryIndex2] = React.useState(0);
    const [filteredList2, setFilteredList2] = React.useState([]);

    const sapxep2 = index => {
        const currentList2 = sanpham2.filter(
            item => item?.sp == Categories[index].name.trim()
        )[0].sps;
        setFilteredList2(currentList2);
    };
    React.useEffect(() => {
        sapxep2(0);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 20,
            }}>
                {Categories.map((item, index) => (
                    <View key={'sp' + index} style={{ alignItems: 'center', marginTop: 10}}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedCategoryIndex2(index);
                                sapxep2(index);
                            }}
                            style={styles.categoryBtn}
                        >
                            <View>
                                <Text style={{
                                    color: selectedCategoryIndex2 == index
                                        ? COLORS.primary
                                        : COLORS.grey,
                                    fontSize: 19,
                                    fontWeight: 'bold'
                                }}>
                                    {item.name}
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: selectedCategoryIndex2 == index
                                        ? COLORS.primary
                                        : COLORS.grey,
                                    marginTop: 5,
                                }}>
                                    {item.details}
                                </Text>
                            </View>

                            {selectedCategoryIndex2 == index && (
                                <View style={{ height: 3, width: 50, backgroundColor: COLORS.primary, }} />
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <View >
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: 20, paddingBottom: 30, }}
                    numColumns={2}
                    data={filteredList2}
                    renderItem={({ item }) => <Card2 sp={item} />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        marginHorizontal: 10,
        marginLeft: 10,
    },
    categoryBtnName: {
        color: COLORS.grey,
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    card2: {
        height: 120, width: width / 2 - 40,
        borderRadius: 5,
        marginBottom: 40,
        marginHorizontal: 10,
    },
});

export default Test2;