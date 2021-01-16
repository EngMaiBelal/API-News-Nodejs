
const mongoose = require('mongoose')

var dt = new Date();
dt.setHours( dt.getHours() + 2 );
console.log( dt );

const News = mongoose.model('News',{
    title:{
        type: String,
        required: true,
        unique: true,

    },
    description:{
        type: String,
        required: true
    },
    auther:{
        type: String,
        required: true,
        //* unique:true, *//
    },
    date:{
        type:String,
        default: dt
    }
})

module.exports = News

// var dt = new Date();
// dt.setHours( dt.getHours() + 2 );
// console.log( dt );
// console.log( x );
// console.log( y+2 );
// console.log(dt.getDay()+'day' + dt.getMonth()+ dt.getFullYear()+ dt.getHours())
// console.log( dt.getHours())
// console.log( new Date())



// Fri Jan 15 2021 20:28:58 GMT+0200 (Eastern European Standard Time)
// dt.getDay() dt.getMonth() dt.getFullYear() dt.getHours()