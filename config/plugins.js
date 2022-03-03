module.exports = {
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "echoranu.appspot.com",
        publicFiles: true,
        uniform: false,
        serviceAccount: {
          type: "service_account",
          project_id: "echoranu",
          private_key_id: process.env.G_API_PRIVATE_KEY_ID,
          private_key: process.env.G_API_PRIVATE_KEY,
          client_email: process.env.G_API_CLIENT_EMAIL,
          client_id: process.env.G_API_CLIENT_ID,
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/zendy-strapi%40echoranu.iam.gserviceaccount.com",
        },
        basePath: "",
      },
    },
  },
};
