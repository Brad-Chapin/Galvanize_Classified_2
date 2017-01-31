// Update with your config settings.

module.exports = {

  development: {
  client: "pg",
  connection: "postgres://localhost/classifieds_dev"
   },
  test: {
    client: "pg",
    connection: "postgres://localhost/classifieds_test"
   },
  production: { },

};
