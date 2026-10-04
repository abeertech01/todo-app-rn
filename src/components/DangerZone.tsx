import { api } from "@/convex/_generated/api"
import useTheme from "@/hooks/useTheme"
import { createSettingsStyles } from "@/styles/settings.styles"
import Ionicons from "@react-native-vector-icons/ionicons/static"
import { useMutation } from "convex/react"
import { LinearGradient } from "expo-linear-gradient"
import { Alert, Text, TouchableOpacity, View } from "react-native"

const DangerZone = () => {
  const { colors } = useTheme()

  const settingsStyle = createSettingsStyles(colors)

  const clearAllTodos = useMutation(api.todos.clearAllTodos)

  const handleResetApp = async () => {
    Alert.alert(
      "Reset App",
      "⚠️ This will delete all your todos permanently. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearAllTodos()
              Alert.alert(
                "App Reset",
                `Successfully deleted ${result.deleteCount} todo${result.deleteCount === 1 ? "" : "s"}. Your app has been reset`,
              )
            } catch (error) {
              console.log("Error deleting all todos", error)
              Alert.alert("Error", "Failed to reset the app")
            }
          },
        },
      ],
    )
  }
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingsStyle.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingsStyle.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingsStyle.actionIcon}
          >
            <Ionicons name="trash" size={18} color={"#fff"} />
          </LinearGradient>
          <Text style={settingsStyle.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default DangerZone
