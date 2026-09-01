# ==========================================
# Research Handbooks Project Structure Setup
# ==========================================

$ProjectName = "D:\project_book"

# Create root directory
New-Item -ItemType Directory -Path $ProjectName -Force | Out-Null

# -----------------
# Folder Structure
# -----------------

$folders = @(
    "handbooks",
    "handbooks\handbook01",
    "handbooks\handbook01\images",
    "handbooks\handbook02",
    "handbooks\handbook03",

    "assets",
    "assets\css",
    "assets\js",
    "assets\icons",
    "assets\fonts",

    "vendor",
    "vendor\katex",
    "vendor\prism"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path (Join-Path $ProjectName $folder) -Force | Out-Null
}

# -----------------
# Files
# -----------------

$files = @(
    "index.html",
    "handbook.html",
    "chapter.html",

    "catalog.json",

    "README.md",

    "handbooks\handbook01\metadata.json",
    "handbooks\handbook01\chapter01.md",
    "handbooks\handbook01\chapter02.md",

    "assets\css\theme.css",
    "assets\css\layout.css",
    "assets\css\reader.css",
    "assets\css\sidebar.css",
    "assets\css\prism-theme.css",

    "assets\js\app.js",
    "assets\js\catalog.js",
    "assets\js\handbook.js",
    "assets\js\reader.js",
    "assets\js\markdown.js",
    "assets\js\toc.js",
    "assets\js\navigation.js",
    "assets\js\search.js",
    "assets\js\utils.js",

    "vendor\marked.min.js"
)

foreach ($file in $files) {
    $path = Join-Path $ProjectName $file

    if (!(Test-Path $path)) {
        New-Item -ItemType File -Path $path -Force | Out-Null
    }
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host " Research Handbooks project created!" -ForegroundColor Green
Write-Host " Location: $((Resolve-Path $ProjectName).Path)" -ForegroundColor Cyan
Write-Host "=========================================="