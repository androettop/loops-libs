import axios from "axios";

let prefix = process.env.REACT_APP_BACKEND_API_HOST || "";

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(
  (config) => {
    const configParam = config;
    if (configParam.headers.message === "off") {
      delete configParam.headers.message;
      configParam.headers["X-Requested-With"] = "NO MESSAGE";
    }

    if (configParam.api) {
      if (
        process.env[
          `REACT_APP_BACKEND_API_${configParam.api.toUpperCase()}_HOST`
        ]
      ) {
        prefix =
          process.env[
            `REACT_APP_BACKEND_API_${configParam.api.toUpperCase()}_HOST`
          ];
      }
    }

    configParam.headers.Authorization = `Bearer ${localStorage.getItem(
      "token"
    )}`;
    if (!isAbsoluteURLRegex.test(configParam.url)) {
      configParam.url = [prefix, configParam.url].join("");
    }

    return configParam;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response && error.response.status !== 200) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.reload();
          break;
        default:
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
