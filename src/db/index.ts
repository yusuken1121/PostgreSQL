import { Client, Pool } from "pg";

export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "nagaokayusuke",
  password: "",
  database: "midterm_database",
});

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "nagaokayusuke",
  password: "",
  database: "midterm_database",
  max: 10,
});
