"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// PostgreSQL connection configuration
const client = new pg_1.Client({
    host: 'your-rds-endpoint.amazonaws.com', // Replace with your RDS endpoint
    port: 5432, // Default PostgreSQL port
    user: 'your_username', // Your PostgreSQL username
    password: 'your_password', // Your PostgreSQL password
    database: 'your_database_name', // Your PostgreSQL database name
});
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log('Connected to PostgreSQL database!');
        // Example query
        const res = yield client.query('SELECT NOW()');
        console.log('Current time:', res.rows[0]);
    }
    catch (error) {
        console.error('Database connection error:', error);
    }
    finally {
        yield client.end(); // Close the connection
    }
});
connectToDatabase();
