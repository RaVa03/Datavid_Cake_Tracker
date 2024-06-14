import mongoose from "mongoose"
const memberSchema=new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    country: String,
    city: String
})
export const MemberModel = mongoose.model("Members",memberSchema)