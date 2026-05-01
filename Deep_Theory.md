#  Day 32 – Frontend Task (20/01/2026)

#  Deep Theory: Navigation in Mobile Applications (React Native)

---

# 🔹 1. Navigation Patterns in Mobile Apps

Navigation patterns define how users move between different screens in a mobile application.

##  Common Navigation Patterns

### 1) Stack Navigation
- Works like a stack (LIFO - Last In First Out)
- Screens are pushed and popped
- Example:
  - Login → Dashboard → Profile → Back

### 2) Tab Navigation
- Bottom or top tabs for switching between main sections
- Common in apps like social media or e-commerce
- Example:
  - Home | Search | Profile

### 3) Drawer Navigation
- Side menu (hamburger menu)
- Used for less frequent navigation
- Example:
  - Settings, Help, Logout

### 4) Modal Navigation
- Popup screen over current screen
- Used for forms, alerts, confirmations

---

# 🔹 2. React Navigation v6 Deep Architecture

React Navigation is a popular library used for navigation in React Native apps.

##  Core Architecture Components

### 1) NavigationContainer
- Root component
- Manages navigation tree and state

```js
import { NavigationContainer } from '@react-navigation/native';

2) Navigator
Defines structure (Stack, Tab, Drawer)

Types:

createNativeStackNavigator()
createBottomTabNavigator()
createDrawerNavigator()

3) Screen
Represents each page/component
<Stack.Screen name="Home" component={HomeScreen} />

4) Navigation Object
Provided automatically to each screen
Used to navigate
navigation.navigate("Profile");
navigation.goBack();
navigation.replace("Login");

5) Route Object
Contains params and screen info
route.params


🔹 3. Stack, Tab, Drawer Navigators

 Stack Navigator :
Linear navigation
Maintains history
Best for flows like login, details
const Stack = createNativeStackNavigator();

 Tab Navigator :
Bottom tabs
Fast switching between screens
const Tab = createBottomTabNavigator();

Features:

Icons
Labels
Independent navigation per tab

 Drawer Navigator :
Sidebar navigation
Hidden menu
const Drawer = createDrawerNavigator();

Features:

Slide-out menu
Custom drawer content


🔹 4. Passing Route Params & Reading State
 Passing Parameters -
navigation.navigate("Profile", {
  userName: "Anjali",
  age: 22
});

 Receiving Parameters -
export default function ProfileScreen({ route }) {
  const { userName, age } = route.params;

  return (
    <Text>{userName} - {age}</Text>
  );
}

 Updating Params -
navigation.setParams({ age: 23 });


🔹 5. Navigation Lifecycle Events

React Navigation provides lifecycle hooks similar to component lifecycle.

 Important Events -
1) Focus
Screen becomes active
useFocusEffect(() => {
  console.log("Screen focused");
});

2) Blur
Screen goes out of focus
navigation.addListener("blur", () => {
  console.log("Screen unfocused");
});

3) State Change
Navigation state updates
navigation.addListener("state", () => {
  console.log("Navigation state changed");
});

4) Before Remove
Triggered before leaving screen
navigation.addListener("beforeRemove", (e) => {
  e.preventDefault();
});

Navigator
Screens
Types of navigators:
Stack (flow)
Tab (main sections)
Drawer (menu)
Params allow data transfer between screens
Lifecycle events help manage screen behavior
