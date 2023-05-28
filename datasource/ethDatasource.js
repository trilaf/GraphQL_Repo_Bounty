const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    return this
      .get
      //Insert API Endpoint - For Get Ether Balance for a Single Address
      (`https://api.etherscan.io/api?module=account&action=balance&address=${eth_address}&tag=latest&apikey=VKVZTJD7G6RWFIR8X7P7XSATNZRBIEMTDB`);
  }

  async totalSupplyOfEther() {
    return this
      .get
      //Insert API Endpoint - For Get Total Supply of Ether
      (`https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=VKVZTJD7G6RWFIR8X7P7XSATNZRBIEMTDB`);
  }
}

module.exports = EtherDataSource;
