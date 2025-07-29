// Enhanced HOS Admin Dashboard with Full Functionality
// Current view state
let currentView = 'clients';
let editingItem = null;
let confirmationCallback = null;

// Sample data for the dashboard with unique IDs
const data = {
    clients: [
        {
            id: 1,
            name: 'Access Labs',
            avatar: 'AL',
            status: 'active',
            recruiting: true,
            contractors: 2,
            mrr: 5000,
            accountManager: 'James Gutierrez',
            duration: '4 days',
            lastTouchpoint: 'Never',
            email: 'contact@accesslabs.com',
            phone: '+1 (555) 123-4567',
            startDate: '2024-01-15'
        },
        {
            id: 2,
            name: 'ALISA COHN',
            avatar: 'AC',
            status: 'active',
            recruiting: false,
            contractors: 2,
            mrr: 3700,
            accountManager: 'Harlan Rappaport',
            duration: '7 mo',
            lastTouchpoint: '4 days ago',
            email: 'alisa@alisacohn.com',
            phone: '+1 (555) 234-5678',
            startDate: '2023-06-10'
        },
        {
            id: 3,
            name: 'ANECDOTE LABS',
            avatar: 'AL',
            status: 'active',
            recruiting: true,
            contractors: 2,
            mrr: 2600,
            accountManager: 'James Gutierrez',
            duration: '1 mo',
            lastTouchpoint: '4 days ago',
            email: 'hello@anecdotelabs.com',
            phone: '+1 (555) 345-6789',
            startDate: '2024-06-20'
        },
        {
            id: 4,
            name: 'ARCH LENDING',
            avatar: 'AL',
            status: 'active',
            recruiting: false,
            contractors: 1,
            mrr: 3000,
            accountManager: 'James Gutierrez',
            duration: '7 mo',
            lastTouchpoint: '4 days ago',
            email: 'info@archlending.com',
            phone: '+1 (555) 456-7890',
            startDate: '2023-06-15'
        },
        {
            id: 5,
            name: 'AUGUST INNOVATION (Fra Health)',
            avatar: 'AI',
            status: 'active',
            recruiting: true,
            contractors: 5,
            mrr: 12875,
            accountManager: 'James Gutierrez',
            duration: '7 mo',
            lastTouchpoint: '4 days ago',
            email: 'contact@augustinnovation.com',
            phone: '+1 (555) 567-8901',
            startDate: '2023-06-01'
        }
    ],
    contractors: [
        {
            id: 1,
            name: 'Aaron James Zosimo',
            avatar: 'AZ',
            role: 'Accounting Specialist',
            status: 'active',
            client: 'MANTEGRO CAPITAL',
            clientId: 1,
            salary: 1600,
            workStatus: 'Green',
            duration: '4 months',
            eodStreak: '1 days',
            email: 'aaron@hireoverseas.com',
            startDate: '2024-03-01',
            skills: ['QuickBooks', 'Excel', 'Financial Analysis']
        },
        {
            id: 2,
            name: 'Abby Laine Mendez',
            avatar: 'AM',
            role: 'Content Assistant - Travel Media & Video',
            status: 'active',
            client: 'ANECDOTE LABS',
            clientId: 3,
            salary: 1500,
            workStatus: 'Yellow',
            duration: '1 months',
            eodStreak: '2 days',
            email: 'abby@hireoverseas.com',
            startDate: '2024-06-01',
            skills: ['Content Writing', 'Video Editing', 'Travel Planning']
        },
        {
            id: 3,
            name: 'Aczabelle Anne Docabo',
            avatar: 'AD',
            role: 'Virtual Assistant',
            status: 'active',
            client: 'WILDCARD INTROS',
            clientId: 2,
            salary: 1500,
            workStatus: 'Green',
            duration: '4 months',
            eodStreak: '2 days',
            email: 'aczabelle@hireoverseas.com',
            startDate: '2024-03-01',
            skills: ['Admin Support', 'Calendar Management', 'Customer Service']
        },
        {
            id: 4,
            name: 'Alicia Anne De Ocampo',
            avatar: 'AO',
            role: 'SEO Manager',
            status: 'active',
            client: 'LELAND',
            clientId: 4,
            salary: 1500,
            workStatus: 'Yellow',
            duration: '0 months',
            eodStreak: '8 days',
            email: 'alicia@hireoverseas.com',
            startDate: '2024-07-01',
            skills: ['SEO', 'Google Analytics', 'Content Strategy']
        }
    ],
    equipment: [
        {
            id: 1,
            equipment: 'Lenovo ThinkPad X1',
            category: 'laptop',
            assignedTo: 'Aaron James Zosimo',
            assignedToId: 1,
            client: 'MANTEGRO CAPITAL',
            clientId: 1,
            status: 'active',
            source: 'Rental',
            serialNumber: 'LNV-001-2024',
            assignedDate: '2024-03-01'
        },
        {
            id: 2,
            equipment: 'MacBook Pro 13"',
            category: 'laptop',
            assignedTo: 'Carmela (Carmie) Barquin',
            assignedToId: 2,
            client: 'TRG (National Resource Group)',
            clientId: 2,
            status: 'assigned',
            source: 'Rental',
            serialNumber: 'MBP-002-2024',
            assignedDate: '2024-04-15'
        },
        {
            id: 3,
            equipment: 'Dell XPS 15',
            category: 'laptop',
            assignedTo: 'Ruby Joy Madamba',
            assignedToId: 3,
            client: 'SONIC',
            clientId: 3,
            status: 'assigned',
            source: 'Rental',
            serialNumber: 'DLL-003-2024',
            assignedDate: '2024-05-01'
        }
    ],
    escalations: [
        {
            id: 10,
            title: 'Contractor Payment Issue',
            description: 'Sarah Chen reports payment delay for October invoice. Client payment received but not processed.',
            priority: 'high',
            status: 'open',
            submittedBy: 'Sarah Chen',
            client: 'MANTEGRO CAPITAL',
            clientId: 1,
            timeAgo: '1 hours ago',
            category: 'payment',
            createdDate: new Date('2024-07-24T08:00:00')
        },
        {
            id: 11,
            title: 'Equipment Request',
            description: 'Mike Rodriguez needs upgraded laptop for video editing tasks. Current equipment insufficient.',
            priority: 'medium',
            status: 'open', 
            submittedBy: 'Mike Rodriguez',
            client: 'ANECDOTE LABS',
            clientId: 3,
            timeAgo: '1 hours ago',
            category: 'equipment',
            createdDate: new Date('2024-07-24T09:00:00')
        },
        {
            id: 12,
            title: 'Training Request',
            description: 'Elena Vasquez requests training on new content management system for MarketingPro account.',
            priority: 'low',
            status: 'open',
            submittedBy: 'Elena Vasquez',
            client: 'ARCH LENDING',
            clientId: 4,
            timeAgo: '1 hours ago',
            category: 'training',
            createdDate: new Date('2024-07-24T10:00:00')
        }
    ]
};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeModals();
    initializeSearch();
    loadView('clients');
    loadDataFromStorage();
});

