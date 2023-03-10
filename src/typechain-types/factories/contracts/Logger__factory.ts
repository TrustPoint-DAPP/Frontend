/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Logger, LoggerInterface } from "../../contracts/Logger";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OnlyNFTContractsAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "addNFTContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "emitApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "emitTransferBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "emitTransferSingle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "emitURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nftContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461002857600180546001600160a01b03191633179055610536908161002e8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c9081631e7006e71461038857508063205b13af146102e257806355c45fbe1461024f5780638da5cb5b14610227578063ada0f98f146101e8578063bcee3579146100e05763cfac5d7c1461007057600080fd5b346100dc5760203660031901126100dc5761008961044b565b6001600160a01b0391826001541633036100b55750168252816020528120600160ff1982541617905580f35b83517f82b42900000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b5090346100dc5760a03660031901126100dc576100fb61044b565b610103610466565b61010b61047c565b9267ffffffffffffffff906064358281116101e45761012d9036908801610492565b9190926084359081116101e0576101479036908901610492565b949097338a528960205260ff838b205416156101d25750927f3a89e87bc03038fe90003d353eda59019c01666b47406064258eec88d3a4f95996959492826101cc956101bc94519889986001600160a01b0392838092168b521660208a0152169087015260a0606087015260a08601916104c3565b90838203608085015233966104c3565b0390a280f35b825163406ad2fd60e01b8152fd5b8880fd5b8780fd5b5050346102235760203660031901126102235760ff816020936001600160a01b0361021161044b565b16815280855220541690519015158152f35b5080fd5b5050346102235781600319360112610223576020906001600160a01b03600154169051908152f35b50346100dc5760603660031901126100dc5761026961044b565b91610272610466565b90604435928315158094036102de573386528560205260ff8287205416156102d05750519182526001600160a01b038091169216907fb07c21540917d6c26160ba8bb76ed75a69387e4030b1292d8626576ada952b3060203392a480f35b905163406ad2fd60e01b8152fd5b8580fd5b5090346100dc5760a03660031901126100dc576102fd61044b565b91610306610466565b9061030f61047c565b903386528560205260ff84872054161561037a57508251936001600160a01b03928380921686521660208501521690820152606435606082015260843560808201527fb5f694465623d21365f3213ba19d566f9c4da6320860cf276fbd06d6c8ef79b260a03392a280f35b835163406ad2fd60e01b8152fd5b9190503461044757826003193601126104475780359067ffffffffffffffff928383116102de57366023840112156102de57828201359384116102de5736602485850101116102de573386528560205260ff85872054161561043b5750507f48320a3d694934f39244b1452ac1eb0c086f718a40d8db923295cdab584a9c87908260248551926020845282602085015201858301378484848301015260243593813394601f80199101168101030190a380f35b63406ad2fd60e01b8152fd5b8380fd5b600435906001600160a01b038216820361046157565b600080fd5b602435906001600160a01b038216820361046157565b604435906001600160a01b038216820361046157565b9181601f840112156104615782359167ffffffffffffffff8311610461576020808501948460051b01011161046157565b90918281527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83116104615760209260051b80928483013701019056fea2646970667358221220e6c40aac1ded70c7b46d016b70679ca8a18f357a49a62dfba441dfcfdf4145e964736f6c63430008110033";

type LoggerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LoggerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Logger__factory extends ContractFactory {
  constructor(...args: LoggerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Logger> {
    return super.deploy(overrides || {}) as Promise<Logger>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Logger {
    return super.attach(address) as Logger;
  }
  override connect(signer: Signer): Logger__factory {
    return super.connect(signer) as Logger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoggerInterface {
    return new utils.Interface(_abi) as LoggerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Logger {
    return new Contract(address, _abi, signerOrProvider) as Logger;
  }
}
