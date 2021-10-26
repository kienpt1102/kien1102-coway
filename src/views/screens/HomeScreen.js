import React from 'react';
import {
    SafeAreaView, Text, StyleSheet,
    Image, View, ScrollView,
    TouchableOpacity, FlatList,
    Dimensions, Linking,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import COLORS from '../../consts/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import km from '../../consts/km';
import dv from '../../consts/dv';
import tn from '../../consts/tn';
import tt from '../../consts/tt';
import videos from '../../consts/videos';
import Test1 from '../others/test';
import Test2 from '../others/test2';

const { width } = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
    const Card3 = ({ p }) => {
        return (
            <View style={styles.card3}>
                <Image
                    style={styles.image}
                    source={p.image}
                />
            </View>
        );
    };

    const Card4 = ({ p }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => Linking.openURL(p.link)}
            >
                <View style={styles.card4}>
                <Image
                    style={{
                        height: 260, width: '100%',
                        resizeMode: 'contain',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                    source={p.image}
                />

                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ fontSize: 20 }}>
                        {p.details}
                    </Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    };

    const Card5 = ({ p }) => {
        return (
            <View style={styles.card5}>
                <View style={{ flex: 1, width: '100%', borderRadius: 20 }}>
                    <YoutubePlayer
                        height={360}
                        play={false}
                        videoId={p.vid}
                    />
                </View>

                <View style={{ marginHorizontal: 20, top: -30 }}>
                    <Text style={{ fontSize: 20 }}>
                        {p.details}
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* header */}
            <View style={styles.header}>
                <View style={styles.headerPhone}>
                    <View style={{ marginRight: 10 }}>
                        <FontAwesome5 name="phone-alt" size={22} color={COLORS.white} />
                    </View>
                    <Text style={{ color: COLORS.white, fontSize: 20 }}>
                        Hotline: 1800.556.892
                    </Text>
                </View>

                <View style={styles.headerTitle}>
                    <View style={{ height: 80, width: '50%', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/onBoard/onB1.png')}
                            style={{ height: '40%', width: '80%', resizeMode: 'contain', }}
                        />
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={navigation.toggleDrawer}
                    >
                        <View style={styles.headerTitleBtn}>
                            <FontAwesome5 name="bars" size={26} color={COLORS.white} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ height: 350, width: '100%', }}>
                    <Image
                        source={require('../../assets/onBoard/onB2.png')}
                        style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
                    />
                </View>

                {/* sản phẩm */}
                <View style={styles.trang}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            SẢN PHẨM
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <View style={{ width: '100%', backgroundColor: '#eee', marginHorizontal: 10, marginTop: 30 }}>
                        <Test1 />
                    </View>
                </View>

                {/* e-brochure */}
                <View style={styles.xam}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            E-BROCHURE
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <View style={{ width: '92%', backgroundColor: COLORS.white, marginHorizontal: 20, borderRadius: 20, marginTop: 30 }}>
                        <Test2 />
                    </View>
                </View>

                {/* khuyến mại */}
                <View style={styles.trang}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            KHUYẾN MÃI
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatlist}
                        data={km}
                        renderItem={({ item, index }) => <Card3 p={item} index={index} />}
                    />
                </View>

                {/* dịch vụ */}
                <View style={styles.xam}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            DỊCH VỤ
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatlist}
                        data={dv}
                        renderItem={({ item, index }) => <Card3 p={item} index={index} />}
                    />
                </View>

                {/* tính năng */}
                <View style={styles.trang}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            TÍNH NĂNG
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatlist}
                        data={tn}
                        renderItem={({ item, index }) => <Card3 p={item} index={index} />}
                    />
                </View>

                {/* tin tức */}
                <View style={styles.xam}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            TIN TỨC
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatlist}
                        data={tt}
                        renderItem={({ item, index }) => <Card4 p={item} index={index} />}
                    />

                    <View style={{ top: -30, alignItems: 'center' }}>
                        <Image
                            style={{ height: 100, width: '90%', resizeMode: 'contain', borderRadius: 30 }}
                            source={require('../../assets/tt/tt7.jpg')}
                        />
                    </View>

                </View>

                {/* video */}
                <View style={styles.trang}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            VIDEO
                        </Text>

                        <View style={styles.line} />
                    </View>

                    <View style={{ marginTop: 30, alignItems: 'center', }}>
                        <View style={{ flex: 1, height: 300, width: width - 40, borderRadius: 20 }}>
                            <YoutubePlayer
                                height={360}
                                play={false}
                                videoId={'KwMVH-LB2c4'}
                            />
                        </View>
                    </View>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatlist}
                        data={videos}
                        renderItem={({ item, index }) => <Card5 p={item} index={index} />}
                    />

                    <View style={{ flex: 1, alignItems: 'center', marginBottom: 30 }}>
                        <Image
                            source={require('../../assets/footer.jpg')}
                            style={{ height: 150, width: 490, overflow: 'hidden' }}
                        />
                    </View>
                </View>

                {/* footer */}
                <View style={styles.xam}>
                    <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 19 }}>
                            CÔNG TY TNHH COWAY VINA
                        </Text>
                        <Text style={{ marginTop: 20 }}>
                            Số GCNDT: 8767198074, Cấp ngày 25/06/2020, Đăng ký thay đổi lần 1 ngày 26/10/2020, Nơi cấp Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội
                        </Text>

                        <Text>
                            Trụ sở chính: Tầng 9, Tòa nhà Peakview, 36 Hoàng Cầu, Đống Đa, Hà Nội
                        </Text>

                        <Text>
                            Tel: (+84) 024.3759.0888
                        </Text>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => Linking.openURL('https://www.cowayvina.com.vn/')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                                <FontAwesome5 name="home" size={18} color="black" style={{ marginRight: 10 }} />
                                <Text>www.cowayvina.com.vn</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => Linking.openURL('https://www.facebook.com/cowayvina.official')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <FontAwesome5 name="facebook" size={18} color="black" style={{ marginRight: 10 }} />
                                <Text>www.facebook.com/cowayvina.official</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => Linking.openURL('https://www.youtube.com/')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <FontAwesome5 name="youtube" size={18} color="black" style={{ marginRight: 10 }} />
                                <Text>www.youtube.com/c/COWAYVINAofficial</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: 50, width: '100%',
                        backgroundColor: '#ccc',
                        marginTop: 40,
                        marginBottom: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>
                            Copyright ⓒ Coway 2021. All Rights Reserved.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row'
    },
    card1: {
        height: 260, width: width / 2 - 40,
        borderRadius: 5,
        marginBottom: 40,
        marginHorizontal: 10,
    },
    card2: {
        height: 120, width: width / 2 - 40,
        borderRadius: 5,
        marginBottom: 40,
        marginHorizontal: 10,
    },
    card3: {
        height: 360, width: width / 1.5,
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 2,
        elevation: 1,
        marginBottom: 60,
    },
    card4: {
        height: 380, width: width / 1.5,
        borderRadius: 10,
        marginHorizontal: 10,
        elevation: 1,
        marginBottom: 60,
        backgroundColor: COLORS.white,
    },
    card5: {
        height: 340, width: width / 1.5,
        borderRadius: 20,
        marginHorizontal: 10,
        elevation: 1,
        marginBottom: 60,
    },
    image: {
        height: '100%', width: '100%',
        resizeMode: 'contain',
        borderRadius: 5,
    },
    header: {},
    headerPhone: {
        height: 48, width: '100%',
        backgroundColor: COLORS.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 30,
        flexDirection: 'row',
    },
    headerTitle: {
        height: 80, width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        elevation: 1,
    },
    headerTitleBtn: {
        height: 50, width: 50,
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trang: {
        marginTop: 30
    },
    xam: {
        backgroundColor: '#eee',
        paddingTop: 30,
        marginTop: 30,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    line: {
        height: 1, width: '92%',
        backgroundColor: COLORS.primary,
        marginTop: 20,
    },
    flatlist: {
        marginTop: 40,
        marginBottom: 10,
        marginHorizontal: 10,
        marginRight: 10
    },
});

export default HomeScreen;