// Save data to localStorage
function saveDataToStorage() {
    try {
        localStorage.setItem('hosAdminData', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving data to localStorage:', error);
    }
}

// Load data from localStorage
function loadDataFromStorage() {
    try {
        const savedData = localStorage.getItem('hosAdminData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            Object.assign(data, parsedData);
            loadView(currentView); // Refresh current view
        }
    } catch (error) {
        console.error('Error loading data from localStorage:', error);
    }
}

// Navigation handling
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const view = this.getAttribute('href').replace('#', '');
            loadView(view);
        });
    });
}

// Modal handling
function initializeModals() {
    // Close modals when clicking outside or on close button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
        if (e.target.classList.contains('close')) {
            closeModal(e.target.closest('.modal').id);
        }
    });

    // Form submissions
    document.getElementById('addClientForm').addEventListener('submit', handleAddClient);
    document.getElementById('addContractorForm').addEventListener('submit', handleAddContractor);
    document.getElementById('addEquipmentForm').addEventListener('submit', handleAddEquipment);
    document.getElementById('createEscalationForm').addEventListener('submit', handleCreateEscalation);

    // ESC key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-bar input');
    let searchTimeout;

    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value.toLowerCase());
        }, 300);
    });
}

function performSearch(query) {
    if (!query) {
        loadView(currentView);
        return;
    }

    let results = [];
    const searchFields = ['name', 'role', 'client', 'status', 'accountManager'];
    
    switch (currentView) {
        case 'clients':
        case 'dashboard':
            results = data.clients.filter(item => 
                searchFields.some(field => 
                    item[field] && item[field].toLowerCase().includes(query)
                )
            );
            renderClientsTable(results);
            break;
        case 'contractors':
            results = data.contractors.filter(item => 
                searchFields.some(field => 
                    item[field] && item[field].toLowerCase().includes(query)
                )
            );
            renderContractorsTable(results);
            break;
        case 'equipment':
            results = data.equipment.filter(item => 
                ['equipment', 'assignedTo', 'client', 'category'].some(field => 
                    item[field] && item[field].toLowerCase().includes(query)
                )
            );
            renderEquipmentTable(results);
            break;
        case 'escalations':
            results = data.escalations.filter(item => 
                ['title', 'description', 'submittedBy', 'client'].some(field => 
                    item[field] && item[field].toLowerCase().includes(query)
                )
            );
            renderEscalationsTable(results);
            break;
    }
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Populate select options for certain modals
        if (modalId === 'addEquipmentModal') {
            populateEquipmentSelects();
        } else if (modalId === 'createEscalationModal') {
            populateEscalationSelects();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // Reset forms
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
            clearValidationErrors(form);
        }
        
        editingItem = null;
    }
}

