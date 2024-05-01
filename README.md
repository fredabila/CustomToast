# Custom Toast Message for React Native

This npm package provides a custom toast message component for React Native applications.

## Installation
You can install the package via npm or yarn:

```bash
npm install @fredabila/customtoast
# or
yarn add @fredabila/customtoast
```

### Usage

To use the custom toast message component in your React Native application, follow these steps:

1.  Import the **CustomToast** component:
    

`import CustomToast from '@fredabila/customtoast';   `

2.  Render the **CustomToast** component with the desired message:
    



### Props

The **CustomToast** component accepts the following props:

*   **message**: The text to be displayed in the toast message.
    
*   **duration** (optional): The duration in milliseconds for which the toast message will be visible. Default is 2000 milliseconds.
    

# React Native Custom Toast Message Example

Below is an example of how to use the `CustomToast` component in a React Native application:

```javascript
import React from 'react';
import { View } from 'react-native';
import CustomToast from '@fredabila/customtoast';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomToast message="This is a custom toast message!" duration={3000} />
    </View>
  );
};

export default App;
```

### License

This package is open source and available under the MIT License.