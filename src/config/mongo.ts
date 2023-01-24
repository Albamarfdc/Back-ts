import "dotenv/config";
import { connect } from "mongoose";


async function connectToMongo(): Promise<void>{
    const DB_URI = <string> process.env.DB_URI;
    await connect(DB_URI);
}

export default connectToMongo;