// Toast notifications
function showToast(title, message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toastId = 'toast-' + Date.now();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = toastId;
    
    const iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="toast-icon ${iconMap[type]}"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <i class="toast-close fas fa-times" onclick="removeToast('${toastId}')"></i>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => removeToast(toastId), 5000);
}

function removeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.style.animation = 'toastSlideOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    clearValidationErrors(form);
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showFieldError(input, 'This field is required');
            isValid = false;
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    field.parentNode.appendChild(errorDiv);
}

function clearValidationErrors(form) {
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-message').forEach(el => el.remove());
}

// Form handlers
function handleAddClient(e) {
    e.preventDefault();
    
    if (!validateForm(e.target)) return;
    
    const formData = new FormData(e.target);
    const newClient = {
        id: Date.now(),
        name: formData.get('clientName'),
        avatar: formData.get('clientAvatar') || formData.get('clientName').substring(0, 2).toUpperCase(),
        status: formData.get('clientStatus'),
        recruiting: formData.get('clientRecruiting') === 'true',
        contractors: 0,
        mrr: parseInt(formData.get('clientMRR')) || 0,
        accountManager: formData.get('clientAccountManager'),
        duration: '0 days',
        lastTouchpoint: 'Never',
        email: '',
        phone: '',
        startDate: new Date().toISOString().split('T')[0]
    };
    
    if (editingItem) {
        const index = data.clients.findIndex(c => c.id === editingItem.id);
        data.clients[index] = { ...editingItem, ...newClient, id: editingItem.id };
        showToast('Success', 'Client updated successfully');
    } else {
        data.clients.push(newClient);
        showToast('Success', 'Client added successfully');
    }
    
    saveDataToStorage();
    loadView(currentView);
    closeModal('addClientModal');
}

function handleAddContractor(e) {
    e.preventDefault();
    
    if (!validateForm(e.target)) return;
    
    const formData = new FormData(e.target);
    const newContractor = {
        id: Date.now(),
        name: formData.get('contractorName'),
        avatar: formData.get('contractorAvatar') || formData.get('contractorName').substring(0, 2).toUpperCase(),
        role: formData.get('contractorRole'),
        status: formData.get('contractorStatus'),
        client: formData.get('contractorClient'),
        salary: parseInt(formData.get('contractorSalary')) || 0,
        workStatus: formData.get('contractorWorkStatus'),
        duration: '0 months',
        eodStreak: '0 days',
        email: formData.get('contractorEmail') || '',
        startDate: new Date().toISOString().split('T')[0],
        skills: []
    };
    
    if (editingItem) {
        const index = data.contractors.findIndex(c => c.id === editingItem.id);
        data.contractors[index] = { ...editingItem, ...newContractor, id: editingItem.id };
        showToast('Success', 'Contractor updated successfully');
    } else {
        data.contractors.push(newContractor);
        showToast('Success', 'Contractor added successfully');
    }
    
    saveDataToStorage();
    loadView(currentView);
    closeModal('addContractorModal');
}

