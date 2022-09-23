import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const PriceSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    price: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    useNestedStrict: true
  }
);

export default mongoose.model("Price", PriceSchema);
