import { StatusBar } from "expo-status-bar";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import motorcycles from "./mocks/motorcycles.json";
import { groupByCategory } from "./utils/groupMotorcycles";

const sections = groupByCategory(motorcycles);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          stickySectionHeadersEnabled
          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.model}>{item.model}</Text>
              <Text style={styles.details}>
                {item.brand} · {item.year}
              </Text>
            </View>
          )}
          renderSectionFooter={({ section }) => (
            <Text style={styles.footer}>
              Total: {section.data.length} motocicletas
            </Text>
          )}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    backgroundColor: "#1F2937",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#D1D5DB",
  },
  model: { fontSize: 16, fontWeight: "600", color: "#111827" },
  details: { fontSize: 14, color: "#6B7280", marginTop: 2 },
  footer: {
    textAlign: "right",
    fontStyle: "italic",
    color: "#374151",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
