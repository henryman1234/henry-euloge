// import mongoose from "mongoose";
// import  dns from "node:dns"


// export async function connectDB () {

//     const uri = process.env.MONGO_URI;

//     if (!uri) throw new Error("There is not a connection's string")

//     try {
//         await mongoose.connect(uri?.trim(), {dbName: "henry-portfolio"})

//         console.log("Successfully connected to Mongo DB")
        
//     } catch (error) {
//         console.error("Connection to mongodb failed!: ", error)
//         process.exit(1)
//     }
// }