import { Schema, model } from "mongoose";

interface ITires {
  name: string,
  price: number,
  size: number
}

const TireSchema = new Schema<ITires>({
  name: {
    type: String,
    minlength: 3,
    required: [true, 'Обязательное поле'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Обязательное поле'],
    min: [1, 'Минимальная цена должна составлять 1 рубль']
  },
  size: {
    type: Number,
    required: [true, 'Обязательное поле'],
    min: 7,
  }
}, { versionKey: false });

const TiresModel = model('Tire',  TireSchema);

export default TiresModel;
