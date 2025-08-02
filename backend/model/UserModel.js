import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Better than `new Date()` — dynamic at runtime
  },
});

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  // Only hash if the password was modified (or new)
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (err) {
    next(err);
  }
});

// Optional: method to compare passwords
userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);
