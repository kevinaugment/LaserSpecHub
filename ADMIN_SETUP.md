# Admin Account Setup Guide

Complete guide for setting up and managing admin accounts in LaserSpecHub.

## Prerequisites

Before creating an admin account, ensure:

1. ✅ Database is configured (Turso URL and Auth Token in `.env.local`)
2. ✅ Database migrations have been run (`npm run migrate`)
3. ✅ NextAuth is configured (`NEXTAUTH_SECRET` and `NEXTAUTH_URL` set)

## Quick Start

Create an admin account with one command:

```bash
node scripts/create-admin.js admin@example.com SecurePassword123 "Admin Name"
```

## Detailed Steps

### Step 1: Verify Database Connection

Ensure your `.env.local` file contains:

```bash
TURSO_DATABASE_URL="libsql://your-database.turso.io"
TURSO_AUTH_TOKEN="your-auth-token"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### Step 2: Run Database Migrations

If you haven't already, create the database schema:

```bash
npm run migrate
```

This creates the `users` table required for authentication.

### Step 3: Create Admin User

Run the admin creation script:

```bash
node scripts/create-admin.js <email> <password> <name>
```

**Example:**
```bash
node scripts/create-admin.js admin@laserspec.com Admin2024! "Site Administrator"
```

**Parameters:**
- `email` - Admin email address (must be valid email format)
- `password` - Password (minimum 8 characters)
- `name` - Display name for the admin user

### Step 4: Verify Admin Account

The script will output:

```
✅ Admin user created successfully!

📝 Login credentials:
   Email: admin@laserspec.com
   Password: Admin2024!

🔗 Login URL: http://localhost:3000/admin/login

⚠️  Please change the password after first login!
```

### Step 5: Test Login

1. Start the development server (if not running):
   ```bash
   npm run dev
   ```

2. Navigate to admin login:
   ```
   http://localhost:3000/admin/login
   ```

3. Enter the credentials from Step 3

4. You should be redirected to the admin dashboard

## Admin Panel Features

After logging in, admins have access to:

### 1. Dashboard (`/admin`)
- Overview of system statistics
- Recent activity
- Quick actions

### 2. Equipment Management (`/admin/equipment`)
- View all equipment entries
- Edit equipment details
- Add new equipment manually
- Delete equipment
- Upload equipment images

### 3. Bulk Import (`/admin/import`)
- Import multiple equipment from JSON
- Preview before import
- Validation and error handling

### 4. Equipment Submissions (`/admin/submissions`)
- Review user-submitted equipment
- Approve or reject submissions
- Edit submitted data before approval

## Creating Additional Admin Users

To create more admin accounts, simply run the script again with different credentials:

```bash
# Create another admin
node scripts/create-admin.js manager@laserspec.com ManagerPass123 "Equipment Manager"

# Create third admin
node scripts/create-admin.js support@laserspec.com SupportPass123 "Support Admin"
```

## Password Requirements

When creating admin accounts:

- ✅ Minimum 8 characters
- ✅ Recommended: Mix of uppercase, lowercase, numbers, and symbols
- ✅ Avoid common words or patterns
- ✅ Use a password manager for strong passwords

## Production Setup

### Creating Production Admin

For production environments:

1. Set production environment variables in Vercel:
   ```
   TURSO_DATABASE_URL=<production-db-url>
   TURSO_AUTH_TOKEN=<production-token>
   NEXTAUTH_SECRET=<strong-random-secret>
   NEXTAUTH_URL=https://your-domain.com
   ```

2. Run migrations on production database:
   ```bash
   # Set production env vars locally first
   export TURSO_DATABASE_URL="libsql://prod-db.turso.io"
   export TURSO_AUTH_TOKEN="prod-token"
   
   # Run migrations
   npm run migrate
   ```

3. Create production admin:
   ```bash
   node scripts/create-admin.js admin@yourdomain.com VeryStrongPassword123! "Production Admin"
   ```

### Security Best Practices for Production

1. **Strong Passwords**
   - Use 16+ character passwords
   - Include uppercase, lowercase, numbers, and symbols
   - Use a password manager
   - Never reuse passwords

2. **Secure Email**
   - Use a company email domain
   - Enable 2FA on the email account
   - Don't use personal email addresses

3. **Access Control**
   - Limit the number of admin accounts
   - Create separate accounts for each admin (no sharing)
   - Document who has admin access
   - Remove admin access when people leave

4. **Monitoring**
   - Check admin activity logs regularly
   - Monitor failed login attempts
   - Set up alerts for suspicious activity

## Common Issues and Solutions

### Issue: "Missing environment variables"

**Error:**
```
❌ Missing environment variables: TURSO_DATABASE_URL and TURSO_AUTH_TOKEN
```

**Solution:**
1. Check `.env.local` exists in project root
2. Verify variables are set correctly
3. Restart the terminal/process after adding variables

### Issue: "User already exists"

**Error:**
```
❌ User with email admin@example.com already exists
```

**Solution:**
- Use a different email address, OR
- If you need to reset the password, manually delete the user from the database first:

```bash
# Using Turso CLI
turso db shell your-database-name
> DELETE FROM users WHERE email = 'admin@example.com';
> .quit

