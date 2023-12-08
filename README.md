# install WDIO
- `npm init wdio .`

# package 
`check for module if present or not` 
- `check "Type"='Module'`  

# tsconfig.json
- `check '"Module": "ESNext"'`
- `check '"resolveJsonModule": True'`
- `Add   '"esModuleInterop": True,'`
- `change '"strict": false'`

# wdio.config.ts
- `check 'project: "./tsconfig.json'`
-  `Add `${process.cwd()}/test/features/**/*.feature` location for storing you FEATURE Files that will Absolute path` 
- `Note 'cwd - current working directory - It is a method'`
-  `Add ` './test/features/step-definition/*.ts' ` location for storing step definition that will be Relative path`