// Extension data
const extensionsData = [
  {
    id: "devlens",
    name: "DevLens",\
    description": \"Quickly inspect page layouts and CSS properties with advanced debugging tools and real-time element analysis\",\
    fullDescription: \"DevLens is a comprehensive developer tool that provides advanced page inspection capabilities. It allows developers to quickly analyze CSS properties, debug layout issues, and understand the structure of web pages. With real-time element analysis, you can hover over any element to see its computed styles, dimensions, and positioning information. The extension also includes features for measuring distances between elements, checking color contrast ratios, and validating accessibility standards.\",\
    icon: "🔍\",\
    isActive: true,\
    color: \"background: linear-gradient(135deg, #3b82f6, #1d4ed8)",
    category: "Developer Tools",
    version: "2.1.4",
    size: "1.8 MB",
    lastUpdated: "3 days ago",
    developer: "DevTools Inc.",
    rating: 4.8,
    ratingCount: 2156,
    permissions: [
      { icon: "fas fa-globe", title: "Access your data for all websites", description: "Read and change all your data on all websites" },
      { icon: "fas fa-eye", title: "Read browsing history", description: "Access your browsing history to provide contextual information" },
      { icon: "fas fa-download", title: "Manage downloads", description: "View and manage your downloads" }
    ],
    settings: [
      { id: "autoInspect", title: "Auto-inspect on hover", description: "Automatically show element details when hovering", type: "toggle", value: true },
      { id: "showDimensions", title: "Show element dimensions", description: "Display width and height information", type: "toggle", value: true },
      { id: "colorFormat", title: "Color format", description: "Choose how colors are displayed", type: "select", value: "hex", options: ["hex", "rgb", "hsl"] }
    ],
    stats: {
      activeTime: "18h",
      usageCount: 342,
      dataProcessed: "4.2MB"
    }
  },
  {
    id: "stylespy",
    name\": "StyleSpy\",\
    description\": "Instantly analyze and copy CSS from any web element with one-click extraction and formatting\",\
    fullDescription: \"StyleSpy revolutionizes the way developers work with CSS by providing instant analysis and extraction capabilities. Simply click on any element to view its complete CSS properties, copy specific styles, or export entire stylesheets. The extension features intelligent CSS optimization, duplicate detection, and the ability to generate clean, production-ready code. Perfect for reverse engineering designs, learning from other websites, or quickly prototyping new layouts.",
    icon: "🎨",
    isActive: true,
    color: "background: linear-gradient(135deg, #8b5cf6, #7c3aed)",
    category: "Developer Tools",
    version: "1.9.2",
    size: "2.1 MB",
    lastUpdated: "1 week ago",
    developer: "CSS Masters",
    rating: 4.6,
    ratingCount: 1834,
    permissions: [
      { icon: "fas fa-globe", title: "Access your data for all websites", description: "Read and modify CSS on all websites" },
      { icon: "fas fa-clipboard", title: "Access clipboard", description: "Copy CSS styles to your clipboard" }
    ],
    settings: [
      { id: "autoFormat", title: "Auto-format CSS", description: "Automatically format extracted CSS", type: "toggle", value: true },
      { id: "includeVendor", title: "Include vendor prefixes", description: "Add browser-specific prefixes", type: "toggle", value: false },
      { id: "cssUnit", title: "Preferred CSS unit", description: "Default unit for measurements", type: "select", value: "px", options: ["px", "rem", "em", "%"] }
    ],
    stats: {
      activeTime: "12h",
      usageCount: 198,
      dataProcessed: "1.7MB"
    }
  },
  {
    id: "speedboost",
    name\": \"SpeedBoost",
    description\": \"Optimizes browser resource usage to boost your page speed and improve overall performance",
    icon: "⚡",
    isActive: false,
    color: "background: linear-gradient(135deg, #f97316, #ea580c)",
    category: "Performance",
  },
  {
    id: "jsonwizard",
    name": \"JSONWizard",\
    description": \"Beautify and validate JSON documents in browser with syntax highlighting and error detection",\
    icon: "📋",
    isActive: true,
    color: "background: linear-gradient(135deg, #ec4899, #db2777)",
    category: "Developer Tools",
  },
  {
    id: "taskmaster",
    name": \"TaskMaster Pro",\
    description":\
      \"Organize and manage tasks with groups and deadlines, featuring smart notifications and progress tracking",
    icon: "📝",
    isActive: true,
    color: "background: linear-gradient(135deg, #6366f1, #4f46e5)",
    category: "Productivity",
  },
  {
    id: "viewportbuddy",
    name": "ViewportBuddy",
    description": "Responsive design testing with device simulation and real-time viewport resizing capabilities",
    icon: "📱",
    isActive: false,
    color: "background: linear-gradient(135deg, #06b6d4, #0891b2)",
    category: "Developer Tools",
  },
  {
    id: "markupnotes",
    name": "Markup Notes",
    description": "Add sticky notes and annotations directly to web pages with collaborative sharing features",
    icon: "📌",
    isActive: true,
    color: "background: linear-gradient(135deg, #2563eb, #1d4ed8)",
    category: "Productivity",
  },
  {
    id: "gridguides",
    name": "GridGuides",
    description": "Overlay responsive grid guides and rulers on any webpage for precise design alignment",
    icon: "⊞",
    isActive: false,
    color: "background: linear-gradient(135deg, #6b7280, #4b5563)",
    category: "Design",
  },
  {
    id: "palettepicker",
    name": "Palette Picker",
    description": "Extract and save color palettes from any webpage with automatic color harmony suggestions",
    icon: "🎨",
    isActive: true,
    color: "background: linear-gradient(135deg, #10b981, #059669)",
    category: "Design",
  },
  {
    id: "linkchecker",
    name": "LinkChecker",
    description": "Scan and validate broken links on any page with comprehensive reporting and fix suggestions",
    icon: "🔗",
    isActive: true,
    color: "background: linear-gradient(135deg, #d97706, #b45309)",
    category: "SEO Tools",
  },
  {
    id: "domsnapshot",
    name": "DOM Snapshot",
    description": "Capture and save DOM structure for debugging with version comparison and change tracking",
    icon: "📸",
    isActive: false,
    color: "background: linear-gradient(135deg, #14b8a6, #0d9488)",
    category: "Developer Tools",
  },
  {
    id: "consoleplus",
    name": "ConsolePlus",
    description": "Enhanced developer console with advanced debugging and logging capabilities plus custom filters",
    icon: "💻",
    isActive: true,
    color: "background: linear-gradient(135deg, #10b981, #047857)",
    category: "Developer Tools",
  },
]

