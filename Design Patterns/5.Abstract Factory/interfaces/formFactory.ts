import { IButton } from "./button";
import { ICheckbox } from "./checkbox";

// Step 3 Create a abstract factory interface
export interface IFormFactory{

    // Step 3.5 - Add Factory methods for products

    createButton():IButton;
    createCheckbox():ICheckbox;
    
}

// Example families
// Form - Btn, Checkbox, Input
// Theme - Card, Box, Btn
// Database - Database, ConnectionPool, Driver
