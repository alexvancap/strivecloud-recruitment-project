import * as Font from 'expo-font';

const getFonts = new Promise (
  async () => await Font.loadAsync({
    'Baloo-Reg': require('./../assets/fonts/BalooTamma2-Regular.ttf'),
    'Baloo-Semi': require('./../assets/fonts/BalooTamma2-SemiBold.ttf'),
    'Baloo-Med': require('./../assets/fonts/BalooTamma2-Medium.ttf'),
    'Baloo-Bold': require('./../assets/fonts/BalooTamma2-Bold.ttf')

  })
)

export default getFonts