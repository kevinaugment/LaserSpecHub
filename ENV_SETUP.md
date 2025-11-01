# Environment Setup Guide - 环境配置指南

## 步骤 1: 创建环境变量文件

在项目根目录创建 `.env.local` 文件，并添加以下内容：

```env
# Database Configuration
TURSO_DATABASE_URL="libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io"
TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0NTgyNDgsImlkIjoiZGJjZDA1MGQtNjMzYi00Yjk4LWJiMDMtMjAwMjFjMDU4MjlkIiwicmlkIjoiOTNkMjczNGEtN2U5Yy00NDc5LWFlNGQtMzI5YzM5MDg1M2NiIn0.loQ2FR5vDrDYOVK3FMOMtOzv5gLHx3Pyx1ulyVODB7OXsUMCVxe_2XLqDuX5GxDn3OVYvKr77cV-oVodourKBw"

# NextAuth Configuration
NEXTAUTH_SECRET="laser-spec-hub-super-secret-key-change-in-production-2024"
NEXTAUTH_URL="http://localhost:3000"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 快速创建命令：

```bash
cat > .env.local << 'EOF'
# Database Configuration
TURSO_DATABASE_URL="libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io"
TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjE0NTgyNDgsImlkIjoiZGJjZDA1MGQtNjMzYi00Yjk4LWJiMDMtMjAwMjFjMDU4MjlkIiwicmlkIjoiOTNkMjczNGEtN2U5Yy00NDc5LWFlNGQtMzI5YzM5MDg1M2NiIn0.loQ2FR5vDrDYOVK3FMOMtOzv5gLHx3Pyx1ulyVODB7OXsUMCVxe_2XLqDuX5GxDn3OVYvKr77cV-oVodourKBw"

# NextAuth Configuration
NEXTAUTH_SECRET="laser-spec-hub-super-secret-key-change-in-production-2024"
NEXTAUTH_URL="http://localhost:3000"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
EOF
```

---

## 步骤 2: 运行数据库迁移

```bash
npm run db:migrate
```

这将执行所有8个迁移文件：
- 0001_initial_schema.sql - 基础表结构
- 0002_constraints_and_indexes.sql - 约束和索引
- 0003_triggers.sql - 触发器
- 0004_equipment_submissions.sql - 用户提交表
- 0005_users_and_auth.sql - 用户认证表
- 0006_update_submissions.sql - 提交审核字段
- 0007_user_system.sql - 用户系统表
- 0008_equipment_images.sql - 设备图片表

---

## 步骤 3: 创建初始管理员账号

### 方式1: 使用脚本创建

```bash
node scripts/create-admin.js
```

按照提示输入：
- 管理员邮箱
- 密码 (至少8位)
- 姓名

### 方式2: 手动创建管理员

如果脚本不存在，创建文件 `scripts/create-admin.js`:

```javascript
const { createClient } = require('@libsql/client');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function createAdmin() {
  console.log('🔧 Creating admin account...\n');

  const email = await question('Admin Email: ');
  const password = await question('Admin Password (min 8 chars): ');
  const name = await question('Admin Name: ');

  if (password.length < 8) {
    console.error('❌ Password must be at least 8 characters');
    process.exit(1);
  }

  const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  try {
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert admin user
    await client.execute({
      sql: `INSERT INTO users (email, password_hash, name, role, email_verified) 
            VALUES (?, ?, ?, 'admin', 0)`,
      args: [email, passwordHash, name]
    });

    console.log('\n✅ Admin account created successfully!');
    console.log(`   Email: ${email}`);
    console.log(`   Role: admin`);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

createAdmin();
```

然后运行：
```bash
node scripts/create-admin.js
```

---

## 步骤 4: 启动开发服务器

```bash
npm run dev
```

访问: http://localhost:3000

---

## 步骤 5: 验证功能

### 1. 测试管理员登录
- 访问 http://localhost:3000/admin/login
- 使用创建的管理员账号登录
- 验证可以访问管理后台

### 2. 测试用户注册
- 点击右上角 "Sign Up"
- 注册一个普通用户账号
- 验证自动登录

### 3. 测试Mega Menu导航
- 悬停 "Tools" 菜单，查看计算器工具
- 悬停 "Guides" 菜单，查看指南分类
- 点击链接验证导航

### 4. 测试用户功能
- 访问设备详情页，点击收藏
- 访问对比页面，保存对比
- 访问个人资料页查看收藏和保存的对比

### 5. 测试图片上传 (管理员)
- 使用管理员登录
- 进入 /admin/equipment
- 编辑设备，上传图片
- 在设备详情页验证图片显示

---

## 🎯 完整启动流程 (一键复制)

```bash
# 1. 创建环境变量文件 (复制上面的内容到 .env.local)

# 2. 运行数据库迁移
npm run db:migrate

# 3. 创建管理员账号
node scripts/create-admin.js

# 4. 启动开发服务器
npm run dev
```

---

## 生产环境配置 (Vercel)

### 环境变量设置

在 Vercel Dashboard 的项目设置中添加：

```
TURSO_DATABASE_URL=libsql://wrapsize-database-vercel-icfg-40pfgxlifl73qpqv15kr7dxp.aws-us-east-1.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9...
NEXTAUTH_SECRET=your-production-secret-key-here
NEXTAUTH_URL=https://your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 重要提示：
- ⚠️ **生产环境必须更改 NEXTAUTH_SECRET**
- ⚠️ **更新 NEXTAUTH_URL 为实际域名**
- ⚠️ **图片上传功能需要配置 Vercel Blob Storage**

---

## 常见问题

### Q: 迁移失败怎么办？
A: 检查数据库连接，确保 TURSO_DATABASE_URL 和 TURSO_AUTH_TOKEN 正确

### Q: 管理员创建失败？
A: 确保数据库迁移已成功运行，users 表已创建

### Q: 无法登录？
A: 检查 NEXTAUTH_SECRET 是否配置，浏览器控制台是否有错误

### Q: 图片上传失败？
A: 确保 /public/uploads/equipment 目录存在且有写权限

---

## 下一步

完成配置后，参考以下文档：
- `QUICK_TEST_GUIDE.md` - 功能测试指南
- `DEVELOPMENT_COMPLETION.md` - 完整功能列表
- `README.md` - 项目说明

祝使用愉快！🎉




