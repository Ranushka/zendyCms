const { SERVICEACCOUNT } = process.env;

const serviceAccount = JSON.parse(
  Buffer.from(SERVICEACCOUNT, "base64").toString("ascii")
);

module.exports = {
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "echoranu.appspot.com",
        publicFiles: true,
        uniform: false,
        serviceAccount,
        basePath: "",
      },
    },
  },
};
