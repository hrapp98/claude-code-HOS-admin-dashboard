// Sample data for the dashboard
const data = {
    clients: [
        {
            name: 'Access Labs',
            avatar: 'A',
            status: 'active',
            recruiting: true,
            contractors: 2,
            mrr: 5000,
            accountManager: 'James Gutierrez',
            duration: '4 days',
            lastTouchpoint: 'Never'
        },
        {
            name: 'ALISA COHN',
            avatar: 'AC',
            status: 'active',
            recruiting: false,
            contractors: 2,
            mrr: 3700,
            accountManager: 'Harlan Rappaport',
            duration: '7 mo',
            lastTouchpoint: '4 days ago'
        },
        {
            name: 'ANECDOTE LABS',
            avatar: 'A',
            status: 'active',
            recruiting: true,
            contractors: 2,
            mrr: 2600,
            accountManager: 'James Gutierrez',
            duration: '1 mo',
            lastTouchpoint: '4 days ago'
        },
        {
            name: 'ARCH LENDING',
            avatar: 'A',
            status: 'active',
            recruiting: false,
            contractors: 1,
            mrr: 3000,
            accountManager: 'James Gutierrez',
            duration: '7 mo',
            lastTouchpoint: '4 days ago'
        },
        {
            name: 'AUGUST INNOVATION (Fra Health)',
            avatar: 'AI',
            status: 'active',
            recruiting: true,
            contractors: 5,
            mrr: 12875,
            accountManager: 'James Gutierrez',
            duration: '7 mo',
            lastTouchpoint: '4 days ago'
        }
    ],
    contractors: [
        {
            name: 'Aaron James Zosimo',
            avatar: 'AZ',
            role: 'Accounting Specialist',
            status: 'active',
            client: 'MANTEGRO CAPITAL',
            salary: 1600,
            workStatus: 'Green',
            duration: '4 months',
            eodStreak: '1 days'
        },
        {
            name: 'Abby Laine Mendez',
            avatar: 'AM',
            role: 'Content Assistant - Travel Media & Video',
            status: 'active',
            client: 'ANECDOTE LABS',
            salary: 1500,
            workStatus: 'Yellow',
            duration: '1 months',
            eodStreak: '2 days'
        },
        {
            name: 'Aczabelle Anne Docabo',
            avatar: 'AD',
            role: 'Virtual Assistant',
            status: 'active',
            client: 'WILDCARD INTROS',
            salary: 1500,
            workStatus: 'Green',
            duration: '4 months',
            eodStreak: '2 days'
        },
        {
            name: 'Alicia Anne De Ocampo',
            avatar: 'AO',
            role: 'SEO Manager',
            status: 'active',
            client: 'LELAND',
            salary: 1500,
            workStatus: 'Yellow',
            duration: '0 months',
            eodStreak: '8 days'
        }
    ],
    equipment: [
        {
            equipment: 'Lenovo',
            category: 'laptop',
            assignedTo: 'Aaron James Zosimo',
            client: 'MANTEGRO CAPITAL',
            status: 'active',
            source: 'Rental'
        },
        {
            equipment: 'Serial',
            category: 'laptop',
            assignedTo: 'Carmela (Carmie) Barquin',
            client: 'TRG (National Resource Group)',
            status: 'assigned',
            source: 'Rental'
        },
        {
            equipment: 'Serial',
            category: 'laptop',
            assignedTo: 'Ruby Joy Madamba',
            client: 'SONIC',
            status: 'assigned',
            source: 'Rental'
        }
    ],
    escalations: [
        {
            id: '#10',
            title: 'Contractor Payment Issue',
            description: 'Sarah Chen reports payment delay for October invoice. Client payment received but not processed.',
            priority: 'high',
            status: 'open',
            submittedBy: 'Sarah Chen',
            client: '1',
            timeAgo: '1 hours ago'
        },
        {
            id: '#11',
            title: 'Equipment Request',
            description: 'Mike Rodriguez needs upgraded laptop for video editing tasks. Current equipment insufficient.',
            priority: 'medium',
            status: 'open', 
            submittedBy: 'Mike Rodriguez',
            client: '2',
            timeAgo: '1 hours ago'
        },
        {
            id: '#12',
            title: 'Training Request',
            description: 'Elena Vasquez requests training on new content management system for MarketingPro account.',
            priority: 'low',
            status: 'open',
            submittedBy: 'Elena Vasquez',
            client: '3',
            timeAgo: '1 hours ago'
        }
    ]
};

// Current view state
let currentView = 'clients';

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadView('clients');
});

// Navigation handling
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the view from href
            const view = this.getAttribute('href').replace('#', '');
            loadView(view);
        });
    });
}

