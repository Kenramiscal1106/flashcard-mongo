import { MONGO_URL } from "$env/static/private";
import mongoose from "mongoose";


mongoose.connect(MONGO_URL)