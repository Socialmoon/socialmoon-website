# SocialMoon - Modern Architecture with MongoDB

A modern, full-stack Next.js application with MongoDB integration for dynamic content management.

## 🏗️ Clean Architecture Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # Public pages (home, portfolio, case-studies, services)
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes (REST endpoints)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── favicon.ico        # Favicon
├── components/            # Reusable UI components
│   ├── common/           # Shared components (Hero, Container, etc.)
│   ├── ui/              # Shadcn/UI components
│   └── layout/          # Layout components
├── lib/                   # Business logic & utilities
│   ├── config/           # Application constants & configuration
│   ├── database/         # Database connection & utilities
│   ├── services/         # Business logic services (data access layer)
│   └── utils/            # Utility functions
├── models/               # Mongoose schemas & types
└── types/                # TypeScript type definitions
```

### Key Components

#### **Navigation Structure**
- **Home** (`/`): Landing page with services overview
- **Services** (`/services`): Detailed service offerings
- **Portfolio** (`/portfolio`): Project showcase with case studies
- **Insights** (`/insights`): About company, team, and blog posts
- **Contact** (`/contact`): Contact form and information
- **Admin** (`/admin/dashboard`): Content management dashboard

#### **Database Layer (`src/lib/database/`)**
- `connect.ts`: MongoDB connection utility with connection pooling
- Environment-based configuration
- Automatic reconnection handling

#### **Services (`src/lib/services/`)**
- `services.ts`: Service management operations
- `case-studies.ts`: Case study CRUD operations
- `portfolio.ts`: Portfolio project management
- `home.ts`: Homepage content management
- `about.ts`: About page management
- `blog.ts`: Blog post management
- `contact.ts`: Contact information management
- `messages.ts`: Contact form message handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd socialmoon_next
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/socialmoon
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Start MongoDB:**
   ```bash
   # Using local MongoDB
   mongod

   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

### Collections
- `services`: Service offerings with pricing
- `casestudies`: Detailed project case studies
- `projects`: Portfolio projects
- `homes`: Homepage content (single document)
- `abouts`: About page content (single document)
- `blogs`: Blog content (single document)
- `contacts`: Contact information (single document)
- `messages`: Contact form submissions

### Initial Data Setup
All data is managed through the **Admin Dashboard**. No JSON files are used for data storage - everything is stored directly in MongoDB.

**To add initial data:**
1. Start the application
2. Access `/admin/dashboard`
3. Use the admin interface to add services, case studies, portfolio items, etc.

## 🔧 API Endpoints

### Services
- `GET /api/services` - Get all services
- `PUT /api/services` - Update all services (admin)

### Case Studies
- `GET /api/case-studies` - Get all case studies
- `POST /api/case-studies` - Create new case study
- `PUT /api/case-studies` - Update case studies or single case study
- `DELETE /api/case-studies?id={id}` - Delete case study

### Portfolio
- `GET /api/portfolio` - Get all projects
- `PUT /api/portfolio` - Update all projects (admin)

### Content Management
- `GET|PUT /api/home` - Homepage content
- `GET|PUT /api/about` - About page content
- `GET|PUT /api/blog` - Blog content
- `GET|PUT /api/contact` - Contact information

### Messages
- `GET /api/messages` - Get all messages (admin)
- `POST /api/messages` - Submit contact form
- `PUT /api/messages` - Update message status
- `DELETE /api/messages?id={id}` - Delete message

## 👨‍💼 Admin Dashboard

Access the admin dashboard at `/admin/dashboard` (requires authentication).

### Features:
- **Service Management**: Add/edit/delete services with pricing
- **Case Study Management**: Full CRUD for detailed case studies
- **Portfolio Management**: Manage project showcases
- **Content Management**: Update homepage, about, blog, contact pages
- **Message Management**: View and manage contact form submissions

## 🔄 Migration from JSON Files

The application has been **completely migrated** from JSON file storage to MongoDB:

✅ **Removed JSON Files**: No more `src/data/` directory or JSON file dependencies
✅ **MongoDB Only**: All data storage and retrieval is handled through MongoDB
✅ **Admin Management**: All content is managed through the admin dashboard
✅ **Production Ready**: Scalable database architecture with proper error handling

### Data Management
- **Services**: Add/edit/delete through `/admin/services`
- **Case Studies**: Full CRUD through `/admin/case-studies`
- **Portfolio**: Manage projects through admin interface
- **Content**: Update homepage, about, blog, contact pages
- **Messages**: Contact form submissions are automatically stored

## 🧪 Testing

Test API endpoints:
```bash
# Test services API
curl http://localhost:3000/api/services

# Test portfolio API
curl http://localhost:3000/api/portfolio
```

## 📝 Development

### Adding New Models
1. Create schema in `src/models/`
2. Create service in `src/lib/services/`
3. Create API route in `src/app/api/`
4. Update admin dashboard if needed

### Database Operations
- All database operations are abstracted through service classes
- Services handle validation, error handling, and data transformation
- Models define schema and provide type safety

### Clean Imports
```typescript
// Preferred import patterns
import { connectToDatabase } from '@/lib/database';
import { ServicesService } from '@/lib/services';
import Service, { IService } from '@/models/Service';

// Or import everything from lib
import { connectToDatabase, ServicesService } from '@/lib';
```

## 🚀 Deployment

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/socialmoon
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://yourdomain.com
```

### Build and Deploy
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Follow the established architecture patterns
2. Add proper TypeScript types
3. Include error handling in services
4. Test database operations
5. Update documentation

## 📄 License

This project is licensed under the MIT License.
