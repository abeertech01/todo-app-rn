import { api } from "@/convex/_generated/api"
import useTheme from "@/hooks/useTheme"
import { createSettingsStyles } from "@/styles/settings.styles"
import Ionicons from "@react-native-vector-icons/ionicons/static"
import { useQuery } from "convex/react"
import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"

const ProgressStats = () => {
  const { colors } = useTheme()
  const settingsStyle = createSettingsStyles(colors)

  const todos = useQuery(api.todos.getTodos)
  const totalTodos = todos ? todos.length : 0
  const completedTodos = todos
    ? todos.filter((todo) => todo.isComplete).length
    : 0
  const activeTodos = totalTodos - completedTodos

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyle.statsContainer}>
        {/* TOTAL TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyle.statCard, { borderLeftColor: colors.primary }]}
        >
          <View style={settingsStyle.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyle.statIcon}
            >
              <Ionicons name="list" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyle.statNumber}>{totalTodos}</Text>
            <Text style={settingsStyle.statLabel}>Total Todos</Text>
          </View>
        </LinearGradient>

        {/* COMPLETED TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyle.statCard, { borderLeftColor: colors.success }]}
        >
          <View style={settingsStyle.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.success}
              style={settingsStyle.statIcon}
            >
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyle.statNumber}>{completedTodos}</Text>
            <Text style={settingsStyle.statLabel}>Completed</Text>
          </View>
        </LinearGradient>

        {/* ACTIVE TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyle.statCard, { borderLeftColor: colors.warning }]}
        >
          <View style={settingsStyle.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={settingsStyle.statIcon}
            >
              <Ionicons name="time" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyle.statNumber}>{activeTodos}</Text>
            <Text style={settingsStyle.statLabel}>Active</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}

export default ProgressStats
