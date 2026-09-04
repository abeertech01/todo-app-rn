import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit src/app/index.tsx to edit this screen
      </Text>
      <Link href="/about">Visit about screen</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 20,
  },
})
