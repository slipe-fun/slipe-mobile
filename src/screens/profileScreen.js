import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.white }}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
});

export default ProfileScreen; 
