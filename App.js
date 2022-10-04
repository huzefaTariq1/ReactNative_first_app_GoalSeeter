import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [enterGoal, SetEnterGoal] = useState("")
  const [goalList, setGoalList] = useState([])
  const [temp, setTemp] = useState([])
  const setInputGoal = (enterText) => {
    SetEnterGoal(enterText)
  }

  const handleAddGoal = () => {
    setGoalList(prevGoal => [...prevGoal, enterGoal])
    SetEnterGoal("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainInputSection}>
        <TextInput style={styles.inputText}
          placeholder='Enter Course Goal'
          onChangeText={setInputGoal}
          value={enterGoal}
        />
        <Button
          title='Add'
          onPress={handleAddGoal}
        />
      </View>
      <View>
        {goalList && goalList.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  inputText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginRight: 3
  },
  mainInputSection: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  }

});
