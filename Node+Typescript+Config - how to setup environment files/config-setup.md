## Setting Up Environment Variables in Node Express typescript: Best Practices

### Setting up node-config

* Installing node config package.
  ```
  npm install config
  npm install dotenv
  ```
* Supported node-config file extensions
  ```
    - .json
    - .json5
    - .hjson
    - .yaml or .yml  > need additional package to parse `npm install js-yaml`
    - .coffee
    - .js
    - .cson
    - .properties
    - .toml
    - .ts
    - .xml
  ```
 ### Default Environment Variable.
 * Creating default environment variables, there’ll be some variables that will remain the same across all environments. For example, the `HOST`​ and `PORT`​ variables.

   Create a config directory and add a `config/default.json` file to it. This will be the default config file and will contain all your default environment variables.

    ```
    config/default.json

    json
    {
        "Server": {
            "host": "localhost",
            "PORT": 8080,
        }
    }
    ```

 * We’ll access it in our app by importing `config` and using the `get` method to access the variables.

    ```
    import config from 'config';

    const PORT = config.get('Server.PORT');

    ```

### Different Environment Configuration File.

 * Create a configuration files in your Node application for `different deployment environments`. With it, you can define a `default configuration file` that you intend to repeat across environments, then extend the default config to `other environments`, such as `development`, `staging`, etc.

 * Create a development environment configuration, add a `config/environment.dev.json` file to it
   
   this will contain all your development environment variables.
    ```
    config/environment.dev.json

    json
    {
        "baseURL": "http://www.fradtDev.com/user"
        "apiToken": "gffghjhfcvghkjvuyra"
    }
    ```

* Create a Production environment configuration, add a `config/environment.prod.json` file to it
   
   this will contain all your production environment variables.
    ```
    config/environment.prod.json

    json
    {
        "baseURL": "http://www.fradt.com/user"
        "apiToken": "gffghjhtchghnuyra"
    }
    ```

### Run Node Application With Environment Configuration File With ts-node.

* Basic command to run ts-node
    ```
    npx ts-node server.ts
    ```
* In order to run application with environment configuration file, we need to set `NODE_ENV = <config_file_name>`.

    ```
    set NODE_ENV=environment.prod&& npx ts-node server.js
    ```
    this command will start the application with production environment configuration.

#### To set root directory for `config` add this line, 
```
process.env["NODE_CONFIG_DIR"] = __dirname + "<folder_path_name>";

eg:
process.env["NODE_CONFIG_DIR"] = __dirname + "\\config";
```