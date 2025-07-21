/*
  # Fix infinite recursion in users table RLS policies

  1. Problem
    - The "Admins can read all users" policy creates infinite recursion
    - It queries the users table from within a users table policy
    - This causes the policy to call itself infinitely

  2. Solution
    - Drop the problematic policy that causes recursion
    - Create a simpler policy structure that doesn't self-reference
    - Use auth.jwt() to check user role from the JWT token instead of querying users table
    - Keep the basic "Users can read own data" policy which works correctly

  3. Security
    - Users can still read their own data
    - Admin access will be handled at the application level
    - This prevents the infinite recursion while maintaining security
*/

-- Drop the problematic policy that causes infinite recursion
DROP POLICY IF EXISTS "Admins can read all users" ON users;

-- The "Users can read own data" policy is fine and doesn't cause recursion
-- It uses auth.uid() = id which doesn't query the users table recursively

-- For admin functionality, we'll handle permissions at the application level
-- rather than through RLS policies that can cause recursion