// State management
let extensions = [...extensionsData]
let currentFilter = "all"
let searchQuery = ""
let currentTheme = "dark"
let currentModalExtension = null

// DOM elements
const extensionsGrid = document.getElementById("extensionsGrid")
const searchInput = document.getElementById("searchInput")
const filterTabs = document.querySelectorAll(".filter-tab")
const emptyState = document.getElementById("emptyState")
const emptyMessage = document.getElementById("emptyMessage")
const clearSearchBtn = document.getElementById("clearSearchBtn")
const themeBtn = document.getElementById("themeBtn")
const themeDropdown = document.getElementById("themeDropdown")
const modalOverlay = document.getElementById("modalOverlay")
const modalCloseBtn = document.getElementById("modalCloseBtn")
const modalToggle = document.getElementById("modalToggle")
const modalRemoveBtn = document.getElementById("modalRemoveBtn")
const modalSaveBtn = document.getElementById("modalSaveBtn")
const modalOptionsBtn = document.getElementById("modalOptionsBtn")

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  renderExtensions()
  updateCounts()
  setupEventListeners()
})

// Theme management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark"
  setTheme(savedTheme)
}

function setTheme(theme) {
  currentTheme = theme
  localStorage.setItem("theme", theme)

  // Apply theme to body
  document.body.className = theme === "light" ? "light-theme" : "dark-theme"

  // Update theme button
  const themeIcon = themeBtn.querySelector("i")
  const themeText = themeBtn.querySelector(".theme-text")

  switch (theme) {
    case "light":
      themeIcon.className = "fas fa-sun"
      themeText.textContent = "Light"
      break
    case "dark":
      themeIcon.className = "fas fa-moon"
      themeText.textContent = "Dark"
      break
    case "system":
      themeIcon.className = "fas fa-desktop"
      themeText.textContent = "System"
      break
  }
}

