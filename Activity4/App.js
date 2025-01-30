import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAdd] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
   const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
    const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/026/631/405/original/human-icon-symbol-design-illustration-vector.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="name"
          keyboardType="numeric"
        />
          </View>

         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://as2.ftcdn.net/v2/jpg/00/89/06/29/1000_F_89062950_j0D7XXprsIKbQ7ao4FLoQwPirLZnLdNv.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="age"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.6c54525cc78d1514e93c17a2fe27d315?rik=I7Qj6l5sIg1xug&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2faddress-icon-vector-3.png&ehk=cFsyj5ZV4g%2bLoUB2JcwdZQ3cleqhaJ9BgsI9ItXV9%2bQ%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdd}
          value={address}
          placeholder="address"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/002/206/174/original/school-building-icon-free-vector.jpg',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://www.pngplay.com/wp-content/uploads/6/Education-Icon-PNG-HD-Quality.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://iconape.com/wp-content/uploads/1/11/gmail-02.png',
          }}
          style={{width: 50, height: 50}}
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.5bcfacee5e112f63d3079b6239171e2d?rik=vXz%2b9lddkUYF6Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fMcL%2fx8R%2fMcLx8RXqi.png&ehk=7LrOc7oInSMF%2fUv421DLC3T7LIlzhWOGuOE82tjMg6o%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contact"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={60}
           style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
          
          placeholder="About ME"
          keyboardType="numeric"
        />
        </View>



      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   textInput: {
      borderWidth: 1,
      margin: 12,
    padding: 2,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
  }
  
});


export default TextInputExample;