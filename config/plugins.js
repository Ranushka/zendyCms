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
          private_key_id: "c502ea5e6f63328c7cb06fd2bc38df4da2183dbc",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCdq2SPundVvTRC\nFSlrRnPd82kVX0LIPDvnNPlCj9gOvexqQU/7svbE9B/tOvvMJn8RnU9Z6vu1Nt/m\n9+zLSAYpeLxljYZk5p1jBQOj6cwS+1Lfg+QSE9wWIMTwliAhhK2v8YV7U+S0nYqF\n3LuKeWlp6xYBkb06xmDQ/1yW/DWeMHnF1OpDdsJTml8RMohFBxW6AgbORqH6z1d4\nYHP32h0Xu0VOr0v8JG0+phSPwf87ZsAWfec9zULt2A9SiJkIk8eNk3CtEtfO8s9Y\nTOmrWlusyix3BWsVSXvcJo4RMYLdy+eQ/mJR2KW3BBT8rNqC9skOvfYmIavPBtsV\nqUr2WzDJAgMBAAECggEAFKnasw+ABkeWqrZ1SC7ijosREZD7gpyKSUHjDPsnGL+B\nVWeb4OPSfXt1F7UsPNQqwRc5yBIIzPYVIAMMEJQu4o6FOlXy8BRdOhX1JS1F5pLz\niIGTiV768Bd5WAKE0X++95kSolgbWCRxfBuypHJHA2+g4bHE+Af5tkpRSyRgrot8\n75RAYUjGgkFZo7Legtjp8pZ9W/WemeRm/1ilL5Z4C0GtXDLp7rPUUUpCu1BaAuaK\n25X2u17fIT+BdJKptZXk3ZPlIfjL+O+R7Q57yXAUwyaLl9AKQW8NtG4GH7badPkZ\nPkABo4hbAU1Nb17yYCXZC7cOmemdUlp9rn7JpOobBQKBgQDdsIBocydHUQVbrH+X\nu0/IN4XGa+EGhOQXVIhUnDLUsi1RmMq/aCYAsmhGijeSypCoocb0wBtPIamqru6w\nSkUQk1ynhmnXC4oZTBz4kgCSaBdt4tN4E9bYYQehkjX2JyUt5Nq9AjoPS8RPVZZx\nep22LJhKnOF8/K+3Z9JErDhyBwKBgQC2El+vdboKpGaUTnqKjUAOi59k0rwWGGOU\nMv8AvaJ3HDYYu5PU7XotFpTlX0DDrJR3i5Sw8EePtPk6lMEnmI4/LL3X6KMLJMSE\nMaujueMvE8cy3pnKMA3zhjdv8kVuu/hL8p85EikbmbTyEp1Y/pCnxnRoLSzFwgrW\nCTW2cwlSrwKBgB06xWOAM2Ca1SsGLniSEO3kLDZCSRQz92MAGU2WnrkemQ0WKT1d\nfQ1AeLE8TiGDpdkmI3Zn0fH4DUfc8sm5sSuDUocgGNpqwhWdzIAVuA+Vu+kYLCu7\n6erzuC7ceVLwTF2lvBWJsqALrGGNdl2V/i9j59yGnNB+/Kgg/z9gubyHAoGBAIDI\nADwoBh5O6GuQEub7P8rKAUUcNYNfXtfNNkc82rRrFOxriQX7rwZDSa/vrux4nk7s\nQJDic4t3Ey3XV8P9COgwaltUJjbUm9dxFplo+wMqdyRJBPhZAxUz4vRgpbHMbLSz\neOGyMbdfAfiTKA5xiLnTCjVBdsCuHmIEA6T4OyjrAoGAEW+DRxgfdZJF/KU3YHUq\n6FkvJ2s1A7tBnabeWqZ1J/XM/Dno+VZAHHjhnTnSCYN2/8/H846+JsYgjFfaYiK3\nKCeXFlSjfircyScJmRMN0LuN/o1Z+hdpuB3BVE5kdGxGs9b0mp4LGj4iTbWnIckk\n6vcKuT+hLemuc2R85VZLQXE=\n-----END PRIVATE KEY-----\n",
          client_email: "zendy-strapi@echoranu.iam.gserviceaccount.com",
          client_id: "107113667090998749007",
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