// Event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", handleSearch)

  // Filter tabs
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => handleFilterChange(tab.dataset.filter))
  })

  // Clear search button
  clearSearchBtn.addEventListener("click", clearSearch)

  // Theme selector
  themeBtn.addEventListener("click", toggleThemeDropdown)

  // Theme options
  document.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", () => {
      setTheme(option.dataset.theme)
      hideThemeDropdown()
    })
  })

  // Close theme dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".theme-selector")) {
      hideThemeDropdown()
    }
  })

  // Close button
  document.querySelector(".close-btn").addEventListener("click", () => {
    // In a real extension, this would close the popup
    console.log("Close extension manager")
  })

  // Modal event listeners
  modalCloseBtn.addEventListener("click", closeModal)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal()
    }
  })

  modalToggle.addEventListener("click", () => {
    if (currentModalExtension) {
      toggleExtension(currentModalExtension.id)
      updateModalToggle()
    }
  })

  modalRemoveBtn.addEventListener("click", () => {
    if (currentModalExtension) {
      removeExtension(currentModalExtension.id)
      closeModal()
    }
  })

  modalSaveBtn.addEventListener("click", saveModalSettings)
  modalOptionsBtn.addEventListener("click", openExtensionOptions)

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideThemeDropdown()
      closeModal()
    }
  })
}

function toggleThemeDropdown() {
  themeDropdown.classList.toggle("show")
}

function hideThemeDropdown() {
  themeDropdown.classList.remove("show")
}

function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase()
  renderExtensions()
}

function handleFilterChange(filter) {
  currentFilter = filter

  // Update active tab
  filterTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === filter)
  })

  renderExtensions()
}

function clearSearch() {
  searchQuery = ""
  searchInput.value = ""
  renderExtensions()
}

// Extension management
function toggleExtension(id) {
  const extension = extensions.find((ext) => ext.id === id)
  if (extension) {
    extension.isActive = !extension.isActive
    renderExtensions()
    updateCounts()
  }
}

function removeExtension(id) {
  extensions = extensions.filter((ext) => ext.id !== id)
  renderExtensions()
  updateCounts()
}

