import mongoose from "mongoose"
function findAge(birthDate){
    const currentDateUTC= new Date();
    const birthDateUTC=new Date(birthDate);

    let age=currentDateUTC.getUTCFullYear()-birthDateUTC.getUTCFullYear();
    const currentMonth = currentDateUTC.getUTCMonth();
    const birthMonth = birthDateUTC.getUTCMonth();
    const currentDay = currentDateUTC.getUTCDate();
    const birthDay = birthDateUTC.getUTCDate();

    if(currentMonth < birthMonth || ((currentMonth===birthMonth) && (currentDay<birthDay))){
        age--;
    }
    if (age>=18)
        return true;
    else
        return false;
}
const memberSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type:Date,
        required: true,
        validate:{
            validator: function(value){return findAge(value)},
            message: 'Age must be at least 18 old'
        }},
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
     },
    image: {
        type: String,
        required: true
    },
})
export const MemberModel = mongoose.model("Members",memberSchema)