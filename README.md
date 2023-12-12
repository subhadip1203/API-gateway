# Project : Async API Gateway

this project is about Async API gateway. the main functinalities I am making are :
1. API Call Forwarding
2. Request Chaining
3. Response Data Cache


### Project structure:

I am testing different approaches . some of those are viable and some are not.
In the "old_codes" I keep all the discarded options (I keep those becase I may need to use some of the functinalities)

the "current" folder consists of current work

```bash
.
├── apiCalls                    # Web Store Ract App with Material UI
│   └── controller              # Main controller of teh project
├── index                       # Entry point of the project
├── config                      # Config file for for API
└── helpers                     # All teh helper functions
    ├── axiosHelper             # -- Axios realted Helper function
    ├── modifyRouteByParam      # -- helper function for URL modification
    └── resultModifier          # -- Helper function for Result modification
```

<br>
There is also a fake python server for testing the project
the folder name is : `fake-server`


### How to run the project

1. Get into current folder : `cd current`
2. Install all nodejs packages : `npm install`
3. Edit config file : `config.js`
4. Run the project in Dev mode : `npm run dev`
4. Run the project in Prod mode : `npm run prod`