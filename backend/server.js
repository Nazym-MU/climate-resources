import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI; 
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

const resourceSchema = new mongoose.Schema({
    label: String,
    link: String,
    resourceType: String,
    riskType: [String],
    description: String,
    eligibility: String
}, { collection: 'climate-risk' });

const Resource = mongoose.model('Resource', resourceSchema, 'climate-risk');

// GET all resources
app.get('/climate-risk', async (req, res) => {
    try {
      const resources = await Resource.find();
      res.json(resources);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // POST a new resource
  app.post('/climate-risk', async (req, res) => {
    const { label, link, resourceType, riskType, description, eligibility } = req.body;
    const resource = new Resource({ label, link, resourceType, riskType, description, eligibility });
  
    try {
      const newResource = await resource.save();
      res.status(201).json(newResource);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));