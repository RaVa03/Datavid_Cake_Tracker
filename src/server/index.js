import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MemberModel } from "./MemberModel.js";
const app = express();
app.use(cors());
app.use(express.json())

//mongo connection
main().catch((err) => console.log(err, "mongo error"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/members-app");
  console.log("MONGO connection open");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Example API Routes
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const members = await MemberModel.find(); 
      res.json(members);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.post('/add-member', async (req, res) => {
    console.log(`Received data: ${JSON.stringify(req.body)}`);
    const member = new MemberModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      country: req.body.country,
      city: req.body.city,
      image: req.body.image
    });
  
    try {
      const addMember = await member.save();
      res.status(201).json(addMember);
    } 
    catch (err) {
        console.error('Validation Error:', err); // Log full error
        if (err.name === 'ValidationError') {
            const errorMessages = {};
            for (let field in err.errors) {
                errorMessages[field] = err.errors[field].message;
            }
            return res.status(400).json({ errors: errorMessages });
        }
        res.status(500).json({ message: err.message });
    }
  });
// Register the router
app.use('/', router);
  // Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));