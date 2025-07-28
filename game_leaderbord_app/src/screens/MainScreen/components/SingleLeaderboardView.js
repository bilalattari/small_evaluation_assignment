import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../../constants'
import { Icons, ImageView, RowView, Text } from '../../../components'
import { arrow_down_icon, arrow_up_icon, premium_icon } from '../../../assets/icons'
import { common_styles } from '../../../utils/common_styles'
import { TextWeights } from '../../../config'

const SingleLeaderboardView = ({ index, item, style, onPress }) => {
    return (
        <RowView onPress={onPress} style={[styles.main_view, style]} >
            <Text
                text={index}
            />

            <Icons name={item?.is_up ? arrow_up_icon : arrow_down_icon} />

            <View  >
                <ImageView
                    height={SIZES.padding * 2.2}
                    width={SIZES.padding * 2.2}
                    image={images.profile_image}
                    style={{ borderColor: item?.is_premium ? COLORS.sky_blu_color : COLORS.border_color, borderWidth: 2 }}
                    radius={SIZES.padding * 2}
                />
                {item?.is_premium && <Icons style={styles.premium_icon} name={premium_icon} />}

            </View>

            <View style={styles.text_view} >
                <Text
                    size={SIZES.h14}
                    weight={TextWeights.semibold}
                    numberOfLines={2}
                    text={item?.name}
                />

                <Text
                    size={SIZES.h12}
                    text={item?.item}
                    mt={SIZES.padding2 / 4}
                />
            </View>


            <View style={styles.points_view} >
                <Text text={`${item?.points} pts`}
                    weight={TextWeights.semibold}
                    size={SIZES.h10}
                />
            </View>


        </RowView>

    )
}

export default SingleLeaderboardView

const styles = StyleSheet.create({
    main_view: {
        borderRadius: SIZES.padding2,
        borderBottomColor: COLORS.white + "20",
        borderBottomWidth: 1,
        height: SIZES.padding * 3.9,
        justifyContent: "center",
    },
    premium_icon: {
        marginTop: -SIZES.padding2 / 2
    },
    text_view: {
        flex: 1,
        marginHorizontal: SIZES.padding2 / 2,
    },
    points_view: {
        height: SIZES.padding * 1.7,
        borderRadius: SIZES.padding * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white + "20",
        paddingHorizontal: SIZES.padding2
    },

})