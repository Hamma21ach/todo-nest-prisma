-- Database initialization script
-- This script runs when the PostgreSQL container starts

-- Create the database if it doesn't exist
-- Note: The database is already created by the POSTGRES_DB environment variable
-- This script can be used for additional setup if needed

-- You can add any additional database setup here
-- For example, creating additional schemas, users, or initial data

-- Example: Create a custom schema (optional)
-- CREATE SCHEMA IF NOT EXISTS custom_schema;

-- Example: Insert initial data (optional)
-- INSERT INTO tasks (id, title, description, completed, priority, "createdAt", "updatedAt") 
-- VALUES 
--   ('clx1a2b3c4d5e6f7g8h9i0j1', 'Welcome Task', 'This is your first task!', false, 'MEDIUM', NOW(), NOW()),
--   ('clx1a2b3c4d5e6f7g8h9i0j2', 'Complete Setup', 'Finish setting up your todo app', false, 'HIGH', NOW(), NOW())
-- ON CONFLICT (id) DO NOTHING;
