import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BodyMeasurements from '../screens/BodyMeasurements';
import ClothingItemSelect from '../screens/ClothingItemSelect';
import ExploreScreen from '../screens/ExploreScreen';
import FitReferenceInput from '../screens/FitReferenceInput';
import GenderSelectScreen from '../screens/GenderSelectScreen';
import IntroScreen from '../screens/IntroScreen';
import MeasurementIntro from '../screens/MeasurementIntro';
import ReviewScreen from '../screens/ReviewScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="MeasurementIntro" component={MeasurementIntro} />
        <Stack.Screen name="GenderSelectScreen" component={GenderSelectScreen} />
        <Stack.Screen name="ClothingItemSelect" component={ClothingItemSelect} />
        <Stack.Screen name="BodyMeasurements" component={BodyMeasurements} />
        <Stack.Screen name="FitReferenceInput" component={FitReferenceInput} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}