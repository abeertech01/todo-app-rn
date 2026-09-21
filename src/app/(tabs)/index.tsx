import Header from "@/components/Header"
import useTheme from "@/hooks/useTheme"
import { createHomeStyles } from "@/styles/home.styles"
import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
  const { toggleDarkMode, colors } = useTheme()

  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}
