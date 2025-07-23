// import { View,Text,StyleSheet,Image,useWindowDimensions,useColorScheme} from "react-native";

// export default function ProfileCard(){

//    const { width, height } = useWindowDimensions();
//    const isPortrait = height >= width;
//    const scheme = useColorScheme();
//    const isDark = scheme === 'dark';

//     return(
//         <>

//         <View style={[
//         styles.card,
//         { margin: isPortrait ? 30 : 10 },
//         isDark ? styles.darkCard : styles.lightCard
//       ]}>
//           <Image source={require('./assets/profile.webp')} 
//           style={{width:isPortrait? 310:500,height:250,borderTopLeftRadius: 20,borderTopRightRadius: 20}}></Image>
//           <Text style={styles.name}>Jerome Bell</Text>
//           <Text style={styles.about}>Product Designer who focuses on simplicity and usability</Text>
//           <Text style={styles.email}>jeromebell@gmail.com</Text>
//           </View>

//         </>

//     );
// }

// const styles = StyleSheet.create({
//   card: {
//   backgroundColor: 'rgba(144, 238, 144, 0.3)',
//   padding: 20,
//   borderRadius: 20,
//   // shadowColor: '#000',
//   // shadowOpacity: 0.2,
//   // shadowRadius: 5,
//   elevation:3,
// },

//   name:{
//     color:'#eff6e8',
//     fontSize:25,
//     padding:10,
//     fontWeight:'bold'
//   },
//   about:{
//     color:'#eff6e8',
//     fontSize:18,
//     padding:10,
//     fontWeight:'semibold'
//   },
//   email:{
//     fontSize:18,
//     color:'#eff6e8',
//     padding:10,
//     fontWeight:'semibold'
//   },
//   darkCard: {
//     backgroundColor: '#1e1e1e',
//   },
//   lightCard: {
//     backgroundColor: '#d8f3dc',
//   }
// }) 
import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";

interface ProfileCardProps {
  isDark: boolean;
}

export default function ProfileCard({ isDark }: ProfileCardProps) {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <View
      style={[
        styles.card,
        { margin: isPortrait ? 30 : 10 },
        isDark ? styles.darkCard : styles.lightCard
      ]}
    >
      <Image
        source={require('./assets/profile.webp')}
        style={{
          width: isPortrait ? 310 : 500,
          height: 250,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}
      />
      <Text style={[styles.name, isDark ? styles.darkText : styles.lightText]}>
        Jerome Bell
      </Text>
      <Text style={[styles.about, isDark ? styles.darkText : styles.lightText]}>
        Product Designer who focuses on simplicity and usability
      </Text>
      <Text style={[styles.email, isDark ? styles.darkText : styles.lightText]}>
        jeromebell@gmail.com
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },
  darkCard: {
    backgroundColor: '#1e1e1e',
  },
  lightCard: {
    backgroundColor: '#d8f3dc',
  },
  name: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold'
  },
  about: {
    fontSize: 18,
    padding: 10,
    fontWeight: '600'
  },
  email: {
    fontSize: 18,
    padding: 10,
    fontWeight: '600'
  },
  darkText: {
    color: '#eff6e8'
  },
  lightText: {
    color: '#000000'
  }
});
