
# How to Setup a TypeScript + Node Project.

## Setup a Node Project.
Create a Directory/folder with project name.
```
    C:\> mkdir <project name>
    C:\> mkdir NodeProject
    C:\> cd NodeProject
    C:\NodeProject>
```
To initialize node project, use the following command
```
    C:\NodeProject> npm init -y
```

It will create a config file of `package.json`, `package-lock.json`.

##  Installing and configuring TypeScript
Add TypeScript as a dev dependency.
```
    C:\NodeProject> npm install typescript --save-dev
    C:\NodeProject> npm install -g ts-node
```

To configure Typescript, we have to create a `tsconfig.json`, it's a config json file that tells us how the typescript should behave.

To create a TypeScript compiler options,`tsconfig.json`.
```
    C:\NodeProject> npx tsc -init
```
Another command to create a `tsconfig.json` file with some enabled compiler otions.

```
    C:\NodeProject> npx tsc --init --rootDir src --outDir build \
                    --esModuleInterop --resolveJsonModule --lib es6 \
                    --module commonjs --allowJs true --noImplicitAny true
```

it will create a file `tsconfig.json`, also create `src/` directory with index.ts file in it. set rootDir as "src" in tsconfig.json file. 
```
    {
        "compilerOptions": {
            "target": "es5",                          
            "module": "commonjs",                    
            "lib": ["es6"],                     
            "allowJs": true,
            "outDir": "build",                          
            "rootDir": "src",
            "strict": true,         
            "noImplicitAny": true,
            "esModuleInterop": true,
            "resolveJsonModule": true
        }
    }
```

# Installing Express and dependencies

use this command to install express
```
    C:\NodeProject> npm install express
```
To use express in typescript, we need express and node type definition.

```
    C:\NodeProject> npm install -D @types/express @types/node
```

# Run Typescript
to run typescript, use this command.
```
    C:\NodeProject> ts-node <path of typescript file>
    C:\NodeProject> ts-node src 
```

# nodemon Installsation
Nodemon is a tool which helps in development of Node Application.
it will `automatically restart the Node Application` whenever it detect the changes in the files within the project directory.

```
    C:\NodeProject> npm install --save-dev nodemon
```
To run application with nodemon, use this command `nodemon [your-node-app]`

Also, we can create a config json file `nodemon.json` to tell the nodemon the configuration to use while running the application with nodemon.

```
    {
        "watch" : ["< source directory >"],   // tell which directory to detect the file changes.
        "ext": ".ts, .js",                    // extension of the file.
        "exec": "ts-node ./src/index.ts"      // execute run command 
    }

    {
        "watch" : ["src"],
        "ext": ".ts, .js",
        "exec": "ts-node ./src/index.ts"
    }
```