# Then create the user again
node scripts/create-admin.js admin@example.com NewPassword123 "Admin"
```

### Issue: "Invalid email or password" when logging in

**Possible causes:**

1. **Wrong credentials**
   - Double-check email and password
   - Check for extra spaces
   - Verify caps lock is off

2. **User doesn't exist**
   - Run create-admin script again
   - Check if migrations were applied

3. **Database connection issue**
   - Verify TURSO_DATABASE_URL and TURSO_AUTH_TOKEN
   - Check Turso database is accessible
   - Check Vercel function logs for errors

### Issue: "HTTP 500 Error" when logging in

**Solution:**

1. Check server logs for detailed error messages (look for `[Auth]` prefix)

2. Common causes:
   - Database connection failed
   - `users` table doesn't exist (run migrations)
   - NextAuth configuration error

3. Check Vercel function logs:
   ```
   Deployment → Functions → Click on the error
   ```

## Password Reset (Manual)

Currently, there's no automated password reset. To reset an admin password manually:

### Option 1: Create a new admin with different email

```bash
node scripts/create-admin.js newemail@example.com NewPassword123 "Admin"
```

### Option 2: Update password in database (advanced)

1. Generate a new password hash:
   ```javascript
   // Create a file: generate-hash.js
   const bcrypt = require('bcryptjs');
   const password = 'NewPassword123';
   bcrypt.hash(password, 10).then(hash => console.log(hash));
   ```

2. Run it:
   ```bash
   node generate-hash.js
   ```

3. Update the user in database:
   ```bash
   turso db shell your-database
   > UPDATE users SET password_hash = 'generated-hash-here' WHERE email = 'admin@example.com';
   ```

## Viewing All Admin Users

To see all admin users in the database:

```bash
# Using Turso CLI
turso db shell your-database-name

# List all admin users
> SELECT id, email, name, role, created_at FROM users WHERE role = 'admin';

# Exit
> .quit
```

## Admin Account Management Best Practices

1. **Principle of Least Privilege**
   - Only create admin accounts when necessary
   - Consider creating regular user accounts with limited permissions for most staff

2. **Regular Audits**
   - Review admin accounts quarterly
   - Remove accounts for departed team members
   - Verify all accounts are still needed

3. **Backup Access**
   - Maintain at least 2 admin accounts
   - Store emergency admin credentials securely
   - Document recovery procedures

4. **Logging and Monitoring**
   - Track admin actions
   - Monitor login attempts
   - Set up alerts for unusual activity

## Next Steps

After setting up your admin account:

1. ✅ Test login at `/admin/login`
2. ✅ Explore the admin dashboard
3. ✅ Import equipment data: `node scripts/seed-equipment.js`
4. ✅ Configure additional settings
5. ✅ Create additional admin accounts if needed

## Support

If you encounter issues with admin account setup:

1. Check the troubleshooting section above
2. Review server logs for `[Auth]` prefixed messages
3. Verify environment variables are set correctly
4. Check the main ENV_VARIABLES.md documentation

## Security Checklist

Before going to production:

- [ ] Strong, unique password for all admin accounts
- [ ] Company email addresses used (not personal)
- [ ] Production `NEXTAUTH_SECRET` is different from development
- [ ] Production database is separate from development
- [ ] Limited number of admin accounts created
- [ ] Admin credentials stored securely (password manager)
- [ ] Team members documented who have admin access
- [ ] Backup admin account created
- [ ] Testing performed on production environment

