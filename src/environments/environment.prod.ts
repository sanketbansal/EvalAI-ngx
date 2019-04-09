// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * Environment URL for production
 */
// export const environment = {
//   production: true,
//   api_endpoint: 'https://evalapi.cloudcv.org/api/'
// };

export const environment = {
  production: true,
  api_endpoint: 'http://staging.evalai.cloudcv.org:8000/api/'
};
