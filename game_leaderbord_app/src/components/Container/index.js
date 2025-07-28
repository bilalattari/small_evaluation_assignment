import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { styles } from './index.style'
import { COLORS } from '../../constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Container = ({ children, background, barStyle }) => {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.safe_area,
    { backgroundColor: background ?? COLORS.primary, paddingTop: top, paddingBottom: bottom }]} >
      <StatusBar barStyle={barStyle || 'dark-content'} backgroundColor={background ?? COLORS.primary} translucent />
      {children}
    </SafeAreaView>
  )
}

export default Container