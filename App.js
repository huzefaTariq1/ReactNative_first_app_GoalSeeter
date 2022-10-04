import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainInputSection}>
        <TextInput style={styles.inputText}
        placeholder='Enter Course Goal'
        />
        <Button
        title='Add'
        />
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
  inputText:{
  borderBottomColor:'black',
  borderBottomWidth:1,
  padding:10,
  marginRight:3
  },
  mainInputSection:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between"
  }

});
