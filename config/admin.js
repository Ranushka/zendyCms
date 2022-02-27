module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f494609ab81f34d17e44d37a65f827da'),
  },
});
