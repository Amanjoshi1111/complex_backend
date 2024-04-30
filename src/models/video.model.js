import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
	{
		videoFile: {
			type: String, //cloudinary url
			required: [true, "videoFile is required"],
		},
		thumbnail: {
			type: String, //cloudinary url
			required: [true, "thumbnail is required"],
		},
		owner: {
			type: Schema.type.ObjectId,
			ref: "User",
			required: [true, "owner is required"]
		},
		title: {
			type: String,
			required: [true, "title is required"],
		},
		description: {
			type: String,
			required: true
		},
		duration: {
			type: Number, // Will get from cloudnary
			required: [true, "duration is required"],

		},
		views: {
			type: Number,
			default: 0,
			required: [true, "views is required"]
		},
		isPublished: {
			type: Boolean,
			default: true,
			required: [true, "isPublished is required"]
		}
	},
	{
		timestamps: true
	}
)


videoSchema.plugin(mongooseAggregatePaginate); //helps us to write mongodb aggreagate query
export const Video = mongoose.model("Video", videoSchema);