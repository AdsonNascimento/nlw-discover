import { Database } from "sqlite3";
import { open } from "sqlite";

export default () => 
  open({
    filename:'./src/db/rocketq.sqlite',
    driver: Database,
  });

  