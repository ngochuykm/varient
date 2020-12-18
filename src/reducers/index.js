import { combineReducers } from 'redux'
import SettingBoxReducer from './SettingBoxReducer'
import HomePageReducer from './HomePageReducer'
import PostPageReducer from './PostPageReducer'

export default combineReducers({
    settingbox : SettingBoxReducer,
    homePage : HomePageReducer,
    postPage : PostPageReducer
});