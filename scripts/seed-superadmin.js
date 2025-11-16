const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Admin schema (copied from models/Admin.ts)
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' },
}, {
  timestamps: true,
});

// Hash password before saving
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
AdminSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);

async function seedSuperAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmoon');

    console.log('Connected to MongoDB');

    // Check if superadmin already exists
    const existingSuperAdmin = await Admin.findOne({ username: 'superadmin' });
    if (existingSuperAdmin) {
      console.log('Superadmin already exists');
      return;
    }

    // Create superadmin
    const superAdmin = new Admin({
      username: 'superadmin',
      password: 'admin123',
      role: 'superadmin'
    });

    await superAdmin.save();
    console.log('Superadmin created successfully!');
    console.log('Username: superadmin');
    console.log('Password: admin123');
    console.log('Role: superadmin');

  } catch (error) {
    console.error('Error seeding superadmin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedSuperAdmin();