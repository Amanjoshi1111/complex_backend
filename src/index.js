import 'dotenv/config';
import connectDB from "./db/index.js";
import app from './app.js';

connectDB().
	then(() => {
		app.on('error', (err)=>{
			console.log("ERROR : ", err);
		})

		app.listen(process.env.PORT || 8000, () => {
			console.log(`SERVER LISTENING TO PORT ${process.env.PORT || 8000}`);
		})
	}).
	catch((err) => {
		console.log("MONGODB CONNECTION FAILED!!! ", err);
	})