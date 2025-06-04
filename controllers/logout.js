const Token = require('../models/Token'); 

const logoutController = async (req, res) => {
  try {
    
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(400).json({ message: 'No refresh token found in cookies.' });
    }

    
    await Token.deleteOne({ refreshToken });

    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    });

    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    });
    return res.status(200).json({ message: 'Logout successful and refresh token invalidated ✅' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Internal Server Error ❌' });
  }
};

module.exports = logoutController;
