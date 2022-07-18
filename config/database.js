module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'rapidx-devportal-cmsv4.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapidb'),
      user: env('DATABASE_USERNAME', 'devportaladmin'),
      password: env('DATABASE_PASSWORD', 'strapi@v4'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
