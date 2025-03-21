import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI||"mongodb+srv://ChaitanyaBhavar:Chaitanya0000@sattebaji.qyjss.mongodb.net/?retryWrites=true&w=majority&appName=Sattebaji");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
