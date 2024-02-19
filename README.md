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