// Load different views
function loadView(view) {
    currentView = view;
    
    switch(view) {
        case 'clients':
        case 'dashboard':
            loadClientsView();
            break;
        case 'contractors':
            loadContractorsView();
            break;
        case 'equipment':
            loadEquipmentView();
            break;
        case 'escalations':
            loadEscalationsView();
            break;
        default:
            loadClientsView();
    }
}

// Load clients view
function loadClientsView() {
    updatePageTitle('Client Directory', 'Manage client relationships, track revenue, and monitor satisfaction');
    
    // Update metrics
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Total Clients</span>
                <div class="metric-icon primary">
                    <i class="fas fa-building"></i>
                </div>
            </div>
            <div class="metric-value">69</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                No change
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Recent Monthly Revenue</span>
                <div class="metric-icon success">
                    <i class="fas fa-dollar-sign"></i>
                </div>
            </div>
            <div class="metric-value">$189,575</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +12% from last month
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Recruiting Monthly Revenue</span>
                <div class="metric-icon info">
                    <i class="fas fa-chart-line"></i>
                </div>
            </div>
            <div class="metric-value">$74,850</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +8% from last month
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Avg Profit Margin</span>
                <div class="metric-icon warning">
                    <i class="fas fa-percentage"></i>
                </div>
            </div>
            <div class="metric-value">56%</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +3% from last month
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Avg Client Duration</span>
                <div class="metric-icon info">
                    <i class="fas fa-clock"></i>
                </div>
            </div>
            <div class="metric-value">3 months</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                No change
            </div>
        </div>
    `;
    
    document.getElementById('metrics-cards').innerHTML = metricsHtml;
    document.getElementById('table-title').textContent = `All Clients (${data.clients.length})`;
    
    // Update table
    const tableHtml = `
        <thead>
            <tr>
                <th>Client Name</th>
                <th>Status</th>
                <th>Contractors</th>
                <th>MRR</th>
                <th>Last Touchpoint</th>
                <th>Account Manager</th>
                <th>Duration</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${data.clients.map(client => `
                <tr>
                    <td>
                        <div class="client-info">
                            <div class="client-avatar">${client.avatar}</div>
                            <span class="client-name">${client.name}</span>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge ${client.status}">${client.status}</span>
                        ${client.recruiting ? '<span class="status-badge recruiting">Recruiting</span>' : ''}
                    </td>
                    <td>${client.contractors}</td>
                    <td class="price">$${client.mrr.toLocaleString()}</td>
                    <td class="${client.lastTouchpoint === 'Never' ? 'status-badge paused' : ''}">${client.lastTouchpoint}</td>
                    <td>${client.accountManager}</td>
                    <td>
                        <span class="duration-main">${client.duration}</span>
                    </td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn view">View</button>
                            <button class="action-btn edit">Edit</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

// Load contractors view
function loadContractorsView() {
    updatePageTitle('Contractor Directory', 'Manage your overseas talent, track performance, and monitor engagement');
    
    // Update metrics
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Total Monthly Salary</span>
                <div class="metric-icon success">
                    <i class="fas fa-dollar-sign"></i>
                </div>
            </div>
            <div class="metric-value">$111,600</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +5% from last month
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Active</span>
                <div class="metric-icon primary">
                    <i class="fas fa-users"></i>
                </div>
            </div>
            <div class="metric-value">72</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +3 this month
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">On Leave</span>
                <div class="metric-icon warning">
                    <i class="fas fa-user-clock"></i>
                </div>
            </div>
            <div class="metric-value">0</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                No change
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Issues</span>
                <div class="metric-icon danger">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
            </div>
            <div class="metric-value">0</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-down"></i>
                -2 resolved
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Avg Performance</span>
                <div class="metric-icon info">
                    <i class="fas fa-chart-bar"></i>
                </div>
            </div>
            <div class="metric-value">85%</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +2% this month
            </div>
        </div>
    `;
    
    document.getElementById('metrics-cards').innerHTML = metricsHtml;
    document.getElementById('table-title').textContent = `All Contractors (${data.contractors.length})`;
    
    // Update table
    const tableHtml = `
        <thead>
            <tr>
                <th>Contractor</th>
                <th>Role</th>
                <th>Work Status</th>
                <th>Client</th>
                <th>Salary</th>
                <th>Status</th>
                <th>EOD Streak</th>
                <th>Employment Duration</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${data.contractors.map(contractor => `
                <tr>
                    <td>
                        <div class="client-info">
                            <div class="client-avatar">${contractor.avatar}</div>
                            <span class="client-name">${contractor.name}</span>
                        </div>
                    </td>
                    <td>${contractor.role}</td>
                    <td><span class="status-badge ${contractor.status}">${contractor.status}</span></td>
                    <td>${contractor.client}</td>
                    <td class="price">$${contractor.salary}</td>
                    <td><span class="status-badge ${contractor.workStatus.toLowerCase()}">${contractor.workStatus}</span></td>
                    <td>${contractor.eodStreak}</td>
                    <td>
                        <span class="duration-main">${contractor.duration}</span>
                    </td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn view">View</button>
                            <button class="action-btn edit">Edit</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

// Load equipment view
function loadEquipmentView() {
    updatePageTitle('Equipment & Software', 'Track equipment assignments, software licenses, and resource allocation');
    
    // Update metrics
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Total Equipment</span>
                <div class="metric-icon primary">
                    <i class="fas fa-laptop"></i>
                </div>
            </div>
            <div class="metric-value">0</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                No inventory
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Assigned</span>
                <div class="metric-icon success">
                    <i class="fas fa-check"></i>
                </div>
            </div>
            <div class="metric-value">0</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                No assignments
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Available</span>
                <div class="metric-icon info">
                    <i class="fas fa-box"></i>
                </div>
            </div>
            <div class="metric-value">0</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                No available items
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Needs Replacement</span>
                <div class="metric-icon danger">
                    <i class="fas fa-tools"></i>
                </div>
            </div>
            <div class="metric-value">0</div>
            <div class="metric-change positive">
                <i class="fas fa-check"></i>
                All equipment working
            </div>
        </div>
    `;
    
    document.getElementById('metrics-cards').innerHTML = metricsHtml;
    document.getElementById('table-title').textContent = 'Equipment Assignments';
    
    // Update table
    const tableHtml = `
        <thead>
            <tr>
                <th>Equipment</th>
                <th>Category</th>
                <th>Assigned To</th>
                <th>Client</th>
                <th>Status</th>
                <th>Source</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${data.equipment.map(item => `
                <tr>
                    <td>${item.equipment}</td>
                    <td>
                        <span class="status-badge assigned">${item.category}</span>
                    </td>
                    <td>${item.assignedTo}</td>
                    <td>${item.client}</td>
                    <td><span class="status-badge ${item.status}">${item.status}</span></td>
                    <td>${item.source}</td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn view">View</button>
                            <button class="action-btn edit">Edit</button>
                            <button class="action-btn delete">Unassign</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

// Load escalations view
function loadEscalationsView() {
    updatePageTitle('Escalations Board', 'Track and resolve contractor issues, tickets, and important alerts');
    
    // Update metrics
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Open Tickets</span>
                <div class="metric-icon danger">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
            </div>
            <div class="metric-value">3</div>
            <div class="metric-change negative">
                <i class="fas fa-arrow-up"></i>
                +1 new today
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">High Priority</span>
                <div class="metric-icon warning">
                    <i class="fas fa-fire"></i>
                </div>
            </div>
            <div class="metric-value">1</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                Needs attention
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Avg Response Time</span>
                <div class="metric-icon info">
                    <i class="fas fa-clock"></i>
                </div>
            </div>
            <div class="metric-value">2.3 hours</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-down"></i>
                -30min faster
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Resolution Rate</span>
                <div class="metric-icon success">
                    <i class="fas fa-check-circle"></i>
                </div>
            </div>
            <div class="metric-value">87%</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +5% this month
            </div>
        </div>
    `;
    
    document.getElementById('metrics-cards').innerHTML = metricsHtml;
    document.getElementById('table-title').textContent = 'Active Escalations';
    
    // Update table with escalation format
    const tableHtml = `
        <thead>
            <tr>
                <th>Priority & ID</th>
                <th>Issue</th>
                <th>Submitted By</th>
                <th>Time</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${data.escalations.map(escalation => `
                <tr class="escalation-row ${escalation.priority}">
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="status-badge ${escalation.priority === 'high' ? 'paused' : escalation.priority === 'medium' ? 'recruiting' : 'active'}" style="text-transform: capitalize;">
                                ${escalation.priority} Priority
                            </span>
                            <strong>${escalation.id}</strong>
                        </div>
                    </td>
                    <td>
                        <div>
                            <strong>${escalation.title}</strong>
                            <div style="color: #64748b; font-size: 13px; margin-top: 4px;">
                                ${escalation.description}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <strong>Submitted by:</strong> ${escalation.submittedBy}<br>
                            <strong>Client:</strong> ${escalation.client}
                        </div>
                    </td>
                    <td>${escalation.timeAgo}</td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn view">Assign</button>
                            <button class="action-btn view">View</button>
                            <button class="action-btn edit">Resolve</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

// Helper function to update page title
function updatePageTitle(title, subtitle) {
    document.getElementById('page-title').textContent = title;
    document.getElementById('page-subtitle').textContent = subtitle;
}