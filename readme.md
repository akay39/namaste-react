#  Namste React
npm : node package manager(offically not confirmed.)

-package.json is a config for npm.(depencies)
    -keeps track of exact version installed.

- install parcel as a dev dependecies(web pack).(also k/a bundler)

- two type of depencies/packages
    -dev depencies (used in development)
    -normal depencies(can be used in production also)
    -we are fetching parel from the npm.

-caret(^): updae the minor version automatically
 and tilde(~): updae the major version automatically

 -another file was added after installing parcel
 i.e. package-lock.json
    -locks the version and keeps the record of it.

-node module is a database.
    -there are so much of folders because parcel has its own dependecies, and those dependicies can have their own depencies.(k/a transitive dependencies) like we use parcel as our dependencies.

- if we have package.json & package-lock.json we can recreate all of the node_module.
    -  push your these two files with the code.

# parcel
    -de build
    -local sever
    -HMR(hot module replacement)
    -file watching algorithm -written in c++
    -faster builds by caching 
    -image optimization
    -minification for production ready app.
    -compression
    -bundling
    - consistent hashing
    -code splitting
    -differetial bundling -support older browsers
    - error handeling
    -host app on https
    -tree shaking(its an algorithm) remove unused code



