import ProfilePhoto from "@/components/shared/ProfilePhoto";
import { timeStamp } from "console";
import mongoose, { Document, Model } from "mongoose";

export interface IUser {
    firstName: string,
    lastName: string,
    userId: string,
    profilePhoto?: string,
    bio?: string,
}

export interface IUserDocuments extends IUser, Document {
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },

    ProfilePhoto:{
        type: String,
        default: ""
    },
    bio:{
        type: String,
        default: ""
    }
}, {timestamps: true});

export const User : Model<IUserDocuments> = mongoose.models?.User || mongoose.model<IUserDocuments>("User", userSchema);