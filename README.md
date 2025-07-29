# Claude Code HOS Admin Dashboard

A comprehensive admin dashboard for Hire Overseas talent management platform, replicating the features and design of the original Replit-based application.

## Features

### 📊 Dashboard Overview
- Key metrics and KPIs display
- Real-time data visualization
- Performance tracking

### 👥 Client Management
- Client directory with relationship tracking
- Revenue monitoring (MRR)
- Account manager assignments
- Client status and duration tracking

### 🏢 Contractor Management
- Overseas talent directory
- Performance and engagement tracking
- Salary and employment duration management
- Work status monitoring (Green/Yellow/Red)

### 💻 Equipment & Software
- Asset management and tracking
- Equipment assignments to contractors
- Software license management
- Resource allocation monitoring

### 🚨 Escalations Board
- Issue tracking system
- Priority-based ticket management
- Response time monitoring
- Resolution rate tracking

### 🎨 Design Features
- Modern, responsive design
- Clean and professional UI
- Color-coded status indicators
- Mobile-friendly layout
- Sidebar navigation with sections:
  - Overview
  - Client & Contractor Relations
  - Talent Operations
  - Operations

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid
- **Vanilla JavaScript** - Interactive functionality
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach

## Getting Started

1. Clone this repository
2. Open `index.html` in your web browser
3. Navigate through different sections using the sidebar

## Project Structure

```
claude-code-HOS-admin-dashboard/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── app.js          # JavaScript functionality
│   └── images/             # Image assets
├── pages/                  # Additional page templates
├── components/             # Reusable components
├── data/                   # Sample data files
└── README.md              # This file
```

## Key Components

### Sidebar Navigation
- Organized into logical sections
- Active state indicators
- Badge notifications for escalations
- User profile display

### Metrics Cards
- KPI displays with trend indicators
- Color-coded status icons
- Responsive grid layout

### Data Tables
- Sortable columns
- Status badges and indicators
- Action buttons for each row
- Responsive design

### Status System
- **Active/Inactive** - Client/contractor status
- **Green/Yellow/Red** - Performance indicators
- **High/Medium/Low** - Priority levels
- **Recruiting/Paused** - Current activity status

## Sample Data

The dashboard includes sample data for:
- 5+ clients with realistic company names
- 4+ contractors with roles and assignments
- Equipment assignments and tracking
- Escalation tickets with priority levels

## Customization

### Adding New Views
1. Add navigation link in sidebar
2. Create view function in `app.js`
3. Update `loadView()` switch statement
4. Add corresponding CSS styles

### Modifying Data
Edit the `data` object in `app.js` to customize:
- Client information
- Contractor details
- Equipment assignments
- Escalation tickets

### Styling Changes
Modify `assets/css/styles.css` to:
- Update color scheme
- Change typography
- Adjust layout and spacing
- Add new component styles

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time notifications
- [ ] Advanced filtering and search
- [ ] Export functionality
- [ ] Charts and graphs
- [ ] Dark mode support

## License

This project is created for Hire Overseas talent management platform.

---

*Built with Claude Code for efficient development workflow*