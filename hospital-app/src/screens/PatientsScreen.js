import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

export default function PatientsScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");
  const [editId, setEditId] = useState(null);

  // ADD or UPDATE
  const handleSave = () => {
    if (!name || !disease) return;

    if (editId) {
      // update
      const updated = patients.map((p) =>
        p.id === editId ? { ...p, name, disease } : p
      );
      setPatients(updated);
      setEditId(null);
    } else {
      // add
      const newPatient = {
        id: Date.now().toString(),
        name,
        disease,
      };
      setPatients([...patients, newPatient]);
    }

    setName("");
    setDisease("");
  };

  // DELETE
  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  // EDIT
  const handleEdit = (item) => {
    setName(item.name);
    setDisease(item.disease);
    setEditId(item.id);
  };

  return (
    <View style={styles.container}>
      <Header title="Patients" onLogout={handleLogout} />

      {/* FORM */}
      <View style={styles.form}>
        <TextInput
          placeholder="Patient Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Disease"
          value={disease}
          onChangeText={setDisease}
          style={styles.input}
        />

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.btnText}>
            {editId ? "Update Patient" : "Add Patient"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No patients added yet</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.disease}>{item.disease}</Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => handleEdit(item)}
              >
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6fb" },

  // FORM
  form: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },

  saveBtn: {
    backgroundColor: "#2E86DE",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // CARD
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  disease: {
    color: "gray",
  },

  actions: {
    flexDirection: "row",
  },

  editBtn: {
    backgroundColor: "#00b894",
    padding: 8,
    borderRadius: 6,
    marginRight: 5,
  },

  deleteBtn: {
    backgroundColor: "#d63031",
    padding: 8,
    borderRadius: 6,
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});