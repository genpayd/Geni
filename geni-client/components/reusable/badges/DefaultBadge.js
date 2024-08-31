import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const DefaultBadge = ({label}) => {
  return (
    <TouchableOpacity style={[styles.badge_wrapper]}>
      <Text style={styles.badge_text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  badge_wrapper: {
    height: 31,
    width: 'auto',
    paddingVertical: 6,
    paddingHorizontal: 11,
    backgroundColor: '#D9D9D9',
    borderRadius: 12
  },
  badge_text: {
    // fontWeight: 700,
    fontSize: 16
  }
})
