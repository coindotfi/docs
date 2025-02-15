Below is a comprehensive list of `curl` commands for all of your CoinFi chain RPC endpoints. You can use these examples as a starting point and replace the placeholder values (e.g., `<HEIGHT>`, `<TX_DATA>`, `<QUERY>`, etc.) with your actual parameters.

> **Note:**  
> • Some endpoints (like broadcasting a transaction) may also work via POST with a JSON body.  
> • The examples below assume GET requests with query parameters as indicated by your endpoint list.  
> • Replace `https://rpc.coinfi.zone` with `https://api.coinfi.zone` if you need to use that domain for queries.

---

### 1. ABCI Endpoints

- **ABCI Info**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/abci_info" -H "Accept: application/json"
  ```

- **ABCI Query**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/abci_query?path=<PATH>&data=<DATA>&height=<HEIGHT>&prove=<true|false>" -H "Accept: application/json"
  ```
  _Example:_  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/abci_query?path=/store/accounts/key&data=abcdef&height=1000&prove=true" -H "Accept: application/json"
  ```

---

### 2. Block & Header Endpoints

- **Block (latest or by height)**  
  ```sh
  # Latest block
  curl -X GET "https://rpc.coinfi.zone/block" -H "Accept: application/json"
  
  # Specific height
  curl -X GET "https://rpc.coinfi.zone/block?height=12345" -H "Accept: application/json"
  ```

- **Block by Hash**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/block_by_hash?hash=<BLOCK_HASH>" -H "Accept: application/json"
  ```

- **Block Results**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/block_results?height=12345" -H "Accept: application/json"
  ```

- **Block Search**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/block_search?query=<QUERY>&page=<PAGE>&per_page=<PER_PAGE>&order_by=<ORDER>" -H "Accept: application/json"
  ```
  _Example:_  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/block_search?query='tx.height=12345'&page=1&per_page=30&order_by=asc" -H "Accept: application/json"
  ```

- **Blockchain (range of blocks)**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/blockchain?minHeight=1&maxHeight=100" -H "Accept: application/json"
  ```

- **Header**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/header?height=<HEIGHT>" -H "Accept: application/json"
  ```

- **Header by Hash**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/header_by_hash?hash=<HASH>" -H "Accept: application/json"
  ```

- **Commit**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/commit?height=<HEIGHT>" -H "Accept: application/json"
  ```

---

### 3. Consensus & Genesis Endpoints

- **Consensus Params**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/consensus_params?height=<HEIGHT>" -H "Accept: application/json"
  ```

- **Consensus State**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/consensus_state" -H "Accept: application/json"
  ```

- **Dump Consensus State**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/dump_consensus_state" -H "Accept: application/json"
  ```

- **Genesis**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/genesis" -H "Accept: application/json"
  ```

- **Genesis Chunked**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/genesis_chunked?chunk=<CHUNK>" -H "Accept: application/json"
  ```

---

### 4. Transaction & Broadcast Endpoints

- **Broadcast Evidence**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/broadcast_evidence?evidence=<BASE64_ENCODED_EVIDENCE>" -H "Accept: application/json"
  ```

- **Broadcast TX Async**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/broadcast_tx_async?tx=<TX_DATA>" -H "Accept: application/json"
  ```

- **Broadcast TX Commit**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/broadcast_tx_commit?tx=<TX_DATA>" -H "Accept: application/json"
  ```

- **Broadcast TX Sync**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/broadcast_tx_sync?tx=<TX_DATA>" -H "Accept: application/json"
  ```

- **Check TX**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/check_tx?tx=<TX_DATA>" -H "Accept: application/json"
  ```

- **TX (Get Transaction by Hash)**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/tx?hash=<TX_HASH>&prove=<true|false>" -H "Accept: application/json"
  ```

- **TX Search**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/tx_search?query=<QUERY>&prove=<true|false>&page=<PAGE>&per_page=<PER_PAGE>&order_by=<ORDER>" -H "Accept: application/json"
  ```
  _Example:_  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/tx_search?query='tx.height=12345'&prove=true&page=1&per_page=30&order_by=desc" -H "Accept: application/json"
  ```

---

### 5. Mempool & Health Endpoints

- **Num Unconfirmed TXs**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/num_unconfirmed_txs" -H "Accept: application/json"
  ```

- **Unconfirmed TXs**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/unconfirmed_txs?limit=<LIMIT>" -H "Accept: application/json"
  ```

- **Health**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/health" -H "Accept: application/json"
  ```

- **Status**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/status" -H "Accept: application/json"
  ```

- **Net Info**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/net_info" -H "Accept: application/json"
  ```

---

### 6. Subscription Endpoints

- **Subscribe**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/subscribe?query=<QUERY>" -H "Accept: application/json"
  ```
  _Example:_  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/subscribe?query='tm.event='NewBlock'" -H "Accept: application/json"
  ```

- **Unsubscribe**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/unsubscribe?query=<QUERY>" -H "Accept: application/json"
  ```

- **Unsubscribe All**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/unsubscribe_all" -H "Accept: application/json"
  ```

---

### 7. Validators

- **Validators**  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/validators?height=<HEIGHT>&page=<PAGE>&per_page=<PER_PAGE>" -H "Accept: application/json"
  ```
  _Example:_  
  ```sh
  curl -X GET "https://rpc.coinfi.zone/validators?height=12345&page=1&per_page=30" -H "Accept: application/json"
  ```

---

You now have a full set of `curl` commands for all endpoints. Simply update the placeholder values with your actual parameters as needed. If you have any further questions or need additional customization, feel free to ask!