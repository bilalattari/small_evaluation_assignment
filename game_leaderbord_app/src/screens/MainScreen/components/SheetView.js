import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Icons, ImageView, RowView, SizedBox, Text } from '../../../components'
import { COLORS, images, SIZES } from '../../../constants'
import { premium_gold_icon, star_icon } from '../../../assets/icons'
import { common_styles } from '../../../utils/common_styles'
import LinearGradient from 'react-native-linear-gradient'
import { TextWeights } from '../../../config'

const SheetView = ({ onPressClose }) => {
    return (
        <View style={styles.main_view}>

            <View style={common_styles.flex_1} >
                <ScrollView showsVerticalScrollIndicator={false} >

                    <RowView style={styles.top_view} >

                        <View >
                            <ImageView
                                style={styles.image}
                                image={images.profile_image}
                                height={SIZES.padding * 5}
                                width={SIZES.padding * 5}
                                radius={SIZES.padding * 3}
                            />
                            <Icons style={styles.premium_icon} name={premium_gold_icon} />
                        </View>

                        <View style={common_styles.flex_1} >

                            <Text
                                size={SIZES.h14}
                                weight={TextWeights.semibold}
                                text={"Jakob Bothman"}
                            />
                            <Text
                                text={"🔫×2, 💣×1,  🧨×1, 🛡️×3"}
                                size={SIZES.h12}
                                mt={SIZES.padding2 / 2}
                            />
                            <Text
                                text={"OGCode"}
                                color={COLORS.yellow_color}
                                weight={TextWeights.semibold}
                                size={SIZES.h10}
                                mt={SIZES.padding2 / 2}
                                mb={SIZES.padding2}
                            />

                            <RowView>
                                <View style={styles.points_view} >
                                    <Text
                                        weight={TextWeights.medium}
                                        size={SIZES.h9}
                                        text={"1,650 pts"} />
                                </View>
                                <RowView gap={0} style={styles.points_view} >
                                    <Icons iconHeight={SIZES.padding2} name={premium_gold_icon} />
                                    <Text
                                        weight={TextWeights.medium}
                                        size={SIZES.h9}
                                        text={"Gold"} />
                                </RowView>
                            </RowView>

                        </View>

                    </RowView>

                    <SizedBox height={SIZES.padding * 2} />

                    <RowView style={styles.tab_row} >
                        <TouchableOpacity activeOpacity={0.8}
                            disabled
                            style={styles.tab}
                        >
                            <Text text={"Overview"}
                                weight={TextWeights.medium}
                                size={SIZES.h11}
                            />
                        </TouchableOpacity>

                    </RowView>

                    <SizedBox height={SIZES.padding2} />

                    <RowView style={styles.detail_row} >
                        <Text size={SIZES.h10} text={"Hits"} />
                        <Text size={SIZES.h10} weight={TextWeights.bold} text={"4 Bags"} />
                    </RowView>
                    <RowView style={styles.detail_row} >
                        <Text size={SIZES.h10} text={"Inventory"} />
                        <Text size={SIZES.h10} weight={TextWeights.bold} text={"32"} />
                    </RowView>
                    <RowView style={styles.detail_row} >
                        <Text style={common_styles.flex_1} size={SIZES.h10} text={"Extras"} />
                        <Icons name={star_icon} />
                        <Text size={SIZES.h10} weight={TextWeights.bold} text={"x4"} />
                    </RowView>
                    <RowView style={styles.detail_row} >
                        <Text size={SIZES.h10} text={"Status "} />
                        <Text size={SIZES.h10} weight={TextWeights.bold} text={"Ripple"} />
                    </RowView>

                    <SizedBox />
                </ScrollView>


            </View>

            <RowView style={styles.btn_row} >
                <Button
                    style={common_styles.flex_1}
                    buttonText={"Close"}
                    onPress={onPressClose}
                />

                <LinearGradient colors={["#531DAB", "#531DAB"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.attack_btn}
                >
                    <Button
                        onPress={onPressClose}
                        buttonText={"Attack"}
                    />
                </LinearGradient>

            </RowView>
        </View>
    )
}

export default SheetView

const styles = StyleSheet.create({
    main_view: {
        height: "100%",
        paddingTop: SIZES.padding * 1.5
    },
    top_view: {
        paddingHorizontal: SIZES.padding,
        gap: SIZES.padding
    },
    image: {
        borderWidth: 1,
        borderColor: COLORS.yellow_color
    },
    premium_icon: {
        marginTop: -SIZES.padding2
    },
    points_view: {
        backgroundColor: COLORS.white + "30",
        paddingHorizontal: SIZES.padding2,
        height: SIZES.padding * 1.4,
        borderRadius: SIZES.padding,
        justifyContent: "center",
        alignItems: "center"
    },
    tab: {
        borderBottomColor: COLORS.purple_color,
        borderBottomWidth: 2,
        height: SIZES.padding * 2,
        justifyContent: "center",
    },
    tab_row: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color2,
        paddingHorizontal: SIZES.padding
    },
    detail_row: {
        height: SIZES.padding * 3,
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: SIZES.padding,
        borderBottomColor: COLORS.white + "30",
        borderBottomWidth: 1,
    },
    btn_row: {
        paddingHorizontal: SIZES.padding,
        gap: SIZES.padding2,
        marginVertical: SIZES.padding
    },
    btn: {
        flex: 1
    },
    attack_btn: {
        flex: 1,
        borderRadius: SIZES.padding * 2
    }

})