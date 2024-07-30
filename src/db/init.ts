import { client } from "./index";

const createTables = async () => {
  try {
    await client.connect();
    await client.query(`
      DROP TABLE IF EXISTS products CASCADE;
      DROP TABLE IF EXISTS items CASCADE;

      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        price INT NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(50) NOT NULL
      );
      `);
    console.log(`Tables have been created`);
  } catch (error) {
    console.error(`Error creating tables: ${error}`);
  } finally {
    await client.end();
  }
};

createTables();
