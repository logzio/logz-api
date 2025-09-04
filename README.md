# [Logz API Website](https://api-docs.logz.io/docs/logz/logz-io-api)

## Local deployment
1. Run:

```
git clone https://<YOUR-PAS>@github.com/logzio/logz-api.git
```

2. Cd to the root folder:

```
cd logz-api
```

3. Add Docusaurus api plugin:

```
yarn add docusaurus-plugin-openapi-docs
```

```
yarn add docusaurus-theme-openapi-docs
```

4. Start local build:

```
yarn start
```

## Update api specs
1. Follow local deployment instructions

2. Update the api spec under examples/logzio-public-api.yml

3. Delete the relevant mdx file which you updated in the spec

4. Run plugin generate command

```
yarn docusaurus gen-api-docs logz
```

## Adding new pages/categories
1. Follow local deployment instructions

2. Edit the API spec at `examples/logzio-public-api.yml`. Split sections with headers like `# ::::: NAME`. For each new endpoint, set a unique path (`/v1/account-management/time-based-accounts:`) or HTTP methods (`get`, `put`, etc.), add `summary`, and `operationId`.

3. Add the new page or category to `sidebar.js`. Use `"type":"category"` for a new category, and `"type":"doc"` for a new page. ID and label must be unique. The page name should match the operationId you set in the `.yml`, for example, `operationId: updateTimeBasedAccount` should be added to sidebar.js like this: `{"type":"doc","id":"logz/update-time-based-account","label":"Update an account","className":"api-method put"}`

6. Save your changes and run the plugin generate command `yarn docusaurus gen-api-docs logz` to generate the new page you created.


