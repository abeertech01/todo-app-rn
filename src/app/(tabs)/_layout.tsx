import { Ionicons } from "@react-native-vector-icons/ionicons/static"
import { Tabs } from "expo-router"

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