// Rendering functions
function renderExtensions() {
  const filteredExtensions = getFilteredExtensions()

  if (filteredExtensions.length === 0) {
    showEmptyState()
    return
  }

  hideEmptyState()

  extensionsGrid.innerHTML = filteredExtensions
    .map(
      (extension) => `
        <div class="extension-card" data-id="${extension.id}" onclick="openModal('${extension.id}')">
            <div class="extension-header">
                <div class="extension-info">
                    <div class="extension-icon" style="${extension.color}">
                        ${extension.icon}
                    </div>
                    <div class="extension-details">
                        <h3>${extension.name}</h3>
                        <div class="extension-category">${extension.category}</div>
                    </div>
                </div>
                <div class="extension-toggle ${extension.isActive ? "active" : ""}" 
                     onclick="event.stopPropagation(); toggleExtension('${extension.id}')"
                     tabindex="0"
                     role="switch"
                     aria-checked="${extension.isActive}"
                     aria-label="Toggle ${extension.name}">
                </div>
            </div>
            <p class="extension-description">${extension.description}</p>
            <div class="extension-footer">
                <button class="remove-btn" onclick="event.stopPropagation(); removeExtension('${extension.id}')" aria-label="Remove ${extension.name}">
                    <i class="fas fa-trash-alt"></i>
                    Remove
                </button>
                <div class="extension-status">
                    <div class="status-dot ${extension.isActive ? "active" : "inactive"}"></div>
                    <span class="status-text ${extension.isActive ? "active" : "inactive"}">
                        ${extension.isActive ? "Active" : "Inactive"}
                    </span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  // Add keyboard support for toggles
  document.querySelectorAll(".extension-toggle").forEach((toggle) => {
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        e.stopPropagation()
        toggle.click()
      }
    })
  })
}

function getFilteredExtensions() {
  let filtered = extensions

  // Apply search filter
  if (searchQuery) {
    filtered = filtered.filter(
      (ext) =>
        ext.name.toLowerCase().includes(searchQuery) ||
        ext.description.toLowerCase().includes(searchQuery) ||
        ext.category.toLowerCase().includes(searchQuery),
    )
  }

  // Apply status filter
  switch (currentFilter) {
    case "active":
      return filtered.filter((ext) => ext.isActive)
    case "inactive":
      return filtered.filter((ext) => !ext.isActive)
    default:
      return filtered
  }
}

function showEmptyState() {
  extensionsGrid.style.display = "none"
  emptyState.style.display = "block"

  if (searchQuery) {
    emptyMessage.textContent = `No extensions match "${searchQuery}". Try adjusting your search terms.`
    clearSearchBtn.style.display = "inline-block"
  } else {
    emptyMessage.textContent = "No extensions found for the selected filter."
    clearSearchBtn.style.display = "none"
  }
}

function hideEmptyState() {
  extensionsGrid.style.display = "grid"
  emptyState.style.display = "none"
}

function updateCounts() {
  const totalCount = extensions.length
  const activeCount = extensions.filter((ext) => ext.isActive).length
  const inactiveCount = totalCount - activeCount

  // Update filter badges
  document.getElementById("allCount").textContent = totalCount
  document.getElementById("activeCount").textContent = activeCount
  document.getElementById("inactiveCount").textContent = inactiveCount

  // Update stats footer
  document.getElementById("activeStatCount").textContent = `${activeCount} Active`
  document.getElementById("inactiveStatCount").textContent = `${inactiveCount} Inactive`
  document.getElementById("totalStatCount").textContent = `${totalCount} Total Extensions`
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // ESC to close theme dropdown
  if (e.key === "Escape") {
    hideThemeDropdown()
  }

  // Ctrl/Cmd + F to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "f") {
    e.preventDefault()
    searchInput.focus()
  }
})

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = "smooth"

// Modal functions
function openModal(extensionId) {
  const extension = extensions.find((ext) => ext.id === extensionId)
  if (!extension) return

  currentModalExtension = extension
  populateModal(extension)
  modalOverlay.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modalOverlay.classList.remove("show")
  document.body.style.overflow = ""
  currentModalExtension = null
}

function populateModal(extension) {
  // Header
  document.getElementById("modalIcon").style.cssText = extension.color
  document.getElementById("modalIcon").textContent = extension.icon
  document.getElementById("modalTitle").textContent = extension.name
  document.getElementById("modalSubtitle").textContent = `${extension.category} • Version ${extension.version}`

  // Status
  updateModalToggle()

  // Description
  document.getElementById("modalDescription").textContent = extension.fullDescription || extension.description

  // Details
  document.getElementById("modalVersion").textContent = extension.version
  document.getElementById("modalCategory").textContent = extension.category
  document.getElementById("modalSize").textContent = extension.size
  document.getElementById("modalLastUpdated").textContent = extension.lastUpdated
  document.getElementById("modalDeveloper").textContent = extension.developer

  // Rating
  const ratingContainer = document.getElementById("modalRating")
  const fullStars = Math.floor(extension.rating)
  const hasHalfStar = extension.rating % 1 !== 0

  let starsHTML = ""
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }
  starsHTML += `<span class="rating-text">${extension.rating} (${extension.ratingCount.toLocaleString()})</span>`
  ratingContainer.innerHTML = starsHTML

  // Permissions
  const permissionsContainer = document.getElementById("modalPermissions")
  permissionsContainer.innerHTML = extension.permissions
    .map(
      (permission) => `
    <div class="permission-item">
      <div class="permission-icon">
        <i class="${permission.icon}"></i>
      </div>
      <div class="permission-info">
        <div class="permission-title">${permission.title}</div>
        <div class="permission-description">${permission.description}</div>
      </div>
    </div>
  `,
    )
    .join("")

  // Settings
  const settingsContainer = document.getElementById("modalSettings")
  settingsContainer.innerHTML = extension.settings
    .map((setting) => {
      let controlHTML = ""
      if (setting.type === "toggle") {
        controlHTML = `<div class="setting-toggle ${setting.value ? "active" : ""}" onclick="toggleSetting('${setting.id}')"></div>`
      } else if (setting.type === "select") {
        controlHTML = `
        <select class="setting-select" onchange="updateSetting('${setting.id}', this.value)">
          ${setting.options.map((option) => `<option value="${option}" ${option === setting.value ? "selected" : ""}>${option}</option>`).join("")}
        </select>
      `
      }

      return `
      <div class="setting-item">
        <div class="setting-info">
          <div class="setting-title">${setting.title}</div>
          <div class="setting-description">${setting.description}</div>
        </div>
        <div class="setting-control">
          ${controlHTML}
        </div>
      </div>
    `
    })
    .join("")

  // Usage Statistics
  document.getElementById("modalUsageTime").textContent = extension.stats.activeTime
  document.getElementById("modalUsageCount").textContent = extension.stats.usageCount
  document.getElementById("modalDataSaved").textContent = extension.stats.dataProcessed
}

function updateModalToggle() {
  if (!currentModalExtension) return

  const toggle = document.getElementById("modalToggle")
  const statusDot = document.getElementById("modalStatusDot")
  const statusText = document.getElementById("modalStatusText")
  const statusDescription = document.getElementById("modalStatusDescription")

  toggle.classList.toggle("active", currentModalExtension.isActive)
  statusDot.classList.toggle("active", currentModalExtension.isActive)
  statusDot.classList.toggle("inactive", !currentModalExtension.isActive)
  statusText.classList.toggle("active", currentModalExtension.isActive)
  statusText.classList.toggle("inactive", !currentModalExtension.isActive)
  statusText.textContent = currentModalExtension.isActive ? "Active" : "Inactive"
  statusDescription.textContent = currentModalExtension.isActive
    ? "This extension is currently active and running."
    : "This extension is currently disabled."
}

function toggleSetting(settingId) {
  if (!currentModalExtension) return

  const setting = currentModalExtension.settings.find((s) => s.id === settingId)
  if (setting && setting.type === "toggle") {
    setting.value = !setting.value

    // Update the toggle visual state
    const toggleElement = document.querySelector(`[onclick="toggleSetting('${settingId}')"]`)
    toggleElement.classList.toggle("active", setting.value)
  }
}

function updateSetting(settingId, value) {
  if (!currentModalExtension) return

  const setting = currentModalExtension.settings.find((s) => s.id === settingId)
  if (setting) {
    setting.value = value
  }
}

function saveModalSettings() {
  if (!currentModalExtension) return

  // In a real extension, this would save settings to storage
  console.log("Saving settings for", currentModalExtension.name, currentModalExtension.settings)

  // Show a brief success message
  const saveBtn = document.getElementById("modalSaveBtn")
  const originalText = saveBtn.innerHTML
  saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!'
  saveBtn.style.background = "var(--success-color)"

  setTimeout(() => {
    saveBtn.innerHTML = originalText
    saveBtn.style.background = ""
  }, 2000)
}

function openExtensionOptions() {
  if (!currentModalExtension) return

  // In a real extension, this would open the extension's options page
  console.log("Opening options for", currentModalExtension.name)
  alert(`Opening options page for ${currentModalExtension.name}`)
}
