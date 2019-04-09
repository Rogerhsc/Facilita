import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";

import Principal from './Principal'
import Secundaria from './Secundaria'
const AppNavigator = createStackNavigator({
    Home: Principal,
    Secu: Secundaria
})

export default createAppContainer(AppNavigator);