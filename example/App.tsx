import { AiContextShield, setVisualSecurity } from "expo-ai-context-shield";
import { ScrollView, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        
        <Group name="Granular Protection (AI Shield)">
          <AiContextShield isSensitive={true} style={{ padding: 10 }}>
            <Text style={{ fontSize: 24, color: "black" }}>
              Balance: $1,000,000.00
            </Text>
          </AiContextShield>
          <Text style={{ marginTop: 10, color: '#666' }}>
            This text is hidden from AI/System Capture.
          </Text>
        </Group>
      </ScrollView>
    </View>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
