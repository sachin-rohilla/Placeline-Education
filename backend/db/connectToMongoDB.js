import mongoose from "mongoose";

/**
 * This function connects to MongoDB using the URL stored in the environment variable MONGODB_URL.
 * If successful, it logs a success message to the console.
 * If unsuccessful, it logs an error message to the console.
 *
 * @return {Promise<void>} A promise that resolves when the connection is established.
 */
const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB using the URL stored in the environment variable MONGODB_URL
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    // Log an error message to the console if connection to MongoDB fails
    console.log("Error connecting to MongoDB: ", error?.message);
  }
};
export default connectToMongoDB;