function handleAddEquipment(e) {
    e.preventDefault();
    
    if (!validateForm(e.target)) return;
    
    const formData = new FormData(e.target);
    const newEquipment = {
        id: Date.now(),
        equipment: formData.get('equipmentName'),
        category: formData.get('equipmentCategory'),
        assignedTo: formData.get('equipmentAssignedTo'),
        client: formData.get('equipmentClient'),
        status: formData.get('equipmentAssignedTo') ? 'assigned' : 'available',
        source: formData.get('equipmentSource'),
        serialNumber: formData.get('equipmentSerialNumber') || '',
        assignedDate: new Date().toISOString().split('T')[0]
    };
    
    if (editingItem) {
        const index = data.equipment.findIndex(e => e.id === editingItem.id);
        data.equipment[index] = { ...editingItem, ...newEquipment, id: editingItem.id };
        showToast('Success', 'Equipment updated successfully');
    } else {
        data.equipment.push(newEquipment);
        showToast('Success', 'Equipment added successfully');
    }
    
    saveDataToStorage();
    loadView(currentView);
    closeModal('addEquipmentModal');
}

function handleCreateEscalation(e) {
    e.preventDefault();
    
    if (!validateForm(e.target)) return;
    
    const formData = new FormData(e.target);
    const newEscalation = {
        id: Date.now(),
        title: formData.get('escalationTitle'),
        description: formData.get('escalationDescription'),
        priority: formData.get('escalationPriority'),
        status: 'open',
        submittedBy: formData.get('escalationSubmittedBy'),
        client: formData.get('escalationClient'),
        timeAgo: '0 minutes ago',
        category: formData.get('escalationCategory'),
        createdDate: new Date()
    };
    
    data.escalations.push(newEscalation);
    
    // Update badge count
    const badge = document.querySelector('.sidebar-nav .badge');
    if (badge) {
        badge.textContent = data.escalations.filter(e => e.status === 'open').length;
    }
    
    saveDataToStorage();
    showToast('Success', 'Escalation ticket created successfully');
    loadView(currentView);
    closeModal('createEscalationModal');
}

// Populate select options
function populateEquipmentSelects() {
    const contractorSelect = document.getElementById('equipmentAssignedTo');
    const clientSelect = document.getElementById('equipmentClient');
    
    // Clear existing options
    contractorSelect.innerHTML = '<option value="">Select Contractor</option>';
    clientSelect.innerHTML = '<option value="">Select Client</option>';
    
    // Populate contractors
    data.contractors.forEach(contractor => {
        const option = document.createElement('option');
        option.value = contractor.name;
        option.textContent = contractor.name;
        contractorSelect.appendChild(option);
    });
    
    // Populate clients
    data.clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.name;
        option.textContent = client.name;
        clientSelect.appendChild(option);
    });
}

function populateEscalationSelects() {
    const clientSelect = document.getElementById('escalationClient');
    
    // Clear existing options
    clientSelect.innerHTML = '<option value="">Select Client</option>';
    
    // Populate clients
    data.clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client.name;
        option.textContent = client.name;
        clientSelect.appendChild(option);
    });
}

// Load different views
function loadView(view) {
    currentView = view;
    const searchInput = document.querySelector('.search-bar input');
    searchInput.value = '';
    
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
    
    // Update action buttons
    updateActionButtons();
}

function updateActionButtons() {
    const actionButtons = document.querySelector('.section-actions');
    const buttonText = {
        'clients': 'Add Client',
        'contractors': 'Add Contractor', 
        'equipment': 'Add Equipment',
        'escalations': 'Create Ticket'
    };
    
    const modalIds = {
        'clients': 'addClientModal',
        'contractors': 'addContractorModal',
        'equipment': 'addEquipmentModal', 
        'escalations': 'createEscalationModal'
    };
    
    const addButton = actionButtons.querySelector('.btn-primary');
    if (addButton && buttonText[currentView]) {
        addButton.innerHTML = `<i class="fas fa-plus"></i> ${buttonText[currentView]}`;
        addButton.onclick = () => openModal(modalIds[currentView]);
    }
}

// View functions
function loadClientsView() {
    updatePageTitle('Client Directory', 'Manage client relationships, track revenue, and monitor satisfaction');
    
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Total Clients</span>
                <div class="metric-icon primary">
                    <i class="fas fa-building"></i>
                </div>
            </div>
            <div class="metric-value">${data.clients.length}</div>
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
            <div class="metric-value">$${data.clients.reduce((sum, c) => sum + c.mrr, 0).toLocaleString()}</div>
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
            <div class="metric-value">$${data.clients.filter(c => c.recruiting).reduce((sum, c) => sum + c.mrr, 0).toLocaleString()}</div>
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
    
    renderClientsTable(data.clients);
}

