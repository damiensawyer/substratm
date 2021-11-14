# Solidity

Working through this tutorial https://www.youtube.com/watch?v=rd0TTLjQLy4&t=1823s
Things which caught me up
- I had to change the imports from his sample file to
``` solidity
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";- 
```

- Don't forget to ```npm install @openzeppelin/contracts```

- When I ran ```truffle console``` it defaulted to truffle(ganash) (in the prompt). When I typed ```migrate``` it tried to use the ganash network which was not defined in truffle-config.js. I created a new Ganash network in the config file like tihs. 
``` json
networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //

    ganache: {
       host: "127.0.0.1",     // Localhost (default: none)
       port: 7545,            // Standard Ethereum port (default: none)
       network_id: "*",       // Any network (default: none)
      },
    
    
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*"-
    
    ... etc 
```


### misc Truffle commands
truffle compile
truffle console (ctrl C twice to exit)
migrate --network ganache  (from within console). Could also just do migrate if the network name in the prompt matches.

