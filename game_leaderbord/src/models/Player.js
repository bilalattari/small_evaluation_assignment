import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  ogCode: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  title: {
    type: String,
    enum: ['Hitman', 'Don', 'Phantom', 'Boogeyman', 'Outsider'],
    default: 'Outsider'
  },
  rank: {
    type: String,
    default: 'Bronze'
  },
  points: {
    type: Number,
    required: true,
    default: 0
  },
  attack: {
    greenBomb: { type: Number, default: 0 },
    blackBomb: { type: Number, default: 0 },
    redBomb: { type: Number, default: 0 }
  },
  defence: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    enum: ['Scull', 'Ripple', 'Jail', 'Active'],
    default: 'Active'
  },
  matches: {
    type: Number,
    default: 0
  },
  won: {
    type: Number,
    default: 0
  },
  approval: {
    type: String,
    enum: ['Approved', 'Pending', 'Rejected'],
    default: 'Pending'
  },
  profilePicture: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
PlayerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Player || mongoose.model('Player', PlayerSchema); 