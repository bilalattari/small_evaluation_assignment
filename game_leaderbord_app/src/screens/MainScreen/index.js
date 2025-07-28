import { FlatList, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icons, RowView, SizedBox, Text } from '../../components'
import { share_icon } from '../../assets/icons'
import { leaderboard_array, TextWeights } from '../../config'
import { COLORS, SIZES } from '../../constants'
import LinearGradient from 'react-native-linear-gradient'
import { SheetView, SingleLeaderboardView } from './components'
import { styles } from './index.styles'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { common_styles } from '../../utils/common_styles'
import MainScreenFunctional from "./index.function"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const MainScreen = () => {
    const { sheetRef } = MainScreenFunctional()
    const { top, bottom } = useSafeAreaInsets()
    return (
        <GestureHandlerRootView style={common_styles.flex_1} >
            <BottomSheetModalProvider  >
                <Container>
                    <View style={styles.main_view} >

                        <RowView style={styles.list} justifyContent={'space-between'} >
                            <Text
                                text={"Leaderboard"}
                                weight={TextWeights.sf_rpo_semibold}
                                size={SIZES.h22}
                            />
                            <Icons name={share_icon} />
                        </RowView>

                        <LinearGradient
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            colors={COLORS.leaderboard_top_gradient}
                            style={styles.top_view} >

                            <SingleLeaderboardView
                                onPress={() => sheetRef?.current?.present()}
                                isTop={true}
                                item={leaderboard_array?.[0]}
                                index={1}
                                style={{ height: "100%" }}
                            />
                        </LinearGradient>

                        <View style={styles.border} />
                        <FlatList
                            data={leaderboard_array}
                            contentContainerStyle={styles.list}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item?.id}
                            ListFooterComponent={<SizedBox />}
                            renderItem={({ item, index }) => (
                                <SingleLeaderboardView
                                    onPress={() => sheetRef?.current?.present()}
                                    index={index + 1}
                                    item={item}
                                />
                            )}
                        />

                        <BottomSheetModal
                            ref={sheetRef}
                            $modal={true}
                            bottomInset={bottom}
                            topInset={top}
                            enableOverDrag={true}
                            enablePanDownToClose={true}
                            backgroundStyle={{ backgroundColor: COLORS.sheet_background_color }}
                            handleIndicatorStyle={styles.sheet_indicator}
                            containerStyle={{ backgroundColor: COLORS.modal_background_color }}
                            backdropComponent={(props) => (
                                <BottomSheetBackdrop
                                    {...props}
                                    appearsOnIndex={0}
                                    disappearsOnIndex={-1}
                                    pressBehavior="close"
                                />
                            )}
                        >
                            <BottomSheetView style={{ height: SIZES.height / 1.25 }}  >
                                <SheetView onPressClose={() => sheetRef?.current?.close()}  />
                            </BottomSheetView>
                        </BottomSheetModal>



                    </View>
                </Container>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default MainScreen