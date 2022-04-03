module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9c8c40f084833c3c6d4fbcbcbcc34593'),
  },
});