function renderClientsTable(clients) {
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
            ${clients.map(client => `
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
                            <button class="action-btn view" onclick="viewClientDetails(${client.id})">View</button>
                            <button class="action-btn edit" onclick="editClient(${client.id})">Edit</button>
                            <button class="action-btn delete" onclick="deleteClient(${client.id})">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

function loadContractorsView() {
    updatePageTitle('Contractor Directory', 'Manage your overseas talent, track performance, and monitor engagement');
    
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Total Monthly Salary</span>
                <div class="metric-icon success">
                    <i class="fas fa-dollar-sign"></i>
                </div>
            </div>
            <div class="metric-value">$${data.contractors.reduce((sum, c) => sum + c.salary, 0).toLocaleString()}</div>
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
            <div class="metric-value">${data.contractors.filter(c => c.status === 'active').length}</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +${data.contractors.filter(c => c.status === 'active').length - 69} this month
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">On Leave</span>
                <div class="metric-icon warning">
                    <i class="fas fa-user-clock"></i>
                </div>
            </div>
            <div class="metric-value">${data.contractors.filter(c => c.status === 'on-leave').length}</div>
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
            <div class="metric-value">${data.contractors.filter(c => c.workStatus === 'Red').length}</div>
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
    
    renderContractorsTable(data.contractors);
}

function renderContractorsTable(contractors) {
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
            ${contractors.map(contractor => `
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
                            <button class="action-btn view" onclick="viewContractorDetails(${contractor.id})">View</button>
                            <button class="action-btn edit" onclick="editContractor(${contractor.id})">Edit</button>
                            <button class="action-btn delete" onclick="deleteContractor(${contractor.id})">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

function loadEquipmentView() {
    updatePageTitle('Equipment & Software', 'Track equipment assignments, software licenses, and resource allocation');
    
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Total Equipment</span>
                <div class="metric-icon primary">
                    <i class="fas fa-laptop"></i>
                </div>
            </div>
            <div class="metric-value">${data.equipment.length}</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                +${data.equipment.length} items
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Assigned</span>
                <div class="metric-icon success">
                    <i class="fas fa-check"></i>
                </div>
            </div>
            <div class="metric-value">${data.equipment.filter(e => e.status === 'assigned' || e.status === 'active').length}</div>
            <div class="metric-change positive">
                <i class="fas fa-arrow-up"></i>
                In use
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Available</span>
                <div class="metric-icon info">
                    <i class="fas fa-box"></i>
                </div>
            </div>
            <div class="metric-value">${data.equipment.filter(e => e.status === 'available').length}</div>
            <div class="metric-change neutral">
                <i class="fas fa-minus"></i>
                Ready for assignment
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
    document.getElementById('table-title').textContent = `Equipment Assignments (${data.equipment.length})`;
    
    renderEquipmentTable(data.equipment);
}

function renderEquipmentTable(equipment) {
    const tableHtml = `
        <thead>
            <tr>
                <th>Equipment</th>
                <th>Category</th>
                <th>Assigned To</th>
                <th>Client</th>
                <th>Status</th>
                <th>Source</th>
                <th>Serial Number</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${equipment.map(item => `
                <tr>
                    <td>${item.equipment}</td>
                    <td>
                        <span class="status-badge assigned">${item.category}</span>
                    </td>
                    <td>${item.assignedTo || 'Unassigned'}</td>
                    <td>${item.client || '-'}</td>
                    <td><span class="status-badge ${item.status}">${item.status}</span></td>
                    <td>${item.source}</td>
                    <td>${item.serialNumber || '-'}</td>
                    <td>
                        <div class="table-actions">
                            <button class="action-btn view" onclick="viewEquipmentDetails(${item.id})">View</button>
                            <button class="action-btn edit" onclick="editEquipment(${item.id})">Edit</button>
                            <button class="action-btn delete" onclick="deleteEquipment(${item.id})">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

function loadEscalationsView() {
    updatePageTitle('Escalations Board', 'Track and resolve contractor issues, tickets, and important alerts');
    
    const openTickets = data.escalations.filter(e => e.status === 'open');
    const highPriority = openTickets.filter(e => e.priority === 'high');
    
    const metricsHtml = `
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">Open Tickets</span>
                <div class="metric-icon danger">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
            </div>
            <div class="metric-value">${openTickets.length}</div>
            <div class="metric-change ${openTickets.length > 0 ? 'negative' : 'positive'}">
                <i class="fas fa-arrow-${openTickets.length > 0 ? 'up' : 'down'}"></i>
                ${openTickets.length > 0 ? '+1 new today' : 'All resolved'}
            </div>
        </div>
        
        <div class="metric-card">
            <div class="metric-header">
                <span class="metric-title">High Priority</span>
                <div class="metric-icon warning">
                    <i class="fas fa-fire"></i>
                </div>
            </div>
            <div class="metric-value">${highPriority.length}</div>
            <div class="metric-change ${highPriority.length > 0 ? 'negative' : 'positive'}">
                <i class="fas fa-${highPriority.length > 0 ? 'exclamation' : 'check'}"></i>
                ${highPriority.length > 0 ? 'Needs attention' : 'All handled'}
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
    document.getElementById('table-title').textContent = `Active Escalations (${openTickets.length})`;
    
    renderEscalationsTable(data.escalations);
}

function renderEscalationsTable(escalations) {
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
            ${escalations.map(escalation => `
                <tr class="escalation-row ${escalation.priority}">
                    <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="status-badge ${escalation.priority === 'high' ? 'paused' : escalation.priority === 'medium' ? 'recruiting' : 'active'}" style="text-transform: capitalize;">
                                ${escalation.priority} Priority
                            </span>
                            <strong>#${escalation.id}</strong>
                        </div>
                    </td>
                    <td>
                        <div>
                            <strong>${escalation.title}</strong>
                            <div style="color: #64748b; font-size: 13px; margin-top: 4px;">
                                ${escalation.description.substring(0, 100)}${escalation.description.length > 100 ? '...' : ''}
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
                            <button class="action-btn view" onclick="viewEscalationDetails(${escalation.id})">View</button>
                            <button class="action-btn edit" onclick="assignEscalation(${escalation.id})">Assign</button>
                            <button class="action-btn delete" onclick="resolveEscalation(${escalation.id})">Resolve</button>
                        </div>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    document.getElementById('data-table').innerHTML = tableHtml;
}

// Action functions
function viewClientDetails(id) {
    const client = data.clients.find(c => c.id === id);
    if (!client) return;
    
    const content = `
        <div class="detail-section">
            <div class="detail-section-title">Basic Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Client Name</div>
                    <div class="detail-value">${client.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value">
                        <span class="status-badge ${client.status}">${client.status}</span>
                        ${client.recruiting ? '<span class="status-badge recruiting">Recruiting</span>' : ''}
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Account Manager</div>
                    <div class="detail-value">${client.accountManager}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Monthly Revenue</div>
                    <div class="detail-value price">$${client.mrr.toLocaleString()}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Contact Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Email</div>
                    <div class="detail-value">${client.email || 'Not provided'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Phone</div>
                    <div class="detail-value">${client.phone || 'Not provided'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Start Date</div>
                    <div class="detail-value">${client.startDate || 'Unknown'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Duration</div>
                    <div class="detail-value">${client.duration}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Statistics</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Active Contractors</div>
                    <div class="detail-value">${client.contractors}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Last Touchpoint</div>
                    <div class="detail-value">${client.lastTouchpoint}</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('viewDetailsTitle').innerHTML = '<i class="fas fa-building"></i> Client Details';
    document.getElementById('viewDetailsContent').innerHTML = content;
    document.getElementById('viewDetailsEditBtn').onclick = () => editClient(id);
    openModal('viewDetailsModal');
}

function viewContractorDetails(id) {
    const contractor = data.contractors.find(c => c.id === id);
    if (!contractor) return;
    
    const content = `
        <div class="detail-section">
            <div class="detail-section-title">Basic Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Full Name</div>
                    <div class="detail-value">${contractor.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Role</div>
                    <div class="detail-value">${contractor.role}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Client</div>
                    <div class="detail-value">${contractor.client}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Monthly Salary</div>
                    <div class="detail-value price">$${contractor.salary.toLocaleString()}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Performance & Status</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value">
                        <span class="status-badge ${contractor.status}">${contractor.status}</span>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Work Status</div>
                    <div class="detail-value">
                        <span class="status-badge ${contractor.workStatus.toLowerCase()}">${contractor.workStatus}</span>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">EOD Streak</div>
                    <div class="detail-value">${contractor.eodStreak}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Employment Duration</div>
                    <div class="detail-value">${contractor.duration}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Contact Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Email</div>
                    <div class="detail-value">${contractor.email || 'Not provided'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Start Date</div>
                    <div class="detail-value">${contractor.startDate || 'Unknown'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Skills</div>
                    <div class="detail-value">${contractor.skills ? contractor.skills.join(', ') : 'Not specified'}</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('viewDetailsTitle').innerHTML = '<i class="fas fa-user"></i> Contractor Details';
    document.getElementById('viewDetailsContent').innerHTML = content;
    document.getElementById('viewDetailsEditBtn').onclick = () => editContractor(id);
    openModal('viewDetailsModal');
}

function viewEquipmentDetails(id) {
    const equipment = data.equipment.find(e => e.id === id);
    if (!equipment) return;
    
    const content = `
        <div class="detail-section">
            <div class="detail-section-title">Equipment Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Equipment Name</div>
                    <div class="detail-value">${equipment.equipment}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Category</div>
                    <div class="detail-value">
                        <span class="status-badge assigned">${equipment.category}</span>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Serial Number</div>
                    <div class="detail-value">${equipment.serialNumber || 'Not provided'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Source</div>
                    <div class="detail-value">${equipment.source}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Assignment Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Assigned To</div>
                    <div class="detail-value">${equipment.assignedTo || 'Unassigned'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Client</div>
                    <div class="detail-value">${equipment.client || 'Not assigned'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value">
                        <span class="status-badge ${equipment.status}">${equipment.status}</span>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Assigned Date</div>
                    <div class="detail-value">${equipment.assignedDate || 'Not assigned'}</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('viewDetailsTitle').innerHTML = '<i class="fas fa-laptop"></i> Equipment Details';
    document.getElementById('viewDetailsContent').innerHTML = content;
    document.getElementById('viewDetailsEditBtn').onclick = () => editEquipment(id);
    openModal('viewDetailsModal');
}

function viewEscalationDetails(id) {
    const escalation = data.escalations.find(e => e.id === id);
    if (!escalation) return;
    
    const content = `
        <div class="detail-section">
            <div class="detail-section-title">Escalation Information</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Ticket ID</div>
                    <div class="detail-value">#${escalation.id}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Priority</div>
                    <div class="detail-value">
                        <span class="status-badge ${escalation.priority === 'high' ? 'paused' : escalation.priority === 'medium' ? 'recruiting' : 'active'}">${escalation.priority} Priority</span>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value">
                        <span class="status-badge ${escalation.status}">${escalation.status}</span>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Category</div>
                    <div class="detail-value">${escalation.category}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Issue Description</div>
            <div class="detail-item">
                <div class="detail-label">Title</div>
                <div class="detail-value">${escalation.title}</div>
            </div>
            <div class="detail-item" style="margin-top: 16px;">
                <div class="detail-label">Detailed Description</div>
                <div class="detail-value">${escalation.description}</div>
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-section-title">Submission Details</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">Submitted By</div>
                    <div class="detail-value">${escalation.submittedBy}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Related Client</div>
                    <div class="detail-value">${escalation.client || 'Not specified'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Time Ago</div>
                    <div class="detail-value">${escalation.timeAgo}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Created Date</div>
                    <div class="detail-value">${escalation.createdDate ? new Date(escalation.createdDate).toLocaleDateString() : 'Unknown'}</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('viewDetailsTitle').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Escalation Details';
    document.getElementById('viewDetailsContent').innerHTML = content;
    document.getElementById('viewDetailsEditBtn').onclick = () => assignEscalation(id);
    openModal('viewDetailsModal');
}

// Edit functions
function editClient(id) {
    const client = data.clients.find(c => c.id === id);
    if (!client) return;
    
    editingItem = client;
    
    // Close details modal if open
    closeModal('viewDetailsModal');
    
    // Populate form
    document.getElementById('clientName').value = client.name;
    document.getElementById('clientAvatar').value = client.avatar;
    document.getElementById('clientStatus').value = client.status;
    document.getElementById('clientRecruiting').value = client.recruiting.toString();
    document.getElementById('clientMRR').value = client.mrr;
    document.getElementById('clientAccountManager').value = client.accountManager;
    
    // Update modal title
    document.querySelector('#addClientModal .modal-header h2').innerHTML = '<i class="fas fa-edit"></i> Edit Client';
    document.querySelector('#addClientForm button[type="submit"]').textContent = 'Update Client';
    
    openModal('addClientModal');
}

function editContractor(id) {
    const contractor = data.contractors.find(c => c.id === id);
    if (!contractor) return;
    
    editingItem = contractor;
    
    closeModal('viewDetailsModal');
    
    document.getElementById('contractorName').value = contractor.name;
    document.getElementById('contractorAvatar').value = contractor.avatar;
    document.getElementById('contractorRole').value = contractor.role;
    document.getElementById('contractorClient').value = contractor.client;
    document.getElementById('contractorSalary').value = contractor.salary;
    document.getElementById('contractorStatus').value = contractor.status;
    document.getElementById('contractorWorkStatus').value = contractor.workStatus;
    document.getElementById('contractorEmail').value = contractor.email || '';
    
    document.querySelector('#addContractorModal .modal-header h2').innerHTML = '<i class="fas fa-edit"></i> Edit Contractor';
    document.querySelector('#addContractorForm button[type="submit"]').textContent = 'Update Contractor';
    
    openModal('addContractorModal');
}

function editEquipment(id) {
    const equipment = data.equipment.find(e => e.id === id);
    if (!equipment) return;
    
    editingItem = equipment;
    
    closeModal('viewDetailsModal');
    
    populateEquipmentSelects();
    
    document.getElementById('equipmentName').value = equipment.equipment;
    document.getElementById('equipmentCategory').value = equipment.category;
    document.getElementById('equipmentAssignedTo').value = equipment.assignedTo || '';
    document.getElementById('equipmentClient').value = equipment.client || '';
    document.getElementById('equipmentSource').value = equipment.source;
    document.getElementById('equipmentSerialNumber').value = equipment.serialNumber || '';
    
    document.querySelector('#addEquipmentModal .modal-header h2').innerHTML = '<i class="fas fa-edit"></i> Edit Equipment';
    document.querySelector('#addEquipmentForm button[type="submit"]').textContent = 'Update Equipment';
    
    openModal('addEquipmentModal');
}

// Delete functions
function deleteClient(id) {
    const client = data.clients.find(c => c.id === id);
    if (!client) return;
    
    showConfirmation(
        'Delete Client',
        `Are you sure you want to delete "${client.name}"? This action cannot be undone.`,
        () => {
            data.clients = data.clients.filter(c => c.id !== id);
            saveDataToStorage();
            loadView(currentView);
            showToast('Success', 'Client deleted successfully');
        }
    );
}

function deleteContractor(id) {
    const contractor = data.contractors.find(c => c.id === id);
    if (!contractor) return;
    
    showConfirmation(
        'Delete Contractor',
        `Are you sure you want to delete "${contractor.name}"? This action cannot be undone.`,
        () => {
            data.contractors = data.contractors.filter(c => c.id !== id);
            saveDataToStorage();
            loadView(currentView);
            showToast('Success', 'Contractor deleted successfully');
        }
    );
}

function deleteEquipment(id) {
    const equipment = data.equipment.find(e => e.id === id);
    if (!equipment) return;
    
    showConfirmation(
        'Delete Equipment',
        `Are you sure you want to delete "${equipment.equipment}"? This action cannot be undone.`,
        () => {
            data.equipment = data.equipment.filter(e => e.id !== id);
            saveDataToStorage();
            loadView(currentView);
            showToast('Success', 'Equipment deleted successfully');
        }
    );
}

// Escalation functions
function assignEscalation(id) {
    const escalation = data.escalations.find(e => e.id === id);
    if (!escalation) return;
    
    showToast('Info', `Escalation #${id} assigned to you for resolution`);
}

function resolveEscalation(id) {
    const escalation = data.escalations.find(e => e.id === id);
    if (!escalation) return;
    
    showConfirmation(
        'Resolve Escalation',
        `Mark escalation #${id} as resolved?`,
        () => {
            escalation.status = 'resolved';
            
            // Update badge count
            const badge = document.querySelector('.sidebar-nav .badge');
            if (badge) {
                const openCount = data.escalations.filter(e => e.status === 'open').length;
                badge.textContent = openCount;
                if (openCount === 0) {
                    badge.style.display = 'none';
                }
            }
            
            saveDataToStorage();
            loadView(currentView);
            showToast('Success', 'Escalation resolved successfully');
        }
    );
}

// Confirmation modal
function showConfirmation(title, message, callback) {
    document.getElementById('confirmationTitle').innerHTML = `<i class="fas fa-question-circle"></i> ${title}`;
    document.getElementById('confirmationMessage').textContent = message;
    document.getElementById('confirmationConfirmBtn').onclick = () => {
        callback();
        closeModal('confirmationModal');
    };
    openModal('confirmationModal');
}

// Helper function to update page title
function updatePageTitle(title, subtitle) {
    document.getElementById('page-title').textContent = title;
    document.getElementById('page-subtitle').textContent = subtitle;
}

// Add CSS for toast slide out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes toastSlideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);