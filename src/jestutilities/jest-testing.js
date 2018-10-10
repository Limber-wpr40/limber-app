const axios = require('axios');

module.exports ={
handleDirectionChange:(direction) =>{
    if(!direction){
        return ''
    }else{
        return direction
    }

},

handleState:(state) =>{
    if(!state){
        return ''
    }else{
        return state
    }
},

handleOnSwipeEnd:(data) =>{
    if(!data){
        return []
    }else{
        return data
    }
},
handleGeolocation:(position) =>{
    if(!position){
        return {}
    }else{
        return position
    }
},

handleUpdateSettings:(newSettings) =>{
    if(!newSettings){
        return {}
    }else{
        return newSettings
    }
}

}