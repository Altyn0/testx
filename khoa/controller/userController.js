const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const UserProfile = require('../models/userProfile');
const WorkExperience = require('../models/workExperience');
const AdditionalInfo = require('../models/additionalInfo');

// Đăng ký tài khoản
const register = async (req, res) => {
  try {
    const { username, password, fullName, birthDate, placeOfBirth, nationality, educationHistory } = req.body;

    // Kiểm tra xem tên người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Tên người dùng đã tồn tại' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo hồ sơ cá nhân
    const userProfile = new UserProfile({
      fullName,
      birthDate,
      placeOfBirth,
      nationality,
      educationHistory
    });
    await userProfile.save();

    // Tạo người dùng mới
    const user = new User({
      username,
      password: hashedPassword,
      profileID: userProfile._id
    });
    await user.save();

    res.status(201).json({ message: 'Đăng ký thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng ký', error: error.message });
  }
};

// Đăng nhập
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Kiểm tra xem tên người dùng có tồn tại không
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác' });
    }

    // So sánh mật khẩu
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác' });
    }

    // Tạo token
    const token = jwt.sign({ userID: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng nhập', error: error.message });
  }
};

module.exports = { register, login